//controller aare typically used to process incoming request
//interact with models and send the response data

const User= require("../controllers/auth-controller"); 
const home= (req,res)=>{
	try {
		res
		.status(200)
		.send("welcome to our home controller page");

		
	} catch (error) {
		console.log(error);
	}
};

//
//registration
//**___------- */

const register= async(req,res)=>{
	try {
		//console.log(req.body);
		const{username,email,phone, password}=req.body;
		const userExist= User.findOne({email:email});
		if(userExist){
			return res.status(400).json({msg:"email alredy exist"});
	} 
		await User.create({username,email,phone, password});
		res
		   .send("welcome to register page")
		   .status(200).json({data});
	} catch (error) {

		 res.status(500).json("internal server error")
	}
}

module.exports = {home,register};