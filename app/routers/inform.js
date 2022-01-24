const express = require("express");
const router = express.Router();
const informController = require("../controllers/informController");
const middle = require("../middleware/authPermission");

router.get("/", middle.checkAlreadyLogin, informController.notify);
router.post(
  "/",
  middle.checkAlreadyLogin,
  middle.checkFaculty,
  informController.createNotify
);
router.get("/api", informController.returnNotify);
router.get(
  "/delete/:id",
  middle.checkAlreadyLogin,
  middle.checkFaculty,
  informController.deleteNotify
);
router.post(
  "/edit",
  middle.checkAlreadyLogin,
  middle.checkFaculty,
  informController.editNotify
);
module.exports = router;
