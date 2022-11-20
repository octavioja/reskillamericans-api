// create a server
// http, url, path, os

const http = require('http');

const server = http.createServer((req, res) => {
  // DRY - Do not repeat yourself
  const endpoint = req.url;

  //landing page
  if (endpoint === '/') {
    res.end('we are in the puppy landing page');
  } else if (endpoint === '/about') {
    //about page for puppies
    res.end(' Puppies about page');
  } else if (endpoint === '/adopt') {
    //adopt a puppy page
    res.end('Adopt a puppy here');
  } else {
    // 404 page
    res.end('Oops!... Page not found');
  }
});

const port = 4455;
const hostname = '127.0.0.1';

// listen to server,Port number, Create an endpoint
server.listen(port, hostname, () => {
  console.log('Server is up and running');
});
