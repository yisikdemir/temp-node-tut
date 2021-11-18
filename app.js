const http = require('http');


const server = http.createServer((req, res) => {

  if(req.url === '/') {
    res.end('Welcome to our home page');
  }
  else if(req.url === '/about') {
    res.end('This is our short history');
  }
  else {
    res.end(`
      <h1>Oops!</h1>
      <p>We can't seem to find the page you are loooking for</p>
      <a href="/">back home</a>
    `)
  }
})

server.listen(5000);



