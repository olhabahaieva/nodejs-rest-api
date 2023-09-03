const express = require('express');

const ctrl = require("../../controllers/auth");

const {validateBody} = require("../../middlewares");

const {schemas} = require("../../models/user");

const router = express.Router();

//sign up
router.post("/register", validateBody(schemas.registerSchema), ctrl.register)

//sign in
router.post("/login", validateBody(schemas.registerSchema), ctrl.login)

module.exports = router;