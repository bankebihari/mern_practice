require("dotenv").config();
const express =require("express");
const app =express()

const authRoute =require("./router/auth-router");
const contactRoute= require("./router/contact-router");
//const mongodb=require("./utils/db.js");
const connectDb = require("./utils/db");

//middleware for use of json files
app.use(express.json()); 

app.use("/api/auth",authRoute );
app.use("/api/form", contactRoute);
 
 
//const bodyparser = require("body-parser")
//app.use(bodyparser)

const PORT=8080;

connectDb().then(()=>{


app.listen(PORT, ()=>{
	console.log(`server is running on port ${PORT}`);
})
});