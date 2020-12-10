const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HistorySchema = new Schema({
    Creditor: String,
    Receipent: String,
    Amount: Number,
    Time: { type: Date, default: Date.now() }
})
module.exports = mongoose.model("History", HistorySchema);