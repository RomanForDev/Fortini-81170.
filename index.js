import http from 'http';

const server = http.createServer((request, response) => {
    response.end("Hola Mundo!!");
})

const port = 8080;

server.listen(port, () => {
    console.log("Servidor activo : " + port);
})