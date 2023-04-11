const express = require('express');

const router = express.Router();

const adminController = require('../controllers/admin');

router.get('/postUnlockingData', adminController.postUnlockingData);

router.post('/postLogs', adminController.postLogs);

router.post('/sendEmail', adminController.sendEmail)


module.exports = router;