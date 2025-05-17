// src/controllers/attendance.controller.js
const { Attendance, Employee } = require('../models');

// Create a new attendance record
const createAttendance = async (req, res) => {
  try {
    const { employee_id, check_in_time, check_out_time, date, status } = req.body;
    const attendance = await Attendance.create({
      employee_id,
      check_in_time,
      check_out_time,
      date,
      status
    });
    return res.status(201).json(attendance);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Get all attendance records with employee details
const getAllAttendances = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; 
    const limit = parseInt(req.query.limit) || 10; 
    const offset = (page - 1) * limit; 

    const { count, rows } = await Attendance.findAndCountAll({
      limit: limit,
      offset: offset,
      order: [['attendance_id', 'ASC']], 
      include: [{ model: Employee, as: 'employee' }]
    });

    const totalPages = Math.ceil(count / limit); 

    return res.status(200).json({
      data: rows,
      currentPage: page,
      totalPages: totalPages,
      totalItems: count
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Get an attendance record by ID with employee details
const getAttendanceById = async (req, res) => {
  try {
    const { id } = req.params;
    const parsedId = parseInt(id, 10);
    const attendance = await Attendance.findByPk(parsedId, {
      include: [{ model: Employee, as: 'employee' }]
    });
    if (!attendance) {
      return res.status(404).json({ error: 'Attendance record not found' });
    }
    return res.status(200).json(attendance);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Update an attendance record
const updateAttendance = async (req, res) => {
  try {
    const { id } = req.params;
    const parsedId = parseInt(id, 10);
    const { employee_id, check_in_time, check_out_time, date, status } = req.body;

    const attendance = await Attendance.findByPk(parsedId);
    if (!attendance) {
      return res.status(404).json({ error: 'Attendance record not found' });
    }

    await attendance.update({
      employee_id,
      check_in_time,
      check_out_time,
      date,
      status
    });
    return res.status(200).json(attendance);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Delete an attendance record
const deleteAttendance = async (req, res) => {
  try {
    const { id } = req.params;
    const parsedId = parseInt(id, 10);
    const attendance = await Attendance.findByPk(parsedId);
    if (!attendance) {
      return res.status(404).json({ error: 'Attendance record not found' });
    }
    await attendance.destroy();
    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createAttendance,
  getAllAttendances,
  getAttendanceById,
  updateAttendance,
  deleteAttendance
};