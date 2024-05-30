require("dotenv").config();
const express =require("express");
const app =express()

const router =require("./router/auth-router");
const mongodb=require("./utils/db.js");
const connectDb = require("./utils/db.js");

//middleware for use of json files
app.use(express.json()); 

app.use("/api/auth",router );
 
 

 

const PORT=8080;

connectDb().then(()=>{


app.listen(PORT, ()=>{
	console.log(`server is running on port ${PORT}`);
})
});