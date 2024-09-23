const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({
    email: { type: String, required: true },
    otp: { type: String, required: true },
    otpExpiry: { type: Date, required: true },
});

module.exports = mongoose.models.OTP || mongoose.model('OTP', otpSchema);

