module.exports = app => {
  const Tasks = app.models.tasks

  app.get("/tasks", (req, res) => {
    // res.json({
    //   tasks: [{
    //     title: "Buy shoes"
    //   }, {
    //     title: "Wash face"
    //   }]
    // })

    Tasks.findAll({}, tasks => {
      res.json({tasks: tasks})
    })
  })
}