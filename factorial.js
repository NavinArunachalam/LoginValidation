var http = require('http')
var url = require('url')

http.createServer(function(req,res){
  if(req.url.startsWith('/factorial')){
    var user = url.parse(req.url,true).query
    var num = parseInt(user.num1)
    function factorial(num) {
      var ans = 1;
      for (let i = 1; i <= num; i++) {
        ans = ans * i;
      }
      return ans
    }
    res.writeHead(200,{'content-type':'text/html'})
    res.write(`<h2>The Factorial of (${num}) is ${factorial(num)}`)
    res.end()
  }
  else{
    res.writeHead(200,{'content-type':'text/html'})
    res.write('<form action="factorial" method="get">')
    res.write('Enter the number:<input  type="number" name="num1">')
    res.write('<input type="submit" value="submit" >')
    res.write('</form >')
    res.end()
  }
}).listen(3003)



  console.log("serevr running");
  