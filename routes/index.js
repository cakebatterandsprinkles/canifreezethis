const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send("The index route is working!");
})

module.exports = router;