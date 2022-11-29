// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
// app.get("/api/hello", function (req, res) {
//   res.json({greeting: 'hello API'});
// });


app.get("/api/:date?",(req,res)=>{
  regexExprss = /^\d{0,}$/
  let dateParam = req.params.date
  
  if(!dateParam){
    const timeElapsed = Date.now();
    // console.log(timeElapsed)
    let newdatenow = new Date()
    // console.log(newdatenow)
    res.json({"unix":timeElapsed, "utc":newdatenow.toUTCString()})
  }
  // console.log(dateParam)
  if(regexExprss.test(dateParam)){
    dateParam = parseInt(dateParam)
    // console.log("Unix: ", dateParam)
  }
  let date_string = new Date(dateParam)
  // console.log("New Date: "+newDate.toString())
  
  // res.json({"unix":, "utc":""})
  // console.log(dateParam)
  if(date_string.toString() === "Invalid Date"){
    res.json({
      error : "Invalid Date"
    })
  }
  // }else if(!dateParam){
  //   const timeElapsed = Date.now();
  //   console.log(timeElapsed)
  //   let newdatenow = new Date()
  //   console.log(newdatenow)
  //   res.json({"unix":timeElapsed, "utc":newdatenow.toUTCString()})
  // }
  else{
  res.json({"unix":date_string.valueOf(), "utc":date_string.toUTCString()})
  }
})
// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
