const express = require("express")
const app = express()
const mongoose = require("mongoose")
const UserModel = require("./models/Users")

const cors = require("cors")

app.use(express.json())
app.use(cors())

mongoose.connect('mongodb+srv://admin:matheussteinbach11@cluster0.caqmqlk.mongodb.net/mern?retryWrites=true&w=majority&appName=Cluster0')

app.get("/getUsers", (req, res) => {
    UserModel.find({})
        .then(result => res.json(result))
        .catch(err => res.json(err))
    })

app.post('/createUser', async (req, res) => {
    const user = req.body
    const newUser = new UserModel(user)
    await newUser.save()

    res.json(user)
})

app.listen(3001, () => {
    console.log("Estou escutando...")
})