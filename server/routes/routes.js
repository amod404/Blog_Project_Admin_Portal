const express = require("express");
const router = express.Router();

const {createCard, getCards} = require("../controllers/Card")
const {createSeries, getSeries} = require("../controllers/Series")
const {uploadImage} = require("../controllers/Image");
const {getContent} = require("../controllers/Content");
const {addMail} = require("../controllers/Mail")

router.post("/createCard", createCard);
router.post("/createSeries",createSeries);
router.post("/upload-image",uploadImage);
router.get("/getSeries", getSeries);
router.get("/getCards", getCards);
router.post("/getContent", getContent);
router.post("/addMail", addMail);

module.exports = router