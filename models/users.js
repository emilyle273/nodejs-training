import fs from "fs"

module.exports = app => {
  return {
    findId: (params, callback) => {
      fs.readFile(__dirname + "/../" + "users.json", (err,data) => {
        data = JSON.parse(data)

        const user = data.find(item => item.id === params.id)

        if(!user) {
          return callback({
            err: "Not found"
          })
        }
        return callback(user)
      })
    }
  }
}