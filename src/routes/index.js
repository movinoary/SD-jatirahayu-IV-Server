const express = require('express');
const { auth } = require('../middleware/auth');
const { addProfile } = require('../controllers/profile');
const { register, login, logout } = require('../controllers/auth');
const { uploadImgProfile, uploadImgGaleri, uploadImgBerita } = require('../middleware/updaloadImage');
const { getUser, addUser, updateUser, deleteUser, getUserbyId } = require('../controllers/user');
const { addVideo, getVideobyId, getAllVideo, updateVideo, deleteVideo } = require('../controllers/dbVideo');
const { addAnggaran, getAllAnggaran, getAnggaranbyId, updateAnggaran, deleteAnggaran } = require('../controllers/dbAnggaran');
const { addGaleri, getAllGaleri, getGaleribyId, updateGaleri, deleteGaleri, getGaleriKategori } = require('../controllers/dbGaleri');
const { addBerita, getAllBerita, getBeritaKategori, getBeritabyId, updateBerita, deleteBerita } = require('../controllers/dbBerita');
const { addDataSekolah, getAllDataSekolah, getDataSekolahbyId, updateDataSekolah, deleteDataSekolah } = require('../controllers/dbDataSekolah');
const { addTahunAjaran, getAllTahunAjaran, getTahunAjaranbyId, updateTahunAjaran, deleteTahunAjaran } = require('../controllers/dataSiswa/tahunAjaran');
const { addKelas, getAllKelas, getKelasbyId, updateKelas, deleteKelas } = require('../controllers/dataSiswa/kelas');
const { addDataSiswa, getAllDataSiswa, getDataSiswabyId, updateDataSiswa, deleteDataSiswa } = require('../controllers/dataSiswa/dataSiswa');
const { addDaftarNilai, getAllDaftarNilai, getDaftarNilaibyId, updateDaftarNilai, deleteDaftarNilai } = require('../controllers/dataSiswa/daftarNilai');
const { addSilabus, getAllSilabus, getSilabusbyId, updateSilabus, deleteSilabus } = require('../controllers/perangkatPembelajaran/silabus');
const { addKkm, getAllKkm, getKkmbyId, updateKkm, deleteKkm } = require('../controllers/perangkatPembelajaran/kkm');
const { addMataPelajaran, getAllMataPelajaran, getMataPelajaranbyId, updateMataPelajaran, deleteMataPelajaran } = require('../controllers/perangkatPembelajaran/mataPelajaran');
const { attachment } = require('express/lib/response');
const { addProta, getAllProta, getProtabyId, updateProta, deleteProta } = require('../controllers/perangkatPembelajaran/prota');
const { getAllPromes, addPromes, getPromesbyId, updatePromes, deletePromes } = require('../controllers/perangkatPembelajaran/promes');

const router = express.Router();

// Router active
router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);

// Router user
router.post('/user', addUser);
router.get('/user', getUser);
router.get('/user/:id', getUserbyId);
router.patch('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);

// Router profile
router.post('/profile',auth,uploadImgProfile("image"), addProfile);
router.get('/profile', getUser);
router.get('/profile/:id', getUserbyId);
router.patch('/profile/:id', updateUser);
router.delete('/profile/:id', deleteUser);

// Router Database Anggaran
router.post('/database/post/anggaran', addAnggaran);
router.get('/database/get/anggaran', getAllAnggaran);
router.get('/database/getbyid/anggaran/:id', getAnggaranbyId);
router.patch('/database/patch/anggaran/:id', updateAnggaran);
router.delete('/database/delete/anggaran/:id', deleteAnggaran);

// Router Database deta Sekolah
router.post('/database/post/data-sekolah', addDataSekolah);
router.get('/database/get/data-sekolah', getAllDataSekolah);
router.get('/database/getbyid/data-sekolah/:id', getDataSekolahbyId);
router.patch('/database/patch/data-sekolah/:id', updateDataSekolah);
router.delete('/database/delete/data-sekolah/:id', deleteDataSekolah);

// Router Database video
router.post('/database/post/video-youtube', addVideo);
router.get('/database/get/video-youtube', getAllVideo);
router.get('/database/getbyid/video-youtube/:id', getVideobyId);
router.patch('/database/patch/video-youtube/:id', updateVideo);
router.delete('/database/delete/video-youtube/:id', deleteVideo);

// Router Database Galeri
router.post('/database/post/galeri',uploadImgGaleri("image"), addGaleri);
router.get('/database/get/galeri', getAllGaleri);
router.get('/database/get/galeri/:kategori', getGaleriKategori);
router.get('/database/getbyid/galeri/:id', getGaleribyId);
router.patch('/database/patch/galeri/:id', updateGaleri);
router.delete('/database/delete/galeri/:id', deleteGaleri);

// Router Database berita
router.post('/database/post/berita',uploadImgBerita("image"), addBerita);
router.get('/database/get/berita', getAllBerita);
router.get('/database/get/berita/:kategori', getBeritaKategori);
router.get('/database/getbyid/berita/:id', getBeritabyId);
router.patch('/database/patch/berita/:id', updateBerita);
router.delete('/database/delete/berita/:id', deleteBerita);

// Router dataSiswa Tahun Ajaran
router.post('/database/post/tahun-ajaran', addTahunAjaran);
router.get('/database/get/tahun-ajaran', getAllTahunAjaran);
router.get('/database/getbyid/tahun-ajaran/:id', getTahunAjaranbyId);
router.patch('/database/patch/tahun-ajaran/:id', updateTahunAjaran);
router.delete('/database/delete/tahun-ajaran/:id', deleteTahunAjaran);

// Router dataSiswa Kelass
router.post('/database/post/kelas', addKelas);
router.get('/database/get/kelas', getAllKelas);
router.get('/database/getbyid/kelas/:id', getKelasbyId);
router.patch('/database/patch/kelas/:id', updateKelas);
router.delete('/database/delete/kelas/:id', deleteKelas);

// Router dataSiswa Data Siswa
router.post('/database/post/data-siswa', addDataSiswa);
router.get('/database/get/data-siswa', getAllDataSiswa);
router.get('/database/getbyid/data-siswa/:id', getDataSiswabyId);
router.patch('/database/patch/data-siswa/:id', updateDataSiswa);
router.delete('/database/delete/data-siswa/:id', deleteDataSiswa);

// Router dataSiswa Daftar Nilai
router.post('/database/post/daftar-nilai', addDaftarNilai);
router.get('/database/get/daftar-nilai', getAllDaftarNilai);
router.get('/database/getbyid/daftar-nilai/:id', getDaftarNilaibyId);
router.patch('/database/patch/daftar-nilai/:id', updateDaftarNilai);
router.delete('/database/delete/daftar-nilai/:id', deleteDaftarNilai);

// Router Mata Pelajaran
router.post('/database/post/mata-pelajaran', addMataPelajaran);
router.get('/database/get/mata-pelajaran', getAllMataPelajaran);
router.get('/database/getbyid/mata-pelajaran/:id', getMataPelajaranbyId);
router.patch('/database/patch/mata-pelajaran/:id', updateMataPelajaran);
router.delete('/database/delete/mata-pelajaran/:id', deleteMataPelajaran);

// Router Perangkat Pembelajaran Silabus
router.post('/database/post/perangkat-pembelajaran/silabus', addSilabus);
router.get('/database/get/perangkat-pembelajaran/silabus', getAllSilabus);
router.get('/database/getbyid/perangkat-pembelajaran/silabus/:id', getSilabusbyId);
router.patch('/database/patch/perangkat-pembelajaran/silabus/:id', updateSilabus);
router.delete('/database/delete/perangkat-pembelajaran/silabus/:id', deleteSilabus);

// Router Perangkat Pembelajaran KKM
router.post('/database/post/perangkat-pembelajaran/kkm', addKkm);
router.get('/database/get/perangkat-pembelajaran/kkm', getAllKkm);
router.get('/database/getbyid/perangkat-pembelajaran/kkm/:id', getKkmbyId);
router.patch('/database/patch/perangkat-pembelajaran/kkm/:id', updateKkm);
router.delete('/database/delete/perangkat-pembelajaran/kkm/:id', deleteKkm);

// Router Perangkat Pembelajaran Prota
router.post('/database/post/perangkat-pembelajaran/prota', addProta);
router.get('/database/get/perangkat-pembelajaran/prota', getAllProta);
router.get('/database/getbyid/perangkat-pembelajaran/prota/:id', getProtabyId);
router.patch('/database/patch/perangkat-pembelajaran/prota/:id', updateProta);
router.delete('/database/delete/perangkat-pembelajaran/prota/:id', deleteProta);

// Router Perangkat Pembelajaran Promes
router.post('/database/post/perangkat-pembelajaran/promes', addPromes);
router.get('/database/get/perangkat-pembelajaran/promes', getAllPromes);
router.get('/database/getbyid/perangkat-pembelajaran/promes/:id', getPromesbyId);
router.patch('/database/patch/perangkat-pembelajaran/promes/:id', updatePromes);
router.delete('/database/delete/perangkat-pembelajaran/promes/:id', deletePromes);




module.exports = router
