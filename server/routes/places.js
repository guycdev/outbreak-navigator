const express = require("express");
const router = express.Router();
const { placesController } = require("../controllers/placesController");

router.route("/get-places").get(placesController);

module.exports = router;
