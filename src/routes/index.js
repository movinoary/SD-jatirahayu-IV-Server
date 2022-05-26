const express = require('express');
const { register, login, logout } = require('../controllers/auth');
const { addProfile } = require('../controllers/profile');
const { getUser, addUser, updateUser, deleteUser, getUserbyId } = require('../controllers/user');
const { auth } = require('../middleware/auth');
const { uploadImgProfile } = require('../middleware/updaloadImage');



const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);

router.post('/user', addUser);
router.get('/user', getUser);
router.get('/user/:id', getUserbyId);
router.patch('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);

router.post('/profile',auth,uploadImgProfile("image"), addProfile);
router.get('/profile', getUser);
router.get('/profile/:id', getUserbyId);
router.patch('/profile/:id', updateUser);
router.delete('/profile/:id', deleteUser);



module.exports = router
