// import http from 'http';

// const server = http.createServer((request, response) => {
//     response.end("Hola Mundo!!!!");
// })

// const port = 8080;

// server.listen(port, () => {
//     console.log("Servidor activo : " + port);
// })

import express from "express";
import fs from "fs";

const app = express();
const port = 8080;
// const productos = [{id: 1,
//     name: "Coca",
//     price: 3500,
//     avalaible: true,
// }, {id: 1,
//     name: "Sprite",
//     price: 3000,
//     avalaible: false,
// }, {id: 1,
//     name: "Pepsi",
//     price: 3200,
//     avalaible: true,
// }, {id: 1,
//     name: "Fanta",
//     price: 2900,
//     avalaible: true,
// }]; //Sólo para local sin JSON.

const data = "productos.json";

app.get("/productos", (request, response) => {
    fs.readFile(data, (err, contenido) => {
        const productos = JSON.parse(contenido)
        response.send(productos)
    });
})

app.get("/", (request, response) => {
    response.send("Bienvenidos!!");
})

app.get("/productos/:prodId", (request, response) => {
    // const data = "productos.json";
    const id = request.params.prodId;
    fs.readFile(data, "utf-8", (err, contenido) => {
        let productos = JSON.parse(contenido);
        const producto = productos.find(item => item.id == id);
        if(producto){
        response.send(producto)
        } else 
            {response.send("No se ha encontrado el producto.")
        };
    });
})

app.listen(port, () => {
    console.log("Servidor activo!" + port);
})

//////Cart///////

const cart = [];

app.get("/cart", (request, response) => {
    response.send(`Su carrito de compra: ${cart}`);
})