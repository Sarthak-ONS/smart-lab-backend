const express = require("express");

const router = express.Router();

const authController = require("../controllers/auth");

router.get("/signup", authController.getAuth);

router.post("/signup", authController.signup);

module.exports = router;
