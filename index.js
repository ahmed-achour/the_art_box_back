//immport libs
const express = require("express");
const cors = require("cors");

// import database connection
const mongoose = require("./config/db");

// creation d'un objet express .
const app = express();
const port = 3000;

// autorisé les données de type JSON
app.use(express.json());

// autorisé les données de type files
app.use(
  express.urlencoded({
    extended: true,
  })
);

// autorisé l'accee d'un serveur
app.use(cors());

// import controllers
const storeController = require("./controllers/storeController");
const commandeController = require("./controllers/commandeController");
const productController = require("./controllers/productController");
const sectionController = require("./controllers/sectionController");
const userController = require("./controllers/userController");
const categoryController = require("./controllers/categoryController");
const blogController = require("./controllers/blogController");

// router
app.use("/store", storeController );
app.use("/commande", commandeController );
app.use("/product", productController );
app.use("/section", sectionController );
app.use("/category", categoryController );
app.use("/user", userController );
app.use("/blog", blogController );

app.listen(port, () => {
  console.log(`🟢 Server started on port ${port}`);
});
