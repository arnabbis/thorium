const { Router } = require('express');
const express = require('express');
const router = express.Router();
// const authorModel = require("../models/authorModel")
const authorController = require("../controllers/authorController")


// AUTHOR APIS
router.post("/createAuthor",authorController.author)

module.exports=router;