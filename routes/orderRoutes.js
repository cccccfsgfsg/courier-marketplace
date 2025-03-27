const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => res.send('Тест заказов'));

module.exports = router;