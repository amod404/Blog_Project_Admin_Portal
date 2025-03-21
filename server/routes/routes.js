const express = require("express");
const router = express.Router();

const {createCard} = require("../controllers/Card")

router.post("/createCard", createCard);

module.exports = router