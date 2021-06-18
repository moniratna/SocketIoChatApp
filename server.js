const express = require("express");
const path = require('path');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io');

const port = 3001;

app.set('views', path.join(__dirname, "views"));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (re,res, next)=> {
    res.send('test');
});

server.listen(port, ()=>{
    console.log('server started on port '+ port);
})