const express =require("express");
const app =express();
app.get("/",(req,res)=>{
	res.send("helllo welcome to out home page")

})

app.get("/registeration", (req,res)=>{
	res.send(" you are on registeration page");
})

const PORT=8080;
app.listen(PORT, ()=>{
	console.log(`server is running on port ${PORT}`);
});