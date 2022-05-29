const { dataSiswa,daftarNilai } = require("../../../models")

exports.getAllDataSiswa = async (req, res) => {
    try {
        const data = await dataSiswa.findAll({
            attributes: {
                exclude: ["createdAt", "updatedAt"],
            }
        });
        res.json(data);
    } catch (error) {
        res.json({ message: error.message });
    }  
} 
exports.getDataSiswabyId = async (req, res) => {
    try {
        const data = await dataSiswa.findAll({
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

exports.addDataSiswa = async (req, res) => {
    try {
        await dataSiswa.create(req.body);
        res.json({
            "message": "Data Siswa berhasil dibuat"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}

exports.updateDataSiswa = async (req, res) => {
    try {
        await dataSiswa.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Data Siswa berhasil diupdate"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}

exports.deleteDataSiswa = async (req, res) => {
    try {
        await dataSiswa.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Data Siswa berhasil dihapus"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
