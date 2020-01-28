export const DEFAULT_DATA = [
    ['Region', 'Population'],
    [{v: '009', f: 'Oceania'}, {v: 1, f: '41,5 m'}],
    [{v: '150', f: 'Europe'}, {v: 2, f: '741,4 m'}],
    [{v: '142', f: 'Asia'}, {v: 3, f: '4.463 m'}],
    [{v: '019', f: 'Americas'}, {v: 4, f: '‎964,9 m'}],
    [{v: '002', f: 'Africa'}, {v: 5, f: '1.216 m'}],
];
export const defaultRegion = 'world';

export const googleMainRegionCodes = {
    'oceania': '009',
    'europe': '150',
    'asia': '142',
    'americas': '019',
    'africa': '002',
    '': defaultRegion
}

export const defaultResolution = 'continents';

export const colors = [
    '#9bf4a6',
    '#91bee9',
    '#e7e4ac',
    '#e7412f',
    '#797877'
];
export const defaultColor = '#f5f5f5';
export const defaultBackgroundColor = '#b9e2fa';

export const DEFAULT_CHART_OPTIONS = {
    enableInteractivity: true,
    region: defaultRegion,
    resolution: defaultResolution,
    sizeAxis: {minValue: 1, maxValue: 5},
    colorAxis: {
        colors: colors,
    },
    backgroundColor: defaultBackgroundColor,
    datalessRegionColor: defaultColor,
    defaultColor: defaultColor,
};

export const DEFAULT_TABLE_OPTIONS =  {
    showRowNumber: false,
    enableInteractivity: true,
    page: 'enable',
    pageSize: 10,
    pagingButtons: 'auto' ,
    width: '100%',
};

export const contriesChartOptions = (region, min, max) =>  ({
    enableInteractivity: true,
    region: region,
    resolution: "countries",
    sizeAxis: {minValue: min, maxValue: max},
    colorAxis: {
        colors: ['#b6daff', '#0067a8'],
    },
    backgroundColor: defaultBackgroundColor,
    datalessRegionColor: defaultColor,
    defaultColor: defaultColor,
});

export const countryData = [
    ['Country', 'Population'],
];

export const countryOptions = country => ({
    region: country,
    displayMode: 'text',
    backgroundColor: defaultBackgroundColor,
});

export const defaultCountryData = {
    "name":"",
    "topLevelDomain":[],
    "alpha2Code":"",
    "alpha3Code":"",
    "callingCodes":[],
    "capital":"",
    "altSpellings":[],
    "region":"",
    "subregion":"",
    "population":'',
    "latlng":[],
    "demonym":"",
    "area":"",
    "gini":"",
    "timezones":[],
    "borders":[],
    "nativeName":"",
    "numericCode":"",
    "currencies":[],
    "languages":[],
    "translations":{},
    "flag":"",
    "regionalBlocs":[],
    "cioc":""
};