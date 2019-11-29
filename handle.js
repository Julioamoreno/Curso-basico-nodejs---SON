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

module.exports = handle