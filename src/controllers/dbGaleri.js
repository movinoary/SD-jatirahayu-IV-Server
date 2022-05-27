const { galeri } = require("../../models")

exports.getAllGaleri = async (req, res) => {
    try {
        let data = await galeri.findAll({
            attributes: {
                exclude: ["createdAt", "updatedAt"],
            }
        });

        
        let FILE_PATH = "http://localhost:5000/public/galeri/"
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

exports.getGaleriKategori = async (req, res) => {
    try {
        let data = await galeri.findAll({
            where: {
                kategori: req.params.kategori
            },
            attributes: {
                exclude: ["createdAt", "updatedAt"],
            }
        });

        let FILE_PATH = "http://localhost:5000/public/galeri/"
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

exports.getGaleribyId = async (req, res) => {
    try {
        let data = await galeri.findAll({
            where: {
                id: req.params.id
            },
            attributes: {
                exclude: ["createdAt", "updatedAt"],
            }
        });
        let FILE_PATH = "http://localhost:5000/public/galeri/"
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

exports.addGaleri = async (req, res) => {
    try {
        await galeri.create(req.body);
        const { ...data } = req.body;

        let newGaleri = await galeri.create({
            ...data,
            image: req.file.filename,
        });

        newGaleri = JSON.parse(JSON.stringify(newGaleri));
        res.send({
            status: "Success",
            data: {
                ...newGaleri,
                image: 'http://localhost:5000/public/galeri/' + newGaleri.image
            }
        })
    } catch (error) {
        console.log(error);
        res.send({
            status: 'failed',
            message: 'server error'
        })
    }
};

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