"use strict";
const express = require("express");
const router = express.Router({ mergeParams: true });
const runController = require("../controllers/runController");

router.get("/", runController.index);
router.post("/new", runController.create);
router.delete("/:run_id", runController.delete);

module.exports = router;
