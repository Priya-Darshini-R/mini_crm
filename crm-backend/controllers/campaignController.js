const Customer = require('../models/Customer');
const Campaign = require('../models/Campaign');
const { sendMessage } = require('../utils/vendorSimulator');

exports.sendCampaign = async (req, res) => {
  const { rule, message } = req.body;
  const [field, op, value] = rule.split(' ');
  const filter = {};
  filter[field] = { [op === '>' ? '$gt' : '$lt']: Number(value) };

  const customers = await Customer.find(filter);
  const results = customers.map(c => sendMessage(c, message));
  const sent = results.filter(r => r.status === 'SENT').length;
  const failed = results.length - sent;

  const campaign = new Campaign({
    rule,
    message,
    stats: { total: results.length, sent, failed }
  });
  await campaign.save();

  res.status(200).json(campaign);
};

exports.getCampaigns = async (req, res) => {
  const campaigns = await Campaign.find().sort({ createdAt: -1 });
  res.status(200).json(campaigns);
};
