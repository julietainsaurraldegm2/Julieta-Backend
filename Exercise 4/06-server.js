const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello from Node.js!');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

//Terminal response: Server running at http://127.0.0.1:3000/

/* 
1. An HTTP server is a program that listens for requests from clients (such as web browsers) and responds with data, such as web pages or information.
 Node.js's 'http' module makes it simple to create HTTP servers

2. The req (request) is what the client sends to the server, such as the requested URL, headers, and form data. 
The res (response) is what the server sends back to the client, such as the web page content, headers, and status code

3. A port is a number that uniquely identifies a network connection on a device. Servers listen on specific ports to receive requests from clients

4. Localhost refers to the device on which the server is running

5. CURL is a command-line tool used to send requests to an HTTP server and receive responses. It's useful for testing and debugging web servers and APIs
*/