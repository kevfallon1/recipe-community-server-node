const usersService = require("../services/users-service")

module.exports = (app) =>  {

    const register = (req,res) => {
        // res.send(404)
        const user = req.body;
        const currentUser = usersService.createUser(user)
        req.session["currentUser"] = currentUser
        res.send(currentUser)
    }

    const login = (req,res) => {
        const user = req.body
        const currentUser = usersService.findUser(user)
        if (currentUser){
            req.session["currentUser"] = currentUser
            const userCopy = currentUser
            userCopy.password = ""
            res.send(currentUser)
        }else{
            res.send(404)
        }

    }

    const logout = (req,res) => {
        req.session.destroy()
        res.send(200)
    }

    const profile = (req,res) => {
        const currentUser = req.session["currentUser"]
        if (currentUser){
            res.send(currentUser)
        }else{
            res.send(404)
        }

    }


    app.post("/api/register", register)
    app.post("/api/login", login)
    app.post("/api/logout", logout)
    app.get("/api/profile", profile)


}