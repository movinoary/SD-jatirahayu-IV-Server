const { anggaran } = require("../../models")

exports.getAllAnggaran = async (req, res) => {
    try {
        const data = await anggaran.findAll({
            attributes: {
                exclude: ["createdAt", "updatedAt"],
            }
        });
        res.json(data);
    } catch (error) {
        res.json({ message: error.message });
    }  
} 
exports.getAnggaranbyId = async (req, res) => {
    try {
        const data = await anggaran.findAll({
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

exports.addAnggaran = async (req, res) => {
    try {
        await anggaran.create(req.body);
        res.json({
            "message": "Anggaran berhasil dibuat"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}

exports.updateAnggaran = async (req, res) => {
    try {
        await anggaran.update(req.body, {
            where: {
                id: req.params.id
            },
        });
        res.json({
            "message": "Anggaran berhasil diupdate"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}

exports.deleteAnggaran = async (req, res) => {
    try {
        await anggaran.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Anggaran berhasil dihapus"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}