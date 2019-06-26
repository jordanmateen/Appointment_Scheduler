const express  = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes/routes.js')
const app = express();


const mongoose = require('mongoose')
let dbpath = 'mongodb://appt:appt123@ds149593.mlab.com:49593/appointments'

//let dbpath = 'mongodb://chatroom:1chatroom@ds153824.mlab.com:53824/chatroom'
const mongoDB = process.env.MONGODB_URI || dbpath
mongoose.connect(mongoDB,  { useNewUrlParser: true } );
mongoose.Promise = global.Promise;
let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.all('/*', function(req, res, next) {
  // CORS headers
  res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  // Set custom headers for CORS
  res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
  if (req.method == 'OPTIONS') {
    res.status(200).end();
  } else {
    next();
  }
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/api', routes)// localhost:2340/api



const PORT = 2341;

app.listen(PORT, ()=>{
  console.log(`Your server is running on PORT ${PORT}`)
})