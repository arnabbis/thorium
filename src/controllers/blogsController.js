// (2) ### POST /blogs

const blogsModel = require("../models/blogsModel");
const { author } = require("./authorController");


const blogs = async function(req,res){
    try{
        let data =req.body;
        let authorId = data.author
        if(!authorId){
            res.status(400).send("Ivalid");
        }
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

// (3)  ### GET /blogs

const getBlog = async function(req,res){
  let findBlog = await blogsModel.find()
  res.status(200).send({status:true , msg:findBlog});
}


 module.exports.blogs = blogs;
 module.exports.getBlog = getBlog;
 