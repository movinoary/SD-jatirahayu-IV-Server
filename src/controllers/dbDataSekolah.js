const { dataSekolah } = require("../../models")

exports.getAllDataSekolah = async (req, res) => {
    try {
        const data = await dataSekolah.findAll({
            attributes: {
                exclude: ["createdAt", "updatedAt"],
            }
        });
        res.json(data);
    } catch (error) {
        res.json({ message: error.message });
    }  
} 
exports.getDataSekolahbyId = async (req, res) => {
    try {
        const data = await dataSekolah.findAll({
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

exports.addDataSekolah = async (req, res) => {
    try {
        await dataSekolah.create(req.body);
        res.json({
            "message": "Data Sekolah berhasil dibuat"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}

exports.updateDataSekolah = async (req, res) => {
    try {
        await dataSekolah.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Data Sekolah berhasil diupdate"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}

exports.deleteDataSekolah = async (req, res) => {
    try {
        await dataSekolah.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Data Sekolah berhasil dihapus"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}