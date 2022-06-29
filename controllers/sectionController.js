const express = require("express")
const fs = require("fs");
const multer = require('multer')
const path = require('path');
const Section = require('./../models/section')
const { isAuthorized } = require("./../middlewares/auth");

const app = express()

const storage = multer.diskStorage(
  {

    destination: './assets/images/sections',

    filename: function (req, file, cb) {
      let name = req.body.title.replace(' ', '').toLowerCase();

      cb(null, name + '-' + Date.now() + path.extname(file.originalname));
    }
  }
);


function checkFileType(file, cb) {

  const filetypes = /jpeg|jpg|png|gif/;

  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

  const mimetype = filetypes.test(file.mimetype);

  if (mimetype == true && extname == true) {
    return cb(null, true);
  } else {
    cb('Error: Images Only!');
  }
}

const upload = multer({

  storage: storage,
  limits: { fileSize: 1000000 },
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  }
});

app.post('/',[upload.single('picture'),isAuthorized], async (req, res) => {
    try {
       let data= req.body
       let file = req.file
       let section = new Section({
        title: data.title,
        description: data.description,
        image: file.filename
       })
    await section.save();
    res.status(201).send({ message: "section added successfully" });
  } catch (error) {
    res.status(400).send({ message: "section not saved !", error: error });
    } 
})

app.get('/', async (req, res) => {
    try {
        let users = await Section.find();
        res.status(201).send(users);
   } catch (error) {
     res.status(400).send({ message: "thers is something went wrong !", error: error });
     } 
  })

app.get('/:id', async (req, res) => {
    try {
        let id = req.params.id
        let user = await Section.findOne({_id:id});
        res.status(201).send(user);
   } catch (error) {
     res.status(400).send({ message: "thers is something went wrong !", error: error });
     } 
})

app.patch('/:id',[upload.single('picture'),isAuthorized], async (req, res) => {
    try {
        let id = req.params.id
        let data = req.body
        console.log(data,req.file)
        if (req.file) {
            data.image = req.file.filename;
            let sectionPic = await Section.findOne({ _id: id });
            fs.unlinkSync("assets/images/sections/" + sectionPic.image);
          }
        let user = await Section.findOneAndUpdate({_id: id}, data);
        res.status(201).send({ message: "section updated succfully !"});
   } catch (error) {
     res.status(400).send({ message: "thers is something went wrong !", error: error });
     } 
});

app.delete('/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let section = await Trainer.findOneAndDelete({ _id: id });
        let category = await Training.deleteMany({ section: section._id });
        let products = await Training.deleteMany({ category: category._id });
        if (section && category && products) {
          res.status(200).send({ message: "section deleted" });
        } else {
          res.status(404).send({ message: "section not found !" });
        }
      } catch (error) {
        res
          .status(400)
          .send({ message: "Error deleting section !", error: error });
      }
})

  module.exports = app