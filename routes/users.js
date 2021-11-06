module.exports = app => {
    const Users = app.models.users
  
    app.get("/users/:id", (req, res) => {
      Users.findId(req.params, user => {
        res.json(user)
      })
    })
  }