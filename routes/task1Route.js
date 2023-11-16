const express = require("express");
const router = express.Router();
const taks1Controller = require("../controllers/task1Controller");

router.get("/", taks1Controller.show);

module.exports = router;
