var marked = require('marked');
var fs = require('fs');
var path = require('path')

var readMe = fs.readFileSync('README.md', 'utf-8');
var markdownReadMe = marked(readMe);
var markdownReadMe = "<html><head><link rel='stylesheet' href='style.css'></head><body>" + markdownReadMe + "</body></html>"
fs.writeFileSync('./index.html', markdownReadMe);

const express = require('express')
const app = express();
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))

app.get('/', function(req,  res) {
  res.sendFile(path.join(__dirname + '/index.html'))
})

app.get('/api/ns/departures/:code', (req, res) => {
  var params = `maxJourneys=25&lang=nl&station=${req.params.code}`
  const Http = new XMLHttpRequest()
  const url = 'https://gateway.apiportal.ns.nl/reisinformatie-api/api/v2/departures';
  Http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      res.json(JSON.parse(this.responseText).payload.departures.map(({
        direction,
        plannedDateTime,
        actualDateTime,
        plannedTrack,
        product
      }) => ({
        direction,
        plannedDateTime,
        actualDateTime,
        plannedTrack,
        product
      })))
    }
  };
  NSHTTPRequest(Http, url, params)
})

app.get('/api/ns/stations', (req, res) => {
  var params = ""
  const Http = new XMLHttpRequest()
  const url = 'https://gateway.apiportal.ns.nl/reisinformatie-api/api/v2/stations';
  Http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      res.json(JSON.parse(this.responseText).payload.map(({
        code,
        namen
      }) => ({
        code,
        namen
      })))
    }
  };
  NSHTTPRequest(Http, url, params)
})

app.get('/api/ns/getTrips/:origin&:destination', (req, res) => {
  var params = `travelClass=SECOND_CLASS&originTransit=false&originWalk=false&originBike=false&originCar=false&travelAssistanceTransferTime=0&searchForAccessibleTrip=false&destinationTransit=false&destinationWalk=false&destinationBike=false&destinationCar=false&excludeHighSpeedTrains=false&excludeReservationRequired=false&passing=false&fromStation=${req.params.origin}&toStation=${req.params.destination}`
  const Http = new XMLHttpRequest()
  const url = 'https://gateway.apiportal.ns.nl/reisinformatie-api/api/v3/trips';
  Http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      res.json(JSON.parse(this.responseText).trips.map(({
        legs
      }) => ({
        legs
      })))
    }
  };
  NSHTTPRequest(Http, url, params)
})

function NSHTTPRequest(Http, url, params) {
  Http.open("GET", url + "?" + params)
  Http.setRequestHeader("Ocp-Apim-Subscription-Key", "0961b0af97c046a4839a61f927d3bc25")
  Http.send()
}

app.get('/api/9292/searchLocation/:keyword', (req, res) => {
  var params = `lang=nl-NL&q=${req.params.keyword}`
  const Http = new XMLHttpRequest()
  const url = 'http://api.9292.nl/0.1/locations';
  Http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var stringified = JSON.parse(this.responseText);
      const str = JSON.stringify(
        stringified,
        (key, val) => {
          if (typeof val === 'string') {
            return val.replace(/\//g, '_');
          }
          return val;
        }
      );
      res.json(JSON.parse(str).locations.map(({
        id,
        type
      }) => ({
        id,
        type
      })))
    }
  };
  BusHTTPRequest(Http, url, params)
})

app.get('/api/9292/getTrips/:origin&:destination&:dateTime', (req, res) => {
  // yyyy-mm-ddThhmm
  var params = `before=1&sequence=1&byTrain=true&byBus=true&byFerry&byTram=true&bySubway=true&lang=nl-NL&from=${req.params.origin}&to=${req.params.destination}&interchangeTime=standard&after=5&searchType=departure&dateTime=${req.params.dateTime}`
  const Http = new XMLHttpRequest()
  const url = 'http://api.9292.nl/0.1/journeys';
  Http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var stringified = JSON.parse(this.responseText);
      const str = JSON.stringify(
        stringified,
        (key, val) => {
          if (typeof val === 'string') {
            return val.replace(/_/g, '/');
          }
          return val;
        }
      );
      res.json(JSON.parse(str).journeys.map(({
        numberOfChanges,
        legs
      }) => ({
        numberOfChanges,
        legs
      })))
    }
  };
  BusHTTPRequest(Http, url, params)
})

function BusHTTPRequest(Http, url, params) {
  Http.open("GET", url + "?" + params)
  Http.send()
}