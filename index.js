// import http from 'http';

// const server = http.createServer((request, response) => {
//     response.end("Hola Mundo!!!!");
// })

// const port = 8080;

// server.listen(port, () => {
//     console.log("Servidor activo : " + port);
// })

import express from "express";

const app = express();
const port = 8080;


app.get("/", (request, response) => {
    response.send("Hola mundo!!");
})

app.listen(port, () => {
    console.log("Servidor activo!" + port);
})