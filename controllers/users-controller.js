const usersService = require("../services/users-service")

module.exports = (app) => {

    const register = (req, res) => {
        // res.send(404)
        const user = req.body;
        console.log(user)

        usersService.findUser(user).then((actualUser) => {
            if (actualUser) {
                res.send("User Already Exists")
            } else {
                usersService.createUser(user)
                    .then((actualUser) => {
                              if (actualUser) {
                                  req.session["currentUser"] = actualUser
                                  usersService.findUser(actualUser).then((currentUser) => {
                                      if (currentUser) {

                                          res.json(currentUser)
                                      }
                                  })

                              } else {
                                  res.send(404)
                              }
                          }
                    )
            }
        })


    }

    const login = (req, res) => {
        const user = req.body
        usersService.findUser(user).then((actualUser) => {
            if (actualUser) {
                req.session["currentUser"] = actualUser
                res.json(actualUser)
            } else {
                res.send(404)
            }
        })

    }

    const logout = (req, res) => {
        req.session.destroy()
        res.send(200)
    }

    const profile = (req, res) => {
        const currentUser = req.session["currentUser"]
        if (currentUser) {
            res.send(currentUser)
        } else {
            res.send(404)
        }

    }

    // const userId = (req, res) => {
    //     const user = req.body
    //     usersService.findUserById(user).then((actualUser) => {
    //         console.log(actualUser)
    //     })
    //     res.send(200)
    //
    // }

    app.post("/api/register", register)
    app.post("/api/login", login)
    app.post("/api/logout", logout)
    app.get("/api/profile", profile)
    // app.post("/api/user", userId)

}