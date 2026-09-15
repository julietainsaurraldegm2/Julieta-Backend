const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Inicio');
  } else if (req.url === '/alumnos') {
    res.end('Carlos, Maria, Juan');
  } else {
    res.end('No encontrado');
  }
});

server.listen(3000, () => {
});
