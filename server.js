const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');
const fs = require('fs')
const port = 3000;
const md5 = require('md5');
const app = express();
app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.send('Hello HTTPS');
});
https.createServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
  }, app).listen(3000, () => {
    console.log('Listening...')
  });
app.post('/login', (req,res) =>{
    console.log(JSON.stringify(req.body));
    if(req.body.userName == "A" && md5(req.body.password) == "9d5ed678fe57bcca610140957afab571"){
        res.send("Welcome!")
    } else{
        res.send("New API who dis?");
    }
});