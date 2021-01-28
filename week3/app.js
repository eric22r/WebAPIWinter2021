var express = require('express')
var app = express()
var serv = require('http').Server(app)
var io = require('socket.io')(serv,{})

//File Communication
app.get('/', function(req, res){
    res.sendFile(__dirname+'/client/index.html')
})

app.use('/client', express.static(__dirname+'/client'))

serv.listen(3000, function(){
    console.log('Connected on local port 3000')
})

//server side communication
io.sockets.on('connection', function(socket){
    console.log("Socket Connected")

    socket.on('sendMsg', function(data){
        console.log(data.message)
    })

    socket.on('sendBtnMsg', function(data){
        console.log(data.message)
    })

    socket.emit('messageFromServer', {
        message:'Hey Jordan Welcome to the party'
    })


})