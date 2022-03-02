const express = require('express');
const router = express.Router();

const allController= require("../controllers/allController")
const newBookController=require("../controllers/newBookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", allController.newAuthor  )

router.post("/getAuthorsData", allController.createPublisher)

router.post("/createBook", newBookController.createBook  )

router.get("/getBooksData", newBookController.getBooks)

// router.get("/getBooksWithAuthorDetails", newBookController.getBooksWithAuthorDetails)

module.exports = router;