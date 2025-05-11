const router = require('express').Router();
const { sendCampaign, getCampaigns } = require('../controllers/campaignController');

router.post('/', sendCampaign);
router.get('/', getCampaigns);

module.exports = router;
