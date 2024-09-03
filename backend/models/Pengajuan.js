const mongoose = require('mongoose');

const PengajuanSchema = new mongoose.Schema({
    nama: String,
    nik: String,
    dataKendaraan: {
        dealer: String,
        merk: String,
        tipe: String,
        asuransi: String,
        downPayment: Number,
        lamaKredit: Number,
    },
    status: { type: String, default: 'Pending' },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Pengajuan', PengajuanSchema);
