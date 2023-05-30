require('dotenv').config()
const express = require("express")
const app = express()
const axios = require('axios')
const cors = require('cors')
// const functions = require("firebase-functions")
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))
let token = process.env.TOKEN
app.get("/", (req, res) => {
    res.send("Vercel is working !!!")
    return;
})
app.get('/detail',async (req, res) => {
    let config = {
        headers: {
            "Token": token,
            "Content-Type": "text/plain"
        }
    }

    let result = await axios.get("https://services.giaohangtietkiem.vn/services/shipment/v2/S22145818.BO.MN8-04-C62.1058989704", config);
    res.json(result.data)
    return;    

})


const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`Server is listening on ${port}`)
})