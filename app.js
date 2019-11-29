var http = require('http')

function handle(req,res){
    res.writeHead(200,{
        'Content-Type':'text/html'
    })

    res.write('<!DOCTYPE "html">')
    res.write('<html>')
    res.write('<head><title> Http Module</title></head>')
    res.write('<body>')
    res.write('<h1> Hello </h1>')
    res.write('</body>')
    res.write('</html>')
    
    res.end()
}

var server = http.createServer(handle)

server.listen(3000,function(){
    console.log('Server rodando na porta 3000')
})