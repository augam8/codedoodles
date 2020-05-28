const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const listingRouter = require("./routes/listings_routes")
const mongoose = require("mongoose")

const port = process.env.port || 3033;
const app = express();

app.use(cors());
app.use(bodyParser.json());
const dbConn = "mongodb://localhost/toy_joy"
// Set three properties to avoid deprecation warnings:
// useNewUrlParser: true
// useUnifiedTopology: true
// useFileAndModify: false
mongoose.connect(
	dbConn,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false
	},
	err => {
		if (err) {
			console.log("Error connecting to database", err)
		} else {
			console.log("Connected to database!")
		}
	}
)

app.get("/",(req,res)=>{

    
    res.send("Hi from CodeDoodles")

})
app.use("/listings", listingRouter)

app.listen(port, ()=> console.log(`Listening on port ${port}.`));