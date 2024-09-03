const express = require('express');
const app = express();
const pengajuanRoutes = require('./routes/pengajuan');

app.use(express.json());
app.use('/api', pengajuanRoutes);

module.exports = app;
