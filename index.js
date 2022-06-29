//immport libs
const express = require("express");
const cors = require("cors");

// import database connection
const mongoose = require("./config/db");

// creation d'un objet express .
const app = express();
const port = 3000;

// autorisé les données de type JSON
app.use(express.json())

// autorisé les données de type files
app.use(express.urlencoded({
    extended: true
}));

// autorisé l'accee d'un serveur
app.use(cors())

// router
app.use("/", (req, res)=>{
    res.status(200).send({message: "hello world"})
});

app.listen(port, ()=>{ console.log(`🟢 Server started on port ${port}`); })
