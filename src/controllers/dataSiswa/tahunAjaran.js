const { tahunAjaran,kelas } = require("../../../models")

exports.getAllTahunAjaran = async (req, res) => {
    try {
        const data = await tahunAjaran.findAll({
            include: [
                {
                    model: kelas,
                    as: "daftarKelas",
                    attributes: {
                        exclude: ["createdAt", "updatedAt"]
                    }
                }
            ],
            attributes: {
                exclude: ["createdAt", "updatedAt"],
            }
        });
        res.json(data);
    } catch (error) {
        res.json({ message: error.message });
    }  
} 
exports.getTahunAjaranbyId = async (req, res) => {
    try {
        const data = await tahunAjaran.findAll({
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

exports.addTahunAjaran = async (req, res) => {
    try {
        await tahunAjaran.create(req.body);
        res.json({
            "message": "Tahun Ajaran berhasil dibuat"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}

exports.updateTahunAjaran = async (req, res) => {
    try {
        await tahunAjaran.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Tahun Ajaran berhasil diupdate"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}

exports.deleteTahunAjaran = async (req, res) => {
    try {
        await tahunAjaran.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Tahun Ajaran berhasil dihapus"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}