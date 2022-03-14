// (2) ### POST /blogs

const blogsModel = require("../models/blogsModel");
// const authorModel = require("../models/authorModel");


const blogs = async function(req,res){
    try{
        let data =req.body;
        let authorId = data.authorid
        console.log("blogs",data,authorId);
        if (Object.keys(data).length != 0) {
            let savedData = await blogsModel.create(data)
            res.status(201).send({ msg: savedData });
          }
          else {
            res.status(400).send({ msg: "BAD REQUEST" })
          }
    }catch(err){
    res.status(500).send({status:false ,Error:err});
}
}

 module.exports.blogs = blogs;
 