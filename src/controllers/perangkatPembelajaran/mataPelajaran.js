const { mataPelajaran, silabus } = require("../../../models");

exports.getAllMataPelajaran = async (req, res) => {
    try {
        const data = await mataPelajaran.findAll({
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
                exclude: ["createdAt", "updatedAt"],
            }
        });
        res.json(data);
    } catch (error) {
        res.json({ message: error.message });
    }  
} 

exports.getMataPelajaranbyId = async (req, res) => {
    try {
        const data = await mataPelajaran.findAll({
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

exports.addMataPelajaran = async (req, res) => {
    try {
        await mataPelajaran.create(req.body);
        res.json({
            "message": "Mata Pelajaran berhasil dibuat"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}

exports.updateMataPelajaran = async (req, res) => {
    try {
        await mataPelajaran.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Mata Pelajaran berhasil diupdate"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}

exports.deleteMataPelajaran = async (req, res) => {
    try {
        await mataPelajaran.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Mata Pelajaran berhasil dihapus"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}