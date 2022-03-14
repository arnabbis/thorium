const { Router } = require('express');
const express = require('express');
const router = express.Router();
const authorModel = require("../models/authorModel")
const authorController = require("../controllers/authorController")
const blogsController = require("../controllers/blogsController")


// AUTHOR APIS
router.post("/createAuthor",authorController.author)

// ### POST /blogs
router.post("/createBlogs",blogsController.blogs)

// ### GET /blogs
router.get("/getBlogs",blogsController.getBlog)




module.exports=router;