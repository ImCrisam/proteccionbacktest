const express = require('express');

const controller = require('./controller/index');

const router = express.Router();

router.post('/', (req, res) => {
  controller.fibo(req, res);
});

module.exports = router;
