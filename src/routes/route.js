const { Router } = require('express');
const express = require('express');
const router = express.Router();
const authorController = require("../controllers/authorController")
const blogsController = require("../controllers/blogsController")


// AUTHOR APIS
router.post("/createAuthor",authorController.author)

// ### POST /blogs
router.post("/createBlogs",blogsController.blogs)

// ### GET /blogs
router.get("/getBlogs",blogsController.getBlog)

router.put("/blogs/:blogId", blogsController.updateBlog)

router.delete("/blogs/:blogId", blogsController.deleteBlog)

router.delete("blogs" , blogsController.deleteByQueryParam)



module.exports=router;