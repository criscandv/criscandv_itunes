const express = require("express");
const router = express.Router();

// Controllers
const { albumsList } = require("../controllers/Itunes");

router.get("/", (req, res) => {
  res.status(200).send("Welcome to api");
});

router.get("/albums", albumsList);

// Not found
router.get("*", function (req, res) {
  res.status(404).send("Not found");
});

module.exports = router;
