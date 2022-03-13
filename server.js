const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');
const fs = require('fs')
const port = 443;
const md5 = require('md5');
const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello HTTPS');
});
https.createServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
  }, app).listen(443, () => {
    console.log('Listening...')
  });
app.post('/login', (req,res) =>{
    console.log(JSON.stringify(req.body));
    console.log("Here is the password " + req.body.password)
    if(req.body.userName == "yeju" && md5(req.body.password) == "161ebd7d45089b3446ee4e0d86dbcf92"){
        res.send("Welcome!")
    } else{
        res.send("New API who dis?");
    }
});