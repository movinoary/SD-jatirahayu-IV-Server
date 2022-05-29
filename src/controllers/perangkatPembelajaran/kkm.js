const { kkm } = require("../../../models");

exports.getAllKkm = async (req, res) => {
    try {
        const data = await kkm.findAll({
            attributes: {
                exclude: ["createdAt", "updatedAt", "idTahunAjaran"],
            }
        });
        res.json(data);
    } catch (error) {
        res.json({ message: error.message });
    }  
} 
exports.getKkmbyId = async (req, res) => {
    try {
        const data = await kkm.findAll({
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

exports.addKkm = async (req, res) => {
    try {
        await kkm.create(req.body);
        res.json({
            "message": "kkm berhasil dibuat"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}

exports.updateKkm = async (req, res) => {
    try {
        await kkm.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "kkm berhasil diupdate"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}

exports.deleteKkm = async (req, res) => {
    try {
        await kkm.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "kkm berhasil dihapus"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}