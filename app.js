var http = require('http')
var handle = require('./handle')


var events = require('events')
var emiter = new events.EventEmitter()

emiter.on('falar',say)

function say(){
    console.log('Im saying..')

}

emiter.emit('falar')

var server = http.createServer(handle)

server.listen(3000,function(){
    console.log('Server rodando na porta 3000')
})