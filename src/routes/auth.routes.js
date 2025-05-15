const express = require('express');
const authController = require('../controllers/auth.controller');
const positionController = require('../controllers/position.controller'); 
const { getAllPositions } = require('../controllers/position.controller');
const {  createSchedule,  
         getAllSchedules,  
         getScheduleById,  
         updateSchedule,  
         deleteSchedule} = require('../controllers/employeeSchedule.controller');
const employeeController = require('../controllers/employee.controller');   


const router = express.Router();

router.post('/login', authController.login);
router.post('/register', authController.register);

router.get("/users/:id", authController.getUserById);
router.put("/users/:id", authController.updateUser);
router.delete("/users/:id", authController.deleteUser);
router.put("/users/", authController.searchUsers);
router.get("/users/", authController.getAllUsers);

router.post('/positions', positionController.createPosition); // Create
router.get('/positions', getAllPositions); 
router.get('/positions/:id', positionController.getPositionById); // Read one
router.put('/positions/:id', positionController.updatePosition); // Update
router.delete('/positions/:id', positionController.deletePosition); // Delete

router.post('/schedules', createSchedule);
router.get('/schedules', getAllSchedules);
router.get('/schedules/:id', getScheduleById);
router.put('/schedules/:id', updateSchedule);
router.delete('/schedules/:id', deleteSchedule);

router.post('/employees', employeeController.createEmployee);
router.get('/employees', employeeController.getAllEmployees);
router.get('/employees/:id', employeeController.getEmployeeById);
router.put('/employees/:id', employeeController.updateEmployee);
router.delete('/employees/:id', employeeController.deleteEmployee);

module.exports = router;