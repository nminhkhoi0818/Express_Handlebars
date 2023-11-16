const express = require("express");
const router = express.Router();
const taks4Controller = require("../controllers/task4Controller");

router.get("/", taks4Controller.show);
router.get("/:name", taks4Controller.view);

module.exports = router;
