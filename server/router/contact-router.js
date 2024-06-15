 const express= require("express");
const Contact = require("../models/contact-model");
 const router=express.Router();
 const Contactform= require("../controllers/contact-contoller.js")

router.route("/contact").post(Contactform);
module.exports = router;