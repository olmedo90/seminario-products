import express from 'express';
import dotenv from "dotenv";
import fs from "fs";
dotenv.config();
const app = express();
//rutas
app.use('/', (resquest, response) => {
    const htmlTemplate = fs.readFileSync("./public/index.html");
    let htmlString = htmlTemplate.toString();
    response.status(200).send(`${htmlString}`);
});
app.use('/listproducts', (resquest, response) => {
    const htmlTemplate = fs.readFileSync("./public/index.html");
    let htmlString = htmlTemplate.toString();
    response.status(200).send(`${htmlString}`);
});
app.use('/addproducts', (resquest, response) => {
    const htmlTemplate = fs.readFileSync("./public/index.html");
    let htmlString = htmlTemplate.toString();
    response.status(200).send(`${htmlString}`);
});
app.use('/aboutus', (resquest, response) => {
    const htmlTemplate = fs.readFileSync("./public/index.html");
    let htmlString = htmlTemplate.toString();
    response.status(200).send(`${htmlString}`);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`the server is runnning in ${port}`);
});