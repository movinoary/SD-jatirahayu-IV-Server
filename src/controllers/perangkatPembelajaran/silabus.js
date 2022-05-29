const { silabus } = require("../../../models");

exports.getAllSilabus = async (req, res) => {
    try {
        const data = await silabus.findAll({
            attributes: {
                exclude: ["createdAt", "updatedAt"],
            }
        });
        res.json(data);
    } catch (error) {
        res.json({ message: error.message });
    }  
} 
exports.getSilabusbyId = async (req, res) => {
    try {
        const data = await silabus.findAll({
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

exports.addSilabus = async (req, res) => {
    try {
        await silabus.create(req.body);
        res.json({
            "message": "Silabus berhasil dibuat"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}

exports.updateSilabus = async (req, res) => {
    try {
        await silabus.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Silabus berhasil diupdate"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}

exports.deleteSilabus = async (req, res) => {
    try {
        await silabus.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Silabus berhasil dihapus"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}