const express = require('express');
const authController = require('../controllers/auth.controller');
const positionController = require('../controllers/position.controller'); // ລວມ position controller
const router = express.Router();

router.post('/login', authController.login);
router.post('/register', authController.register);

router.get("/users/:id", authController.getUserById);
router.put("/users/:id", authController.updateUser);
router.delete("/users/:id", authController.deleteUser);
router.put("/users/", authController.searchUsers);
router.get("/users/", authController.getAllUsers);

router.post('/positions', positionController.createPosition); // Create
router.get('/positions', positionController.getAllPositions); // Read all
router.get('/positions/:id', positionController.getPositionById); // Read one
router.put('/positions/:id', positionController.updatePosition); // Update
router.delete('/positions/:id', positionController.deletePosition); // Delete

module.exports = router;