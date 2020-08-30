import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import router from "./app/router";
const port = 8080;

const app = express()

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Cache-Control, Content-Type");
    return next();
});

app.use("/api", router);

app.listen(port, () => {
    console.log(`Server is now running at port *****${port}***** `)
})
