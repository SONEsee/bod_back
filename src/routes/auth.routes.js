
const express = require('express');
const authController = require('../controllers/auth.controller');
const router = express.Router();


router.post('/login', authController.login);
router.post('/register', authController.register);


router.get("/users/:id", authController.getUserById);
router.put("/users/:id", authController.updateUser);
router.delete("/users/:id", authController.deleteUser);
router.put("/users/", authController.searchUsers);
router.get("/users/", authController.getAllUsers);

module.exports = router;