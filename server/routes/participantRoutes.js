"use strict";
const express = require("express");
const router = express.Router();
const participantController = require("../controllers/participantController");

router.get("/:id", participantController.show);
router.get("/", participantController.index);
router.post("/new", participantController.create);
router.post(
	"/upload",
	participantController.upload,
	participantController.uploadAvatar
);

module.exports = router;
