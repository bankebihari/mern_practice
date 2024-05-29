//controller aare typically used to process incoming request
//interact with models and send the response data


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

const register=(req,res)=>{
	try {
		res
		.send("welcome to register page")
		.status(200);
	} catch (error) {
		 res
		    .status(400)
			.send({msg:"page not found"})
	}
}

module.exports = {home,register};