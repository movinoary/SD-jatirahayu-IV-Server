const { berita } = require("../../models")

exports.getAllBerita = async (req, res) => {
    try {
        let data = await berita.findAll({
            attributes: {
                exclude: ["createdAt", "updatedAt"],
            }
        });

        let FILE_PATH = "http://localhost:5000/public/berita/"
        data = JSON.parse(JSON.stringify(data));

        data = data.map((item) => {
            return {
                ...item,
                image: FILE_PATH + item.image
            }
        });
        
        res.send({
            status: "success",
            data,
        });
    } catch (error) {
        console.log(error)
        res.send({
            status: 'failed',
            message: 'Server Error'
        });
    } 
} 

exports.getBeritaKategori = async (req, res) => {
    try {
        let data = await berita.findAll({
            where: {
                kategori: req.params.kategori
            },
            attributes: {
                exclude: ["createdAt", "updatedAt"],
            }
        });

        let FILE_PATH = "http://localhost:5000/public/berita/"
        data = JSON.parse(JSON.stringify(data));

        data = data.map((item) => {
            return {
                ...item,
                image: FILE_PATH + item.image
            }
        });
        
        res.send({
            status: "success",
            data,
        });
    } catch (error) {
        console.log(error)
        res.send({
            status: 'failed',
            message: 'Server Error'
        });
    } 
} 

exports.getBeritabyId = async (req, res) => {
    try {
        let data = await berita.findAll({
            where: {
                id: req.params.id
            },
            attributes: {
                exclude: ["createdAt", "updatedAt"],
            }
        });

        let FILE_PATH = "http://localhost:5000/public/berita/"
        data = JSON.parse(JSON.stringify(data));

        data = data.map((item) => {
            return {
                ...item,
                image: FILE_PATH + item.image
            }
        });
        
        res.send({
            status: "success",
            data,
        });
    } catch (error) {
        console.log(error)
        res.send({
            status: 'failed',
            message: 'Server Error'
        });
    } 
}

exports.addBerita = async (req, res) => {
    try {
        await berita.create(req.body);
        const { ...data } = req.body;

        let newBerita = await berita.create({
            ...data,
            image: req.file.filename,
        });

        newBerita = JSON.parse(JSON.stringify(newBerita));
        res.send({
            status: "Success",
            data: {
                ...newBerita,
                image: 'http://localhost:5000/public/berita/' + newBerita.image
            }
        })
    } catch (error) {
        console.log(error);
        res.send({
            status: 'failed',
            message: 'server error'
        })
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