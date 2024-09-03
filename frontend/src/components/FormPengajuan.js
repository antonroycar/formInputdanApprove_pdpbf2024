import React, { useState } from 'react';

const FormPengajuan = () => {
    const [formData, setFormData] = useState({
        nama: '',
        nik: '',
        tanggalLahir: '',
        statusPerkawinan: '',
        dataPasangan: '',
        dealer: '',
        merkKendaraan: '',
        modelKendaraan: '',
        tipeKendaraan: '',
        warnaKendaraan: '',
        hargaKendaraan: '',
        asuransi: '',
        downPayment: '',
        lamaKredit: '',
        angsuranBulanan: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/api/pengajuan', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then(response => response.json())
          .then(data => {
              alert(data.status);
          });
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px', margin: 'auto' }}>
            <h1>Form Pengajuan Kredit</h1>
            <label>
                Nama:
                <input type="text" name="nama" onChange={handleChange} value={formData.nama} required />
            </label>
            <label>
                NIK:
                <input type="text" name="nik" onChange={handleChange} value={formData.nik} required />
            </label>
            <label>
                Tanggal Lahir:
                <input type="date" name="tanggalLahir" onChange={handleChange} value={formData.tanggalLahir} required />
            </label>
            <label>
                Status Perkawinan:
                <input type="text" name="statusPerkawinan" onChange={handleChange} value={formData.statusPerkawinan} required />
            </label>
            <label>
                Data Pasangan:
                <input type="text" name="dataPasangan" onChange={handleChange} value={formData.dataPasangan} />
            </label>
            <label>
                Dealer:
                <input type="text" name="dealer" onChange={handleChange} value={formData.dealer} required />
            </label>
            <label>
                Merk Kendaraan:
                <input type="text" name="merkKendaraan" onChange={handleChange} value={formData.merkKendaraan} required />
            </label>
            <label>
                Model Kendaraan:
                <input type="text" name="modelKendaraan" onChange={handleChange} value={formData.modelKendaraan} required />
            </label>
            <label>
                Tipe Kendaraan:
                <input type="text" name="tipeKendaraan" onChange={handleChange} value={formData.tipeKendaraan} required />
            </label>
            <label>
                Warna Kendaraan:
                <input type="text" name="warnaKendaraan" onChange={handleChange} value={formData.warnaKendaraan} required />
            </label>
            <label>
                Harga Kendaraan:
                <input type="number" name="hargaKendaraan" onChange={handleChange} value={formData.hargaKendaraan} required />
            </label>
            <label>
                Asuransi:
                <input type="text" name="asuransi" onChange={handleChange} value={formData.asuransi} required />
            </label>
            <label>
                Down Payment:
                <input type="number" name="downPayment" onChange={handleChange} value={formData.downPayment} required />
            </label>
            <label>
                Lama Kredit (Bulan):
                <input type="number" name="lamaKredit" onChange={handleChange} value={formData.lamaKredit} required />
            </label>
            <label>
                Angsuran/Bulan:
                <input type="number" name="angsuranBulanan" onChange={handleChange} value={formData.angsuranBulanan} required />
            </label>
            <button type="submit" style={{ marginTop: '20px' }}>Submit</button>
        </form>
    );
};

export default FormPengajuan;
