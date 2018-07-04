const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const multer = require('multer');
const cookieSession = require("cookie-session");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cookieParser('dafafasafaf64f46a1df57f961f4d8f496'));
app.use(bodyParser.urlencoded({extend: false}));

var arr= [];
for(let i=0; i<1000;i++){
  arr.push("keys_" + 1000*Math.random());
}
app.use(cookieSession({name:"session_zen_id", keys: arr, maxAge: 6*3600*1000}));
app.use(multer({dest: './upload'}).any());

app.use(cors({
  origin: 'http://localhost:8080/',
  "methods": "GET,POST"
}));




app.listen(3000);
