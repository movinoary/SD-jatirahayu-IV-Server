const { promes, silabus } = require("../../../models");

exports.getAllPromes = async (req, res) => {
    try {
        const data = await promes.findAll({
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
exports.getPromesbyId = async (req, res) => {
    try {
        const data = await promes.findAll({
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

exports.addPromes = async (req, res) => {
    try {
        await promes.create(req.body);
        res.json({
            "message": "Promes berhasil dibuat"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}

exports.updatePromes = async (req, res) => {
    try {
        await promes.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Promes berhasil diupdate"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}

exports.deletePromes = async (req, res) => {
    try {
        await promes.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Promes berhasil dihapus"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}