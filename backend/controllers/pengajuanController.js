const Pengajuan = require('../models/Pengajuan');

exports.createPengajuan = (req, res) => {
    const pengajuanBaru = new Pengajuan(req.body);
    pengajuanBaru.save()
        .then(result => res.status(201).json(result))
        .catch(err => res.status(500).json({ error: err }));
};

exports.getDaftarPengajuan = (req, res) => {
    Pengajuan.find({ status: 'Pending' })
        .then(pengajuan => res.json(pengajuan))
        .catch(err => res.status(500).json({ error: err }));
};

exports.approvePengajuan = (req, res) => {
    Pengajuan.findByIdAndUpdate(req.params.id, { status: 'Approved' })
        .then(result => res.json({ status: 'Pengajuan berhasil di-approve' }))
        .catch(err => res.status(500).json({ error: err }));
};
