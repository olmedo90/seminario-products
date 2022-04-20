import express from 'express';
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
dotenv.config();
const app = express();
//rutas
//static files changes images
app.get(/\/assets\/[.*\/]*.+(css|scss|js|jpeg|png)/i, (request, response) => {
    try {

        let  absolutePath = path.resolve('./public' + request.url);
        response.status(200).sendFile(absolutePath);
    } catch (err) {
        throw 'Error ' + err;
    }
    
});
app.get('/', (resquest, response) => {
    const htmlTemplate = fs.readFileSync("./public/index.html");
    let htmlString = htmlTemplate.toString();
    response.status(200).send(`${htmlString}`);
});

app.get('/listproducts', (resquest, response) => {
    const htmlTemplate = fs.readFileSync("./public/listproducts.html");
    console.log('products');
    let htmlString = htmlTemplate.toString();
    response.status(200).send(`${htmlString}`);
});


app.get('/addproducts', (resquest, response) => {
    const htmlTemplate = fs.readFileSync("./public/addproducts.html");
    let htmlString = htmlTemplate.toString();
    response.status(200).send(`${htmlString}`);
});

app.get('/aboutus', (resquest, response) => {
    const htmlTemplate = fs.readFileSync("./public/aboutus.html");
    let htmlString = htmlTemplate.toString();
    response.status(200).send(`${htmlString}`);
});

app.get('/login', (resquest, response) => {
    const htmlTemplate = fs.readFileSync("./public/login.html");
    let htmlString = htmlTemplate.toString();
    response.status(200).send(`${htmlString}`);
});

app.get('/producsys', (resquest, response) => {
    const htmlTemplate = fs.readFileSync("./public/producsys.html");
    let htmlString = htmlTemplate.toString();
    response.status(200).send(`${htmlString}`);
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`the server is runnning in ${port}`);
});