var http = require('http')
var url = require('url')
http.createServer(function(req,res){
    if(req.url.startsWith('/odd')){
        let num =url.parse(req.url,true).query
        let number = parseInt(num.num1)
        if(number %2 == 0){
            res.writeHead(200,{'content-type':'text/html'})
            res.write('<h2> The Number is "EVEN"</h2>')
        }
        else{
            res.writeHead(200,{'content-type':'text/html'})
            res.write('<h2> The Number is "ODD"</h2>')
        }
        res.end()
    }
    else{
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<form action="odd" method="get">')
        res.write('Enter the Number:<input type="number" name="num1">')
        res.write('<input type="submit">')
        res.write('</form>')
        res.end()
    }
}).listen(3002)
console.log("running");
