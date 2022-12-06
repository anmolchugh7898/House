const express = require('express');
const { addBill } = require('./controllers/bill.controller');
const router = express.Router();

router.post('/add/bill', addBill);


module.exports = router;