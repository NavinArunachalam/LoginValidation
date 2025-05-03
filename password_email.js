var http = require('http')
var url = require('url')
http.createServer(function (req, res) {
    if (req.url.startsWith('/password')) {
        var user = url.parse(req.url, true).query;
        let mobile = user.mobile
        let email = user.email
        let emailcheck = email.includes('@') && email.includes('.')

        if (mobile.length > 10 || mobile.length < 10) {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write('<h1>Mobile Number Must Be 10 Digits</h1>')
        }

        else if (emailcheck) {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write('<h1>Login Successful</h1>')
        }
        else {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write('<h1>Enter valid email with "@","."</h1>')
        }
        res.end()
    }
    else {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write('<h1>Login Form</h1><br>')
        res.write('<form action="password" method="get">')
        res.write('mobile:<input type="text" name="mobile" ><br>')
        res.write('Email:<input type="text" name="email" ><br>')
        res.write('<input type = "submit" value="submit">')
        res.write('</form>')
        return res.end()
    }
}).listen(3100)
console.log('server runing')
