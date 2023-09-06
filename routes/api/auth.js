const express = require('express');

const ctrl = require("../../controllers/auth");

const {validateBody, authenticate} = require("../../middlewares");

const {schemas} = require("../../models/user");

const router = express.Router();

//sign up
router.post("/register", validateBody(schemas.registerSchema), ctrl.register)

//sign in
router.post("/login", validateBody(schemas.loginSchema), ctrl.login)

//current
router.get("/current", authenticate, ctrl.getCurrent);

//logout
router.post("/logout", authenticate, ctrl.logout);

module.exports = router;