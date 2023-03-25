const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
//const errorController = require("../controllers/errorController");

router.get("/", userController.view);
//router.get("/*", errorController());
module.exports = router;
