const express = require("express");

const router = express.Router();
const ctrl = require("../../controllers/contacts");
const {validateBody, isValid, authenticate} = require("../../middlewares");
const {schemas} = require("../../models/contact");

router.get("/", authenticate, ctrl.listContacts);

router.get("/:contactId", authenticate, isValid, ctrl.getContactById);

router.post("/", authenticate, validateBody(schemas.addSchema), ctrl.addContact);

router.put("/:contactId", authenticate, isValid, validateBody(schemas.addSchema), ctrl.updateContact);

router.patch("/:contactId/favorite", authenticate, isValid, validateBody(schemas.updateFavoriteSchema), ctrl.updateFavorite);

router.delete("/:contactId", authenticate, isValid, ctrl.removeContact);

module.exports = router;
