const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const port = process.env.port || 3033;
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/",(req,res)=>{
    res.send("Hi from CodeDoodles")
})

app.listen(port, ()=> console.log(`Listening on port ${port}.`));