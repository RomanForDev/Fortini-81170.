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

// Descomentar para probar cada una

/////////////// BÚSQUEDA POR ID ///////////////////////

// app.get("/productos/:prodId", (request, response) => {
//     // const data = "productos.json";
//     const id = request.params.prodId;
//     fs.readFile(data, "utf-8", (err, contenido) => {
//         let productos = JSON.parse(contenido);
//         const producto = productos.find(item => item.id == id);
        
//         if(producto){
//             console.log("Función Id");
//             response.send(producto)
//         } else 
//             {response.send("No se ha encontrado el producto.")
//             console.log("Función Id");
//         };
//     });
// })

/////////////// BÚSQUEDA POR NAME //////////////////////

app.get("/productos/:prodName", (request, response) => {
    // const data = "productos.json";
    const name = request.params.prodName;
    fs.readFile(data, "utf-8", (err, contenido) => {
        let productos = JSON.parse(contenido);
        const producto = productos.find(item => item.name == name); // No toma el métido includes. Tendría que probar si con un scope global que parsee en local si lo toma.
        console.log("Función Name");
        if(producto){
        response.send(producto)
        } else 
            {response.send("No se ha encontrado el producto.")
        };
    });
})


/////////////////METODO POST (no se explicó bien)/////////////////////

// const productsList = [];
// class Prod{
//     constructor(id, name, price, available) {
//     this.id = id;
//     this.name = name;
//     this.price = price;
//     this.available = undefined;
//     }
// }

// app.post("/api/prod"), (request, response) => {
    // const pushProd = new Prod(9, "Baggio", 1800, true);
        //const pushData = "usuarios.json";
//     fs.readFile(data, "utf-8", (err, contenido) => {
//         let productos = JSON.parse(contenido);
//         productsList.push(productos);
//         productsList.push(pushProd);
//         fs.writeFile(data, pushProd);
//         console.log("Función Post!");
//         response.send(productsList)
//     })
// }


app.listen(port, () => {
    console.log(`Servidor ${port} activo!`);
})

//////Cart///////

const cart = [];

app.get("/cart", (request, response) => {
    response.send(`Su carrito de compra: ${cart}`);
})
