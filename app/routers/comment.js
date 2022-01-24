const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");
const middle = require("../middleware/authPermission");

router.post("/", middle.checkAlreadyLogin, commentController.comment);
router.delete("/", middle.checkAlreadyLogin, commentController.deleteComment);

module.exports = router;
