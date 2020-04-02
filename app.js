var marked = require('marked');
var fs = require('fs');
var path = require('path')

var readMe = fs.readFileSync('README.md', 'utf-8');
var markdownReadMe = marked(readMe);
var markdownReadMe = "<html><head><style>body{font-family:Helvetica,arial,sans-serif;font-size:14px;line-height:1.6;padding-top:10px;padding-bottom:10px;background-color:#fff;padding:30px}body>:first-child{margin-top:0!important}body>:last-child{margin-bottom:0!important}a{color:#4183c4}a.absent{color:#c00}a.anchor{display:block;padding-left:30px;margin-left:-30px;cursor:pointer;position:absolute;top:0;left:0;bottom:0}h1,h2,h3,h4,h5,h6{margin:20px 0 10px;padding:0;font-weight:700;-webkit-font-smoothing:antialiased;cursor:text;position:relative}h1:hover a.anchor,h2:hover a.anchor,h3:hover a.anchor,h4:hover a.anchor,h5:hover a.anchor,h6:hover a.anchor{background:url(../../images/modules/styleguide/para.png) no-repeat 10px center;text-decoration:none}h1 code,h1 tt{font-size:inherit}h2 code,h2 tt{font-size:inherit}h3 code,h3 tt{font-size:inherit}h4 code,h4 tt{font-size:inherit}h5 code,h5 tt{font-size:inherit}h6 code,h6 tt{font-size:inherit}h1{font-size:28px;color:#000}h2{font-size:24px;border-bottom:1px solid #ccc;color:#000}h3{font-size:18px}h4{font-size:16px}h5{font-size:14px}h6{color:#777;font-size:14px}blockquote,dl,li,ol,p,pre,table,ul{margin:15px 0}hr{background:transparent url(../../images/modules/pulls/dirty-shade.png) repeat-x 0 0;border:0 none;color:#ccc;height:4px;padding:0}body>h2:first-child{margin-top:0;padding-top:0}body>h1:first-child{margin-top:0;padding-top:0}body>h1:first-child+h2{margin-top:0;padding-top:0}body>h3:first-child,body>h4:first-child,body>h5:first-child,body>h6:first-child{margin-top:0;padding-top:0}a:first-child h1,a:first-child h2,a:first-child h3,a:first-child h4,a:first-child h5,a:first-child h6{margin-top:0;padding-top:0}h1 p,h2 p,h3 p,h4 p,h5 p,h6 p{margin-top:0}li p.first{display:inline-block}ol,ul{padding-left:30px}ol :first-child,ul :first-child{margin-top:0}ol :last-child,ul :last-child{margin-bottom:0}dl{padding:0}dl dt{font-size:14px;font-weight:700;font-style:italic;padding:0;margin:15px 0 5px}dl dt:first-child{padding:0}dl dt>:first-child{margin-top:0}dl dt>:last-child{margin-bottom:0}dl dd{margin:0 0 15px;padding:0 15px}dl dd>:first-child{margin-top:0}dl dd>:last-child{margin-bottom:0}blockquote{border-left:4px solid #ddd;padding:0 15px;color:#777}blockquote>:first-child{margin-top:0}blockquote>:last-child{margin-bottom:0}table{padding:0}table tr{background-color:#fff;margin:0;padding:0}table tr th{font-weight:700;text-align:left;margin:0;padding:6px 13px}table tr td{text-align:left;margin:0;padding:6px 13px}table tr td :first-child,table tr th :first-child{margin-top:0}table tr td :last-child,table tr th :last-child{margin-bottom:0}img{max-width:100%}span.frame{display:block;overflow:hidden}span.frame>span{border:1px solid #ddd;display:block;float:left;overflow:hidden;margin:13px 0 0;padding:7px;width:auto}span.frame span img{display:block;float:left}span.frame span span{clear:both;color:#333;display:block;padding:5px 0 0}span.align-center{display:block;overflow:hidden;clear:both}span.align-center>span{display:block;overflow:hidden;margin:13px auto 0;text-align:center}span.align-center span img{margin:0 auto;text-align:center}span.align-right{display:block;overflow:hidden;clear:both}span.align-right>span{display:block;overflow:hidden;margin:13px 0 0;text-align:right}span.align-right span img{margin:0;text-align:right}span.float-left{display:block;margin-right:13px;overflow:hidden;float:left}span.float-left span{margin:13px 0 0}span.float-right{display:block;margin-left:13px;overflow:hidden;float:right}span.float-right>span{display:block;overflow:hidden;margin:13px auto 0;text-align:right}code,tt{margin:0 2px;padding:0 5px;white-space:nowrap;border:1px solid #eaeaea;background-color:#f8f8f8;border-radius:3px}pre code{margin:0;padding:0;white-space:pre;border:none;background:0 0}.highlight pre{background-color:#f8f8f8;border:1px solid #ccc;font-size:13px;line-height:19px;overflow:auto;padding:6px 10px;border-radius:3px}pre{background-color:#f8f8f8;border:1px solid #ccc;font-size:13px;line-height:19px;overflow:auto;padding:6px 10px;border-radius:3px}pre code,pre tt{background-color:transparent;border:none}</style></head><body>" + markdownReadMe + "</body></html>"
fs.writeFileSync('./index.html', markdownReadMe);

var allowedOrigins = ['http://localhost:3000',
                      'https://tatu-app-staging.herokuapp.com/'];

const express = require('express')
const cors = require('cors')
const app = express();
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: function(origin, callback){
    // allow requests with no origin 
    // (like mobile apps or curl requests)
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

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

app.get('/api/weer/get2HForecast/:lat&:lon', (req, res) => {
  var params = `lat=${req.params.lat}&lon=${req.params.lon}`
  const Http = new XMLHttpRequest()
  const url = 'https://gpsgadget.buienradar.nl/data/raintext/';
  Http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var rainList = {neerslag: []}
      var rain = this.responseText.split(/\r?\n/)
      rain.pop()
      rain.forEach(element => {
        rainList.neerslag.push(
          {
            amount: Math.pow(10, ((parseInt(element.split('|')[0])-109)/32)).toFixed(2),
            time: element.split('|')[1]
          }
        )
      })
      res.json(rainList)
    }
  };
  Http.open("GET", url + "?" + params)
  Http.send()
})