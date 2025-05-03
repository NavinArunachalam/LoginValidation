
var http = require('http')
var url = require('url')
var math = require('./math')

http.createServer(function (req, res) {
    if (req.url.startsWith('/cal')) {
        let sum = url.parse(req.url, true).query
        let num1 = parseInt(sum.num1)
        let num2 = parseInt(sum.num2)
        var operator = sum.operator
        if (operator === "add") {
            let sum = math.add(num1, num2)
            res.writeHead(200, { 'content-type': 'text/html' })
            res.write(`<h2>the sum is ${sum}</h2>`)
        }
        if (operator === "sub") {
            let sub = math.sub(num1, num2)
            res.writeHead(200, { 'content-type': 'text/html' })
            res.write(`<h2>the subraction is ${sub}</h2>`)
        }
        if (operator === "mult") {
            let mul = math.mult(num1, num2)
            res.writeHead(200, { 'content-type': 'text/html' })
            res.write(`<h2>the multiple is ${mul}</h2>`)

        }
        if (operator === "divt") {
            let div = math.divt(num1, num2)
            res.writeHead(200, { 'content-type': 'text/html' })
            res.write(`<h2>the divison is ${div}</h2>`)

        }
    return  res.end()
    }
 
    else {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write('<form action="cal" method= "get">')
        res.write('num1<input type="number" name="num1" ><br>')
        res.write('num2:<input type="number" name= "num2"><br><br>')
        res.write('<button type="submit" name="operator" value ="add" >add</button>')
        res.write('<button type="submit" name="operator" value ="sub">sub</button>')
        res.write('<button type="submit" name="operator" value ="mult">mult</button>')
        res.write('<button type="submit" name="operator" value ="divt">divt</button>')
        res.write('</form>')
        return res.end()
    }
}).listen(3001)
console.log('server runnig');
