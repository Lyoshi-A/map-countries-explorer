import React, {useContext, useEffect, useState} from 'react';
import {TestContext} from "../../../provider";
import {
    defaultCountryData,
    countryOptions,
    countryData,
} from '../../../provider/constants';
import {Chart} from "react-google-charts";

const ViewBlock = ({loader, args:{params:{country}}}) => {
    const {
        subject,
        getCountryDetails,
    } = useContext(TestContext);

    const [data, setData] = useState(defaultCountryData);

    useEffect(()=> {
        getCountryDetails(country);
        subject.subscribe({
            next: (result) => {
               countryData.push([data.name, data.population]);
               setData(current => ({...current, ...result}))
            }
        });
        return () => {
            subject.unsubscribe();
        }
    },[])

    return <div className="container-details">
        <div>
            <div className="block-height"><img className="flag" alt="flag" width="80" src={data.flag} />{data.name}</div>
            <div className="block-title">Native name: {data.nativeName}</div>
            <div className="block-title">Code: {data.alpha2Code}, {data.alpha3Code}</div>
            <div className="block-title">Capital: {data.capital}</div>
            <div className="block-caption">Domain: {data.topLevelDomain.join(', ')}</div>
            <div className="block-caption">Population {data.population}</div>
            <div className="block-caption">Region: {data.region}, Subregion: {data.subregion}</div>
            <div className="block-caption">Borders: {data.borders.join(', ')}</div>
            <div className="block-caption">Lat-Lng: {data.latlng.join(', ')}</div>
            <div className="block-caption">Area: {data.area}</div>
            <div className="block-size">Curencies: {JSON.stringify(data.currencies)}</div>
        </div>
        <div>
            <Chart
                chartType="GeoChart"
                loader={<div>Loading Chart</div>}
                data={countryData}
                options={countryOptions(country)}
            />
            <div className="block-time">Time zones: {data.timezones.join(', ')}</div>
            <div className="block-size">Calling code: {data.callingCodes.join(', ')}</div>
            <div className="block-size">Numeric code: {data.numericCode}</div>
            <div className="block-txs-label">Translations: {JSON.stringify(data.translations)}</div>
        </div>
    </div>
}

export default ViewBlock
