const express = require("express");
const router = express.Router();

const {createCard} = require("../controllers/Card")
const {createSeries} = require("../controllers/Series")
const {uploadImage} = require("../controllers/Image");

router.post("/createCard", createCard);
router.post("/createSeries",createSeries);
router.post("/upload-image",uploadImage);

module.exports = router