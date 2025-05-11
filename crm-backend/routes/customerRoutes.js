const router = require('express').Router();
const { addCustomer } = require('../controllers/customerController');

router.post('/', addCustomer);

module.exports = router;
