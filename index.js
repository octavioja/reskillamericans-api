// Create a server
// http, url, path, os
const http = require('http');

const server = http.createServer((req, res) => {
    //landing page
    if (req.url === '/') {
        res.end('We are in the puppy landing page');
    } else if (req.url === '/about') {
        //about page
        res.end('puppies about page');
        } else if (req.url === '/adopt') {
            //adopt a puppy page 
          res.end('Adopt a puppy here');

    } else {
        //404 page
        res.end('Opps!.... page not found')

    }
});


//listen to server  // 127.0.0.1 can also be called localhost
server.listen(4455, "127.0.0.1", () => {
    console.log("Server is up and running");
});
