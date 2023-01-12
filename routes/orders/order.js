var express = require("express");
var router = express.Router();

const live = require("./live");
const previous = require("./previous");
const cycles = require("./cycles");
const unlock = require("./unlock");

router.get("/live", live.live);

router.get("/previous", previous.previous);

router.get("/cycles", cycles.cycles);

router.get("/live/unlock", unlock.unlock);

router.get("/", (req, res) => {
  res.send("<h3>Orders</h3>");
});

module.exports = router;
