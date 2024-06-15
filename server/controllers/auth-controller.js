//controller aare typically used to process incoming request
//interact with models and send the response data

const User= require("../models/user-models"); 
const bcrypt = require("bcryptjs")


//home funcinality
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
		console.log(req.body);
		const { username,email,phone,password}=req.body;
		
		const userExist= await User.findOne({ email});
		if(userExist){
			return res.status(400).json({msg:"email alredy exist"});
	} 

	//hash the password

	// const saltRound =10;
	// const hash_password = await bcrypt.hash(password,saltRound);

		const userCreated = await User.create({
			username,
			email,
			phone,
			password,
		});
		//return res.send("welcome to register page")
		  res.status(201).json({
			msg: userCreated ,
			token: await userCreated.generateToken(),
			userId: userCreated._id.toString(),
		   });
	} catch (error) {

		 res.status(500).json("internal server error");
	}
};


// login router functionality
 const login = async(req,res) => {
	try {
		const { email, password} = req.body;
		
		const userExist = await User.findOne({email});
		console.log(userExist);

		if(!userExist){
			return res.status(400).json({message :"invalid credentail"});

		}

		const user= await bcrypt.compare(password,userExist.password );

		if(user){
			res.status(200).json({
				msg:"login succesfully",
				token: await userExist.generateToken(),
				userId: userExist._id.toString(),
			})
		}else{
			res.status(401).json({message: "Invalid email or password"});
		}
		
	} catch (error) {
		res.status(500).json("internal server error");
		
	}

 };

module.exports = {home,register ,login };