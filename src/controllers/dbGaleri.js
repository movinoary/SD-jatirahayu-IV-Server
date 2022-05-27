const { galeri } = require("../../models")

exports.getAllGaleri = async (req, res) => {
    try {
        const data = await galeri.findAll({
            attributes: {
                exclude: ["createdAt", "updatedAt"],
            }
        });
        res.json(data);
    } catch (error) {
        res.json({ message: error.message });
    }  
} 

exports.getGaleriKategori = async (req, res) => {
    try {
        const data = await galeri.findAll({
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

exports.getGaleribyId = async (req, res) => {
    try {
        const data = await galeri.findAll({
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

exports.addGaleri = async (req, res) => {
    try {
        await galeri.create(req.body);
        res.json({
            "message": "Galeri berhasil dibuat"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}

exports.updateGaleri = async (req, res) => {
    try {
        await galeri.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Galeri berhasil diupdate"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}

exports.deleteGaleri = async (req, res) => {
    try {
        await galeri.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Galeri berhasil dihapus"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}