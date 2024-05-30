const mongoose =require("mongoose");

const userSchema= new mongoose.Schema({
username:{
	type:string,
	required:true,
},
email:{
	type:String,
	required:true,
},
phone:{
	type:String,
	required:true,

},
password:{
	type:String,
	required:true,
}, 
isAdmin:{
	type:Boolean,
	default:false,
},

});

// define the model or the collection name 
const User=new mongoose.Model("User",userSchema);
module.exports= User;