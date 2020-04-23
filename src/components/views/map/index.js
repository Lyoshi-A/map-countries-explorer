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
            callback({ chartWrapper, google }) {
                const dt = chartWrapper.getDataTable()
                const selection = chartWrapper.getChart().getSelection();
                if (selection.length) {
                    window.history.pushState({},'', window.location.href)
                    if (!params.region) {
                        const query = dt.getFormattedValue(selection[0].row, 0);
                        window.location.replace(`/region/${query.toLowerCase()}`)
                    }
                    else {
                        const query = dt.getValue(selection[0].row, 0);
                        window.location.replace(`/country/${query.toUpperCase()}`)
                    }
                }
            },

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
    },[])// eslint-disable-line react-hooks/exhaustive-deps

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
            chartPackages={['table', 'controls']}
            controls={[
                {
                    controlType: 'StringFilter',
                    options: {
                        filterColumnIndex: 0,
                        useFormattedValue: true,
                        matchType: 'prefix' | 'exact',
                        ui: {
                            label: 'Search by name: ',
                        },
                    },
                },
            ]}
        />
    </div>
}

export default DrawMap
