const jwt = require("jsonwebtoken");
const blogsModel = require("../models/blogsModel");

const authenticate  = function(req,res,next){
let token = req.headers["x-api-key"];
 if (!token) return res.send({ status: false, msg: "token must be present" });
 // this verify the token that token is correct or not
 let decodedToken = jwt.verify(token, "chandresh-thorium");
  if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });

 next()
}

const authorise = async function(req, res, next) {
    // comapre the logged in user's id and the id in request
    let token = req.headers["x-api-key"];
    let blogId = req.params.blogId;
    let blogDetails = await blogsModel.findById(blogId)
    let authorId = blogDetails.authorId
    let decodedToken = jwt.verify(token, "chandresh-thorium");
 if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });
    let decoded =decodedToken.userId
    if(authorId!=decoded) res.send({status:false, msg:"anthentication denied"})
    next()
}

const nuas = async function(req,res,next){
    let token = req.headers["x-api-key"]
    let authodid = req.query.authorId
    let decodedToken = jwt.verify(token, "chandresh-thorium");
    if (!decodedToken)
       return res.send({ status: false, msg: "token is invalid" });
       let decoded =decodedToken.userId
       if(authodid!=decoded) res.send({status:false, msg:"anthentication denied"})
       next()
}
module.exports.authenticate =authenticate 
module.exports.authorise=authorise
module.exports.nuas=nuas