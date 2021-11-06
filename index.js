import express from "express"

import fs from "fs"

import consign from "consign"

const PORT = 3000

const app = express()

app.set("json spaces", 4)
app.get("/:id", (req, res) => {
  fs.readFile("users.json", (err, data) => {
    console.log("err", err)
    if(err) {
      res.status(400).send({message: 'no such file', errorType: 'file_not_found'})

      return
    }

    // data = JSON.parse(data)

    // const id = req.params.id

    // let result = data.find(item => item.id === id)

    // if(!result) {
    //   res.send("404 - not found")
    // }
    // res.json(result)
    res.json([
      {title: 'Do sample nodejs'},
      {title: "Do sample express"}
    ])
  })
})

consign().include("routes").into(app)

app.listen(PORT, () => {
  console.log(`Listening: PORT: ${PORT}`)
})



