import express from "express"

import fs from "fs"

const PORT = 3000


const app = express()

app.get("/:id", (req, res) => {
  fs.readFile("users2.json", (err, data) => {
    console.log("err", err)
    if(err) {
      res.status(400).send({message: 'no such file', errorType: 'file_not_found'})

      return
    }

    data = JSON.parse(data)

    const id = req.params.id

    let result = data.find(item => item.id === id)

    if(!result) {
      res.send("404 - not found")
    }
    res.json(result)
  })
})

app.listen(PORT, () => {
  console.log(`Listening: PORT: ${PORT}`)
})



