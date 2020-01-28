import React, { useContext, useEffect, useState } from 'react';
import { Chart } from "react-google-charts";
import { TestContext } from '../../../provider';
import {
    DEFAULT_CHART_OPTIONS,
    DEFAULT_TABLE_OPTIONS,
    contriesChartOptions,
    countryData,
} from '../../../provider/constants';

const DrawMap = ({loader, args:{params}}) => {
    const {
        subject,
        dataSource,
        getRegionDetails,
    } = useContext(TestContext);

    const [state, setState] = useState({
        data: dataSource.current,
        chartOptions: DEFAULT_CHART_OPTIONS,
    })

    const events = [
        {
            eventName: "select",
            callback({ chartWrapper }) {
                const selection = chartWrapper.getChart().getSelection();
                const query = dataSource.current[selection[0].row + 1][0];
                if (selection.length) {
                    if (!params.region)
                       window.location.replace(`/region/${query.f.toLowerCase()}`)
                    else
                       window.location.replace(`/country/${query.v.toUpperCase()}`)
                }
            }
        },
    ];

    useEffect(()=> {
        if (params.region) {
            getRegionDetails(params.region);
        }
        subject.subscribe({
            next: ({data, region}) => {
                if (Array.isArray(data)) {
                    data.forEach(item => countryData.push([{f: item.name, v: item.alpha2Code}, item.population]))
                }
                dataSource.current = countryData;
                setState({
                    data: countryData,
                    chartOptions: contriesChartOptions(region, 1, 1000000000)
                });
            }
        });
        return () => {
            subject.unsubscribe();
        }
    },[]) 

    return <div className="container-main">
        <Chart
            chartType="GeoChart"
            loader={<div>Loading Chart</div>}
            data={state.data}
            options={state.chartOptions}
            chartEvents={events}
        />
        <Chart
            chartType="Table"
            loader={<div>Loading Chart</div>}
            data={state.data}
            options={DEFAULT_TABLE_OPTIONS}
            chartEvents={events}
        />
    </div>
}

export default DrawMap