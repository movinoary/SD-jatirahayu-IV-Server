const { kelas, tahunAjaran } = require("../../../models");

exports.getAllKelas = async (req, res) => {
    try {
        const data = await kelas.findAll({
            attributes: {
                exclude: ["createdAt", "updatedAt"],
            }
        });
        res.json(data);
    } catch (error) {
        res.json({ message: error.message });
    }  
} 
exports.getKelasbyId = async (req, res) => {
    try {
        const data = await kelas.findAll({
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

exports.addKelas = async (req, res) => {
    try {
        await kelas.create(req.body);
        res.json({
            "message": "Kelas berhasil dibuat"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}

exports.updateKelas = async (req, res) => {
    try {
        await kelas.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Kelas berhasil diupdate"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}

exports.deleteKelas = async (req, res) => {
    try {
        await kelas.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Kelas berhasil dihapus"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}