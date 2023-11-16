const express = require("express");
const router = express.Router();
const taks3Controller = require("../controllers/task3Controller");

router.get("/", taks3Controller.show);

module.exports = router;
