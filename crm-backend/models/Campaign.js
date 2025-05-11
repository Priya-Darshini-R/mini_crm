const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
  rule: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
  stats: {
    total: Number,
    sent: Number,
    failed: Number
  }
});

module.exports = mongoose.model('Campaign', campaignSchema);
