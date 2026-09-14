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

//Respuesta de la terminal: Server running at http://127.0.0.1:3000/

/* 
1. Un servidor HTTP es un programa que escucha solicitudes de clientes (como navegadores web) y responde con datos, como páginas web o información,
   El modulo 'http' de Node.js permite crear servidores HTTP de forma simple

2. el req(request) es lo que el cliente envía al servidor, como la URL solicitada, los encabezados y los datos del formulario. 
El res(response) es lo que el servidor envía de vuelta al cliente, como el contenido de la página web, los encabezados y el código de estado

3. Un puerto es un número que identifica de manera única una conexión de red de un dispositivo. Los servidores escuchan en puertos específicos para recibir solicitudes de los clientes

4. El local host se refiere a el dispositivo en el que se esta ejecutando el servidor

5. CURL es una herramienta de comandos que sirve para enviar solicitudes al servidor http y recibir respuestas. Es util para probar y depurar servidores web y API's
*/