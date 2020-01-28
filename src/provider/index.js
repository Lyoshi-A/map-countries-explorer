import React, { useRef } from 'react';
import { Subject } from 'rxjs'

import {
    defaultRegion,
    DEFAULT_DATA,
    googleMainRegionCodes,
} from './constants';

import { loadRegion, loadCountry } from './../services/country.service';

export const TestContext = React.createContext();

const TestProvider = ({children}) => {

    const subject = new Subject();
    const dataSource = useRef(DEFAULT_DATA);

    const getRegionDetails = region => {
        loadRegion(region)
            .subscribe((data) => {
                subject.next({
                    region: googleMainRegionCodes[region] || defaultRegion,
                    data: data || [],
                });
            }, (err) => {
                console.log('Error:', err)
                // window.location.replace('/404')
            })
    }

    const getCountryDetails = country => {
        loadCountry(country)
            .subscribe(data => {
                subject.next(data);
            }, (err) => {
                console.log('Error:', err)
                // window.location.replace('/404')
            })
    }

    // const getRegionApiData = (selection, data) => {
    //     if (selection.length) {
    //         const value = data[selection[0].row + 1][0];
    //         getRegionDetails(value.f);
    //     }
    // }

    const props = {
        subject,
        dataSource,
        getCountryDetails,
        getRegionDetails,
    }
    return <TestContext.Provider value={props} >
        {children}
    </TestContext.Provider>
};

export default TestProvider;
