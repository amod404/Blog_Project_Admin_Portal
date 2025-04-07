const express = require("express");
const router = express.Router();

const {createCard, getCards, getCardsByTag} = require("../controllers/Card")
const {createSeries, getSeries, getSeriesById} = require("../controllers/Series")
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
router.post("/getSeriesById",getSeriesById);
router.post("/getCardsByTag", getCardsByTag);

module.exports = router