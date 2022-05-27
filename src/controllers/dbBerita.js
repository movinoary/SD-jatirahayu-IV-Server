const { berita } = require("../../models")

exports.getAllBerita = async (req, res) => {
    try {
        const data = await berita.findAll({
            attributes: {
                exclude: ["createdAt", "updatedAt"],
            }
        });
        res.json(data);
    } catch (error) {
        res.json({ message: error.message });
    }  
} 

exports.getBeritaKategori = async (req, res) => {
    try {
        const data = await berita.findAll({
            where: {
                kategori: req.params.kategori
            },
            attributes: {
                exclude: ["createdAt", "updatedAt"],
            }
        });
        res.json(data);
    } catch (error) {
        res.json({ message: error.message });
    }  
} 

exports.getBeritabyId = async (req, res) => {
    try {
        const data = await berita.findAll({
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

exports.addBerita = async (req, res) => {
    try {
        await berita.create(req.body);
        res.json({
            "message": "berita berhasil dibuat"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}

exports.updateBerita = async (req, res) => {
    try {
        await berita.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "berita berhasil diupdate"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}

exports.deleteBerita = async (req, res) => {
    try {
        await berita.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "berita berhasil dihapus"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}