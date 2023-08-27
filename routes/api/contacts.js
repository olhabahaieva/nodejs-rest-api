const express = require("express");

const router = express.Router();
const ctrl = require("../../controllers/contacts");
const {validateBody, isValid} = require("../../middlewares");
const {schemas} = require("../../models/contact");

router.get("/", ctrl.listContacts);

router.get("/:contactId",isValid, ctrl.getContactById);

router.post("/", validateBody(schemas.addSchema), ctrl.addContact);

router.put("/:contactId", isValid, validateBody(schemas.addSchema), ctrl.updateContact);

router.patch("/:contactId/favorite", isValid, validateBody(schemas.updateFavoriteSchema), ctrl.updateFavorite);

router.delete("/:contactId", isValid, ctrl.removeContact);

module.exports = router;
