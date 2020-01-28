import {Observable} from 'rxjs';

const url = 'https://restcountries.eu/rest/v2'

export const loadRegion = region => api(`${url}/region/${region.toLowerCase()}`);

export const loadCountry = country =>  api(`${url}/alpha/${country.toUpperCase()}`);

const api = url => {
    return new Observable(async observer => {
        try {
            const response = await fetch(url);
            const data = await response.json()
            observer.next(data);
            observer.complete();
        } catch (error) {
            observer.error(error)
        }
    })
}
