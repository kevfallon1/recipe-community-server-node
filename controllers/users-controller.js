const usersService = require("../services/users-service")

module.exports = (app) => {

    const register = (req, res) => {
        // res.send(404)
        const user = req.body;

        usersService.findUser(user).then((actualUser) => {
            if (actualUser.length !== 0) {
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
        usersService.verifyUserCredentials(user).then((actualUser) => {
            if (actualUser.length !== 0) {
                req.session["currentUser"] = actualUser
                res.json(actualUser)
            } else {
                res.send("Incorrect Username/Password")
            }
        })

    }

    const logout = (req, res) => {
        req.session.destroy()
        res.send(200)
    }

    const profile = (req, res) => {
        const currentUser = req.session["currentUser"]
        console.log(currentUser)
        usersService.findUser(currentUser[0]).then((actualUser) => {
            if (actualUser) {
                req.session["currentUser"] = actualUser
                res.json(actualUser)
            } else {
                res.send(404)
            }
        })

    }

    const userId = (req, res) => {
        const userID = req.params.userId
        usersService.findUserById(userID).then((actualUser) => {
            if (actualUser) {
                res.json(actualUser)
            } else {
                res.send(404)
            }
        })

    }

    const addToSavedList = (req, res) => {
        const recipeID = req.body
        const userID = req.params.userId
        usersService.updateUserSavedList(userID, recipeID).then((actualUser) => {
            if (actualUser) {
                res.json(actualUser)
            } else {
                res.send(404)
            }

        })

    }

    const updateUser = (req, res) => {
        const userBody = req.body
        const userID = req.params.userId

        usersService.updateUserDetails(userID, userBody).then((actualUser) => {
            if (actualUser) {
                res.json(actualUser)
            } else {
                res.send(404)
            }
        })
    }

    app.post("/api/register", register)
    app.post("/api/login", login)
    app.post("/api/logout", logout)
    app.post("/api/profile", profile)
    app.get("/api/profile/:userId", userId)
    app.post("/api/user/:userId/recipe_list", addToSavedList)
    app.post("/api/user/:userId/update_user", updateUser)

}