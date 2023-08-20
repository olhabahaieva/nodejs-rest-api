const express = require("express");

const router = express.Router();
const contacts = require("../../models/contacts");

router.get("/", async (req, res, next) => {
  try {
    const result = await contacts.listContacts();
    res.json(result);
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.get("/:contactId", async (req, res, next) => {
  try {
    const {contactId} = req.params;
    const result = await contacts.getContactById(contactId);
    res.json(result);

    if(!result){
      return res.status(404).json({
        message: "Not Found",
      });
    }
   
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
  // res.json({ message: "template message" });
});

router.post("/", async (req, res, next) => {
  res.json({ message: "template message" });
});

router.delete("/:contactId", async (req, res, next) => {
  res.json({ message: "template message" });
});

router.put("/:contactId", async (req, res, next) => {
  res.json({ message: "template message" });
});

module.exports = router;
