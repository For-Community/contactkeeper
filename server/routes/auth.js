const express = require("express");
const router = express.Router();

// @route  GET api/auth
// @desc   Get Logged in User
// @access Private
router.get("/", (req, res) => {
  res.send("get loggedin user");
});

// @route  POST api/auth
// @desc   Auth User and get token
// @access public
router.post("/", (req, res) => {
    res.send("Login a user");
  });

module.exports = router;