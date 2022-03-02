const { count } = require("console")
const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/newPublisher")

const createBook= async function (req, res) {
    console.log("author",req.body)
    let book = req.body
    let newauthorId = book.author
    let newpublisherId = book.publisher

    // a
    if(!newauthorId) return res.send('The request is not valid as the author details are required.')

    // b
    let author = await authorModel.findById(newauthorId)
    if(!author) return res.send('The request is not valid as no author is present with the given author id')

    // c
    if(!newpublisherId) return res.send('The request is not valid as the publisher details are required.') 

    // d
    let publisher = await publisherModel.findById(newpublisherId)
    if(!publisher) return res.send('The request is not valid as no publisher is present with the given publisher id')

    let bookCreated = await bookModel.create(book)
    return res.send({data: bookCreated})
}

const getBooks= async function (req, res) {
    console.log("show the populate",req.body);
    let bookname = await bookModel.find().populate('author publisher')
    res.send({data: bookname})
}


module.exports.createBook= createBook
module.exports.getBooks= getBooks
