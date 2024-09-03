const express = require('express');
const router = express.Router();
const pengajuanController = require('../controllers/pengajuanController');

router.post('/pengajuan', pengajuanController.createPengajuan);
router.get('/daftar-pengajuan', pengajuanController.getDaftarPengajuan);
router.post('/approve-pengajuan/:id', pengajuanController.approvePengajuan);

module.exports = router;
