"use strict";
var express = require("express");
var router = express.Router();
const participantController = require("../controllers/participantController");

router.get("/:id", participantController.show);
router.get("/", participantController.index);
router.post("/new", participantController.create);

module.exports = router;
