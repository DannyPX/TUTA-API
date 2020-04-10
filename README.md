# TUTA API DOCUMENTATION
>Version: 0.4

>Author: Danny Vu & Jorrit Verstappen



# NS API
| | | |
|-|-|-|
|Host       |`/api/ns/` |
|Version    |`0.1.3`    |
---
## stations
| | | |
|-|-|-|
|Request URL|`/api/ns/stations` |
|DataType   |`JSON`             |

### __Parameters__

|Parameter      |Type           |Format         |Example|
|---------------|---------------|---------------|-------|
|None|||

### __Example__
> .../api/ns/stations
```javascript
Status 200 OK:
[
    ...
    {
        code: "EHV",
        namen:  {
            lang:   "Eindhoven Centraal",
            kort:   "Eindhovn C",
            middel: "Eindhoven C."
        }
    },
    {
        code: "EHS",
        namen:  {
            lang:   "Eindhoven Strijp-S",
            kort:   "Strijp-S",
            middel: "Strijp-S"
        }
    },
    ...
]
```

------
## departures
| | | |
|-|-|-|
|Request URL|`/api/ns/departures/{code}` |
|DataType   |`JSON`             |

### __Parameters__

|Parameter      |Type           |Format         |Example|
|---------------|---------------|---------------|-------|
|code           |`String`       |               |`EHV`  |

### __Example__
> .../api/ns/departures/EHV
```javascript
Status 200 OK:
[
    ...
    {
        direction: "Deurne",
        plannedDateTime: "2020-03-27T09:35:00+0100",
        actualDateTime: "2020-03-27T09:35:00+0100",
        plannedTrack: "1",
        product: {
            number: "4427",
            categoryCode: "SPR",
            shortCategoryName: "NS Sprinter",
            longCategoryName: "Sprinter",
            operatorCode: "NS",
            operatorName: "NS",
            type: "TRAIN"
        }
    },
    {
        direction: "Alkmaar",
        plannedDateTime: "2020-03-27T09:36:00+0100",
        actualDateTime: "2020-03-27T09:36:00+0100",
        plannedTrack: "4",
        product: {
            number: "830",
            categoryCode: "IC",
            shortCategoryName: "NS Intercity",
            longCategoryName: "Intercity",
            operatorCode: "NS",
            operatorName: "NS",
            type: "TRAIN"
        }
    },
    ...
]
```

---
## getTrips
| | | |
|-|-|-|
|Request URL|`/api/ns/getTrips/{origin}&{destination}`
|DataType   |`JSON`|

### __Parameters__

|Parameter      |Type           |Format         |Example|
|---------------|---------------|---------------|-------|
|origin         |`String`       |               |`EHV`  |
|destination    |`String`       |               |`HM`   |

### __Example__
> .../api/ns/getTrips/EHV&HM
```javascript
Status 200 OK:
[
    ...
    {
        legs: [{
            idx: "0",
            name: "IC 3531 ",
            travelType: "PUBLIC_TRANSIT",
            direction: "Venlo",
            cancelled: false,
            changePossible: true,
            alternativeTransport: false,
            journeyDetailRef: "1|464716|1|884|27032020",
            origin: {
                name: "Eindhoven Centraal",
                lng: 5.479977,
                lat: 51.442362,
                countryCode: "NL",
                uicCode: "8400206",
                type: "STATION",
                prognosisType: "PROGNOSED",
                plannedTimeZoneOffset: 60,
                plannedDateTime: "2020-03-27T10:49:00+0100",
                plannedTrack: "2",
                checkinStatus: "CHECKIN",
                notes: [{
                        value: "Station Accessible or Travel Assistance",
                        key: "IS",
                        noteType: "ATTRIBUTE",
                        priority: 0,
                        isPresentationRequired: false,
                        category: "UNKNOWN"
                    },
                    {
                        value: "Station is Accessible",
                        key: "SH",
                        noteType: "ATTRIBUTE",
                        priority: 0,
                        isPresentationRequired: false,
                        category: "UNKNOWN"
                    },
                    {
                        value: "Travel Assistance available at this station",
                        key: "SS",
                        noteType: "ATTRIBUTE",
                        priority: 0,
                        isPresentationRequired: false,
                        category: "UNKNOWN"
                    },
                    {
                        value: "ehv",
                        key: "EK",
                        noteType: "INFOTEXT",
                        isPresentationRequired: false,
                        category: "UNKNOWN"
                    }
                ]
            },
            destination: {
                name: "Helmond",
                lng: 5.661694,
                lat: 51.475874,
                countryCode: "NL",
                uicCode: "8400313",
                type: "STATION",
                prognosisType: "PROGNOSED",
                plannedTimeZoneOffset: 60,
                plannedDateTime: "2020-03-27T10:58:00+0100",
                plannedTrack: "2",
                exitSide: "LEFT",
                checkinStatus: "CHECKOUT",
                notes: [{
                        value: "Station Accessible or Travel Assistance",
                        key: "IS",
                        noteType: "ATTRIBUTE",
                        priority: 0,
                        isPresentationRequired: false,
                        category: "UNKNOWN"
                    },
                    {
                        value: "Travel Assistance available at this station",
                        key: "SS",
                        noteType: "ATTRIBUTE",
                        priority: 0,
                        isPresentationRequired: false,
                        category: "UNKNOWN"
                    },
                    {
                        value: "hm",
                        key: "EK",
                        noteType: "INFOTEXT",
                        isPresentationRequired: false,
                        category: "UNKNOWN"
                    }
                ]
            },
            product: {
                number: "3531",
                categoryCode: "IC",
                shortCategoryName: "IC",
                longCategoryName: "Intercity",
                operatorCode: "ns",
                operatorName: "NS",
                type: "TRAIN",
                displayName: "NS Intercity"
            },
            notes: [{
                    value: "+eas, source RAST attributonstation, durch TPSI berechnet",
                    key: "ES",
                    noteType: "ATTRIBUTE",
                    priority: 0,
                    routeIdxFrom: 22,
                    routeIdxTo: 22,
                    isPresentationRequired: false,
                    category: "UNKNOWN"
                },
                {
                    value: "+eas, source RAST attributonstation, durch TPSI berechnet",
                    key: "ES",
                    noteType: "ATTRIBUTE",
                    priority: 0,
                    routeIdxFrom: 25,
                    routeIdxTo: 25,
                    isPresentationRequired: false,
                    category: "UNKNOWN"
                }
            ],
            messages: [],
            stops: [{
                    uicCode: "8400206",
                    name: "Eindhoven Centraal",
                    lng: 5.479977,
                    lat: 51.442362,
                    countryCode: "NL",
                    notes: [{
                            value: "Station Accessible or Travel Assistance",
                            key: "IS",
                            type: "A",
                            priority: 0
                        },
                        {
                            value: "Station is Accessible",
                            key: "SH",
                            type: "A",
                            priority: 0
                        },
                        {
                            value: "Travel Assistance available at this station",
                            key: "SS",
                            type: "A",
                            priority: 0
                        }
                    ],
                    routeIdx: 22,
                    plannedDepartureDateTime: "2020-03-27T10:49:00+0100",
                    plannedDepartureTimeZoneOffset: 60,
                    plannedDepartureTrack: "2",
                    cancelled: false,
                    borderStop: false,
                    passing: false
                },
                {
                    uicCode: "8400242",
                    name: "Helmond Brandevoort",
                    lng: 5.60881,
                    lat: 51.462498,
                    countryCode: "NL",
                    notes: [],
                    routeIdx: 23,
                    plannedDepartureTimeZoneOffset: 60,
                    plannedArrivalTimeZoneOffset: 60,
                    cancelled: false,
                    borderStop: false,
                    passing: true
                },
                {
                    uicCode: "8400300",
                    name: "Helmond 't Hout",
                    lng: 5.630852,
                    lat: 51.467936,
                    countryCode: "NL",
                    notes: [],
                    routeIdx: 24,
                    plannedDepartureTimeZoneOffset: 60,
                    plannedArrivalTimeZoneOffset: 60,
                    cancelled: false,
                    borderStop: false,
                    passing: true
                },
                {
                    uicCode: "8400313",
                    name: "Helmond",
                    lng: 5.661694,
                    lat: 51.475874,
                    countryCode: "NL",
                    notes: [{
                            value: "Station Accessible or Travel Assistance",
                            key: "IS",
                            type: "A",
                            priority: 0
                        },
                        {
                            value: "Travel Assistance available at this station",
                            key: "SS",
                            type: "A",
                            priority: 0
                        }
                    ],
                    routeIdx: 25,
                    plannedArrivalDateTime: "2020-03-27T10:58:00+0100",
                    plannedArrivalTimeZoneOffset: 60,
                    plannedArrivalTrack: "2",
                    cancelled: false,
                    borderStop: false,
                    passing: false
                }
            ],
            steps: [],
            punctuality: 100,
            shorterStock: false,
            journeyDetail: [{
                type: "TRAIN_XML",
                link: {
                    uri: "https://ews-rpx.ns.nl/mobile-api-serviceinfo?companycode=ns&ritnummer=3531&datetime=2020-03-27T10%3A49%3A00%2B01%3A00",
                    params: {}
                }
            }],
            reachable: false
        }]
    },
    ...
]
```

# 9292 API
| | | |
|-|-|-|
|Host   |`/api/9292/`   |
|Version|`0.2.2`        |
---
## searchLocation
| | | |
|-|-|-|
|Request URL|`/api/9292/searchLocation/{keyword}`   |
|DataType   |`JSON`                                 |

### __Parameters__

|Parameter      |Type           |Format         |Example      |
|---------------|---------------|---------------|-------------|
|keyword        |`String`       |               |`Eindhoven`  |

### __Example__
> .../api/9292/searchLocation/Eindhoven
```javascript
Status 200 OK:
[
    ...
    {
        id: "station-eindhoven",
        type: "station"
    },
    {
        id: "station-eindhoven-strijp-s",
        type: "station"
    },
    {
        id: "eindhoven",
        type: "place"
    },
    {
        id: "eindhoven_ggd-gezondheidsdienst",
        type: "poi"
    },
    ...
]
```

---
## getTrips
| | | |
|-|-|-|
|Request URL|`/api/ns/9292/getTrips/{origin}&{destination}&{dateTime}`
|DataType   |`JSON`|

### __Parameters__

|Parameter      |Type           |Format         |Example|
|---------------|---------------|---------------|-------|
|origin         |`String`       |               |`station-eindhoven`  |
|destination    |`String`       |               |`station-helmond`   |
|dateTime       |`String`       |`{yyyy-MM-ss}T{HHmm}`|`2020-03-26T1754`|

### __Example__
> .../api/9292/getTrips/station-eindhoven&station-helmond&2020-03-26T1754
```javascript
Status 200 OK
[
    ...
    {
    numberOfChanges: 0,
    legs: [{
        type: "scheduled",
        mode: {
            type: "train",
            name: "Intercity"
        },
        destination: "Venlo",
        operator: {
            type: "NS",
            name: "NS",
            contactpageurl: "https://www.ns.nl/formulieren/contact.html",
            code: "1"
        },
        service: "3559",
        serviceColour: null,
        attributes: [],
        disturbancePlannerIds: [
            "20190728"
        ],
        serviceMessageIds: [],
        stops: [{
                arrival: "2020-03-26T17:43",
                departure: "2020-03-26T17:49",
                platform: "2",
                location: {
                    id: "station-eindhoven",
                    type: "station",
                    stationId: "ehv",
                    stationType: "Station",
                    name: "Eindhoven Centraal",
                    place: {
                        name: "Eindhoven",
                        regionCode: "NB",
                        regionName: "Noord-Brabant",
                        showRegion: false,
                        countryCode: "NL",
                        countryName: "Nederland",
                        showCountry: false
                    },
                    latLong: {
                        lat: 51.44281,
                        long: 5.47969
                    },
                    urls: {
                        nl - NL: "/station-eindhoven",
                        en - GB: "/en/station-eindhoven"
                    }
                },
                fallbackName: null,
                stopId: "33351",
                stopDetails: {
                    destination: "Den Haag Centraal,Eindhoven Centraal,Venlo,Dordrecht,Deurne,Rotterdam Centraal,Enkhuizen,Maastricht,Schiphol,Heerlen,Oss,Tilburg Universiteit,Weert,Den Helder,Tilburg,s Hertogenbosch,Zaandam",
                    disabledaccessibilityvisible: false,
                    disabledaccessible: null,
                    visuallyaccessibilityvisible: false,
                    visuallyaccessible: null,
                    bicyclestorage: "N",
                    bicyclestoragecapacity: "0",
                    rdmcoord: {
                        Easting: 161450,
                        Northing: 383700
                    },
                    transports: [{
                            Type: "Trein",
                            Product: "Stopbus i.p.v. trein"
                        },
                        {
                            Type: "Trein",
                            Product: "Intercity"
                        },
                        {
                            Type: "Trein",
                            Product: "Snelbus i.p.v. trein"
                        },
                        {
                            Type: "Trein",
                            Product: "Sprinter"
                        }
                    ]
                },
                callType: "Board",
                clusterId: "ehv"
            },
            {
                arrival: "2020-03-26T17:58",
                departure: "2020-03-26T17:58",
                platform: "2",
                location: {
                    id: "station-helmond",
                    type: "station",
                    stationId: "hm",
                    stationType: "Station",
                    name: "Helmond",
                    place: {
                        name: "Helmond",
                        regionCode: "NB",
                        regionName: "Noord-Brabant",
                        showRegion: false,
                        countryCode: "NL",
                        countryName: "Nederland",
                        showCountry: false
                    },
                    latLong: {
                        lat: 51.475512,
                        long: 5.661695
                    },
                    urls: {
                        nl - NL: "/station-helmond",
                        en - GB: "/en/station-helmond"
                    }
                },
                fallbackName: null,
                stopId: "1373",
                stopDetails: {
                    destination: "Eindhoven Centraal,Venlo,Deurne,Schiphol,Dordrecht,Oss",
                    disabledaccessibilityvisible: false,
                    disabledaccessible: null,
                    visuallyaccessibilityvisible: false,
                    visuallyaccessible: null,
                    bicyclestorage: "N",
                    bicyclestoragecapacity: "0",
                    rdmcoord: {
                        Easting: 174070,
                        Northing: 387460
                    },
                    transports: [{
                            Type: "Trein",
                            Product: "Intercity"
                        },
                        {
                            Type: "Trein",
                            Product: "Sprinter"
                        }
                    ]
                },
                callType: "Exit",
                clusterId: "hm"
            }
        ]
    }]
    },
    ...
]
```

# Rain API
| | | |
|-|-|-|
|Host   |`/api/weer/`   |
|Version|`0.3.2`        |
---
## get2HForecast
| | | |
|-|-|-|
|Request URL|`/api/weer/get2HForecast/{lat}&{lon}`   |
|DataType   |`JSON` |

### __Parameters__

|Parameter      |Type           |Format         |Example      |
|---------------|---------------|---------------|-------------|
|lat            |`Int`          |`XX.XX`        |`51.48`      |
|lon            |`Int`          |`XX.XX`        |`5.66`       |

### __Example__
> .../api/weer/get2HForecast/51.48&5.66
```javascript
Status 200 OK:
{
    neerslag: {
        13: 30: "0.10",
        13: 35: "0.10",
        13: 40: "0.30",
        13: 45: "0.30",
        13: 50: "0.20",
        13: 55: "0.00",
        14: 00: "0.00",
        14: 05: "0.00",
        14: 10: "0.00",
        14: 15: "0.00",
        14: 20: "0.00",
        14: 25: "0.00"
    },
    address: {
        house_number: "81",
        road: "Zuidende",
        neighbourhood: "Binnenstad",
        suburb: "Helmond",
        town: "Helmond",
        state: "North Brabant",
        postcode: "5701KX",
        country: "The Netherlands",
        country_code: "nl",
        city: "Helmond"
    }
}
```