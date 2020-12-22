"use strict";
var express = require("express");
var router = express.Router();
const participantController = require("../controllers/participantController");

router.get("/:id", participantController.show);

module.exports = router;
