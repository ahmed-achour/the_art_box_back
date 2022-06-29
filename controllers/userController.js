const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("./../models/user");

const { isAuthorized } = require("./../middlewares/auth");

const app = express();

//register API
app.post("/", async (req, res) => {
  try {
    let data = req.body;
    console.log(data);
    let checkUser = await User.findOne({ username: data.username });
    let user = new User({
      username: data.username,
      password: bcrypt.hashSync(data.password, bcrypt.genSaltSync(10)),
      role: data.role,

      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      adress: data.adress,
      phone: data.phone,

      name: data.name,
      description: data.description,
    });

    if (checkUser) {
      res.status(400).send({ message: "username already exists !" });
    } else {
      await user.save();
      res.status(201).send({ message: "user saved !" });
    }
  } catch (error) {
    res.status(400).send({ message: "user not saved !", error: error });
  }
});

//Showl All users
app.get("/", async (req, res) => {
  try {
    let users = await User.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(400).send({ message: "something went wrong !", error: error });
  }
});

//filter All users
app.get("/filter/:role", async (req, res) => {
  try {
    let role = req.params.role;
    let users = await User.find({ role: role });
    res.status(200).send(users);
  } catch (error) {
    res.status(400).send({ message: "something went wrong !", error: error });
  }
});

app.get("/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let user = await User.findOne({ _id: id });
    if (user) {
      res.status(200).send(user);
    } else {
      res.status(404).send({ message: "user not found" });
    }
  } catch (error) {
    res.status(400).send({ message: "something went wrong !", error: error });
  }
});

app.patch("/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let data = req.body;
    if (data.hasOwnProperty("password")) {
      data.password = bcrypt.hashSync(data.password, bcrypt.genSaltSync(10));
    }
    let user = await User.findOneAndUpdate({ _id: id }, data);
    console.log(user);
    if (user) {
      res.status(200).send({ message: "user updated" });
    } else {
      res.status(404).send({ message: "user not found" });
    }
  } catch (error) {
    res.status(400).send({ message: "something went wrong !", error: error });
  }
});

app.delete("/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let user = await User.findOneAndDelete({ _id: id });
    res.status(404).send({ message: "user not found" });
  } catch (error) {
    res.status(400).send({ message: "something went wrong !", error: error });
  }
});

module.exports = app;
