const mongoose = require('mongoose');

const FinanceSchema = new mongoose.Schema({
    company: String,
    updated: { type: Date, default: Date.now },
    volume: { type: Number, default: 0 },
    //   news: String,
    price: { type: Number, default: 0},
    open: { type: Number, default: 0 },
    close: { type: Number, default: 0 },
    high: { type: Number, default: 0 },
    low: { type: Number, default: 0 },
    sales: { type: Number, default: 0 },
    hopen: { type: Number, default: 0 },
    hclose: { type: Number, default: 0 },
    hhigh: { type: Number, default: 0 },
    hlow: { type: Number, default: 0 },
    hsales: { type: Number, default: 0 },
});

module.exports = mongoose.model('Finance', FinanceSchema);
