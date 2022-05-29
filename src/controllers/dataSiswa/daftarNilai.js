const { daftarNilai, dataSiswa } = require("../../../models")

exports.getAllDaftarNilai = async (req, res) => {
    try {
        const data = await daftarNilai.findAll({
            include: [
                {
                    model: dataSiswa,
                    as: "namaSiswa",
                    attributes: {
                        exclude: [
                            "id",
                            "nik", 
                            "tempatLahir", 
                            "agama", 
                            "alamat", 
                            "namaAyah", 
                            "pendidikanAyah", 
                            "pekerjaanAyah", 
                            "namaIbu", 
                            "pendidikanIbu", 
                            "pekerjaanIbu", 
                            "namaWali", 
                            "pendidikanWali", 
                            "pekerjaanWali", 
                            "idKelas", 
                            "idDaftarNilai", 
                            "createdAt", 
                            "updatedAt",
                        ]
                    }
                }
            ],
            attributes: {
                exclude: ["createdAt", "updatedAt"],
            },
            // limit : 1
        });
        res.json(data);
    } catch (error) {
        res.json({ message: error.message });
    }  
} 
exports.getDaftarNilaibyId = async (req, res) => {
    try {
        const data = await daftarNilai.findAll({
            where: {
                id: req.params.id
            },
            attributes: {
                exclude: ["createdAt", "updatedAt"],
            }
        });
        res.json(data[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}

exports.addDaftarNilai = async (req, res) => {
    try {
        await daftarNilai.create(req.body);
        res.json({
            "message": "Daftar Nilai berhasil dibuat"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}

exports.updateDaftarNilai = async (req, res) => {
    try {
        await daftarNilai.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Daftar Nilai berhasil diupdate"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}

exports.deleteDaftarNilai = async (req, res) => {
    try {
        await daftarNilai.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Daftar Nilai berhasil dihapus"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}