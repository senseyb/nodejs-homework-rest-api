const express = require("express"); // чтобы создать маршруты
const router = express.Router();

const { ctrlWrapper } = require("../../helpers");
const { contacts: ctrl } = require("../../controllers");
const { joiSchema } = require("../../models/schemas/contact");
const { validation } = require("../../middlewares");

router.get("/", ctrl.listContacts); // работает при залогиненом пользователе
router.get("/:contactId", ctrlWrapper(ctrl.getContactById));
router.post("/", validation(joiSchema), ctrl.addContact); // добавляет при залогиненом пользователе
router.put("/:contactId", ctrlWrapper(ctrl.updateContact));
router.patch("/:contactId/favorite", ctrlWrapper(ctrl.updateField));
router.delete("/:contactId", ctrlWrapper(ctrl.removeContact));

module.exports = router;
