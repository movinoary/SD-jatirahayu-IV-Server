const { prota, silabus } = require("../../../models");

exports.getAllProta = async (req, res) => {
    try {
        const data = await prota.findAll({
            include: [
                {
                    model: silabus,
                    as: "silabus",
                    attributes: {
                        exclude: ["createdAt", "updatedAt"],
                    }
                }
            ],
            attributes: {
                exclude: ["createdAt", "updatedAt", "idTahunAjaran"],
            }
        });
        res.json(data);
    } catch (error) {
        res.json({ message: error.message });
    }  
} 
exports.getProtabyId = async (req, res) => {
    try {
        const data = await prota.findAll({
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

exports.addProta = async (req, res) => {
    try {
        await prota.create(req.body);
        res.json({
            "message": "Prota berhasil dibuat"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}

exports.updateProta = async (req, res) => {
    try {
        await prota.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Prota berhasil diupdate"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}

exports.deleteProta = async (req, res) => {
    try {
        await prota.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Prota berhasil dihapus"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}