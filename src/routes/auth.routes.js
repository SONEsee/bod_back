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
const attendanceController = require('../controllers/attendance.controller');  
const payrollController = require('../controllers/payroll.controller');
const specialAllowanceController = require('../controllers/specialAllowance.controller');

const router = express.Router();

router.post('/login', authController.login);
router.post('/register', authController.register);

router.get("/users/:id", authController.getUserById);
router.put("/users/:id", authController.updateUser);
router.delete("/users/:id", authController.deleteUser);
router.put("/users/", authController.searchUsers);
router.get("/users/", authController.getAllUsers);

router.post('/positions', positionController.createPosition); 
router.get('/positions', getAllPositions); 
router.get('/positions/:id', positionController.getPositionById); 
router.put('/positions/:id', positionController.updatePosition); 
router.delete('/positions/:id', positionController.deletePosition); 

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

router.post('/attendances', attendanceController.createAttendance);
router.get('/attendances', attendanceController.getAllAttendances);
router.get('/attendances/:id', attendanceController.getAttendanceById);
router.put('/attendances/:id', attendanceController.updateAttendance);
router.delete('/attendances/:id', attendanceController.deleteAttendance);

router.post('/payrolls', payrollController.createPayroll);
router.get('/payrolls', payrollController.getAllPayrolls);
router.get('/payrolls/:id', payrollController.getPayrollById);
router.put('/payrolls/:id', payrollController.updatePayroll);
router.delete('/payrolls/:id', payrollController.deletePayroll);

router.post('/special-allowances', specialAllowanceController.createSpecialAllowance);
router.get('/special-allowances', specialAllowanceController.getAllSpecialAllowances);
router.get('/special-allowances/:id', specialAllowanceController.getSpecialAllowanceById);
router.put('/special-allowances/:id', specialAllowanceController.updateSpecialAllowance);
router.delete('/special-allowances/:id', specialAllowanceController.deleteSpecialAllowance);

module.exports = router;