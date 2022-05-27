const { video } = require("../../models")

exports.getAllVideo = async (req, res) => {
    try {
        const data = await video.findAll({
            attributes: {
                exclude: ["createdAt", "updatedAt"],
            }
        });
        res.json(data);
    } catch (error) {
        res.json({ message: error.message });
    }  
} 
exports.getVideobyId = async (req, res) => {
    try {
        const data = await video.findAll({
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

exports.addVideo = async (req, res) => {
    try {
        await video.create(req.body);
        res.json({
            "message": "Video Youtube berhasil dibuat"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}

exports.updateVideo = async (req, res) => {
    try {
        await video.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Video Youtube berhasil diupdate"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}

exports.deleteVideo = async (req, res) => {
    try {
        await video.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Video Youtube berhasil dihapus"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}