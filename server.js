import express from 'express';
import dotenv from "dotenv";
dotenv.config();
const app = express();
//rutas
app.use('/', (resquest, response) => {
    response.send("Server on!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`the server is runnning in ${port}`);
});