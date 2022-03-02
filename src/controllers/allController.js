const authorModel= require("../models/authorModel")
const publisherModel= require("../models/newPublisher")

const newAuthor= async function (req, res) {
    console.log("arnabbiswas",req.body)
    let author = req.body
    let authorCreated = await authorModel.create(author)
    res.send({data: authorCreated})
}



const createPublisher= async function (req, res) {
    let publisher = req.body
    let publisherCreated = await publisherModel.create(publisher)
    res.send({data: publisherCreated})
}



module.exports.newAuthor= newAuthor
module.exports.createPublisher= createPublisher
