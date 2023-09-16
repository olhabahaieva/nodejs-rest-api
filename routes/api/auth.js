const express = require('express');

const ctrl = require("../../controllers/auth");

const {validateBody, authenticate, upload} = require("../../middlewares");

const {schemas} = require("../../models/user");

const router = express.Router();

//sign up
router.post("/register", validateBody(schemas.registerSchema), ctrl.register)

router.get("/verify/:verificationCode", ctrl.verifyEmail);

//sign in
router.post("/login", validateBody(schemas.loginSchema), ctrl.login)

//current
router.get("/current", authenticate, ctrl.getCurrent);

//logout
router.post("/logout", authenticate, ctrl.logout);

router.patch("/avatars", authenticate, upload.single("avatar"), ctrl.updateAvatar);

module.exports = router;