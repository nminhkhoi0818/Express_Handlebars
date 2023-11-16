const express = require("express");
const router = express.Router();
const taks2Controller = require("../controllers/task2Controller");

router.get("/", taks2Controller.show);

module.exports = router;
