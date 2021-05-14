"use strict";
const express = require("express");
const router = express.Router();
const participantController = require("../controllers/participantController");
const passport = require("passport");

require("../controllers/authentificationController");

router.get("/:id", participantController.show);
router.get("/", participantController.index);
router.post("/new", participantController.upload, participantController.create);
router.post(
	"/login",
	passport.authenticate("local", {
		successRedirect: "/",
		failureRedirect: "/",
		failureFlash: true,
	})
);

module.exports = router;
