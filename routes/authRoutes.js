const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => res.send('Тест аутентификации'));

module.exports = router;