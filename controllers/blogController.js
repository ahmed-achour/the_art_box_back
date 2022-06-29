const express = require("express")

const app = express()

app.post('/', async (req, res) => {
    res.status(200).send("add")
})

app.get('/', async (req, res) => {
      res.status(200).send("show all")
  })

app.get('/:id', async (req, res) => {
    res.status(200).send("show by id")
})

app.patch('/:id', async (req, res) => {
    res.status(200).send("update bydi ")
})

app.delete('/:id', async (req, res) => {
    res.status(200).send("delete byid")
})



  module.exports = app