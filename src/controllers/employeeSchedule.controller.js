const EmployeeWorkSchedule = require('../models/EmployeeWorkSchedule');

// CREATE
const createSchedule = async (req, res) => {
  try {
    const { shift_start, shift_end } = req.body;
    const schedule = await EmployeeWorkSchedule.create({ shift_start, shift_end });
    return res.status(201).json(schedule);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// READ ALL
const getAllSchedules = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const offset = (parseInt(page) - 1) * parseInt(limit);

    const { count, rows } = await EmployeeWorkSchedule.findAndCountAll({
      order: [['schedule_id', 'ASC']],
      limit: parseInt(limit),
      offset: offset
    });

    return res.status(200).json({
      total: count,
      page: parseInt(page),
      limit: parseInt(limit),
      totalPages: Math.ceil(count / limit),
      data: rows
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};


// READ ONE
const getScheduleById = async (req, res) => {
  try {
    const { id } = req.params;
    const schedule = await EmployeeWorkSchedule.findByPk(id);
    if (!schedule) return res.status(404).json({ error: 'Schedule not found' });
    return res.status(200).json(schedule);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// UPDATE
const updateSchedule = async (req, res) => {
  try {
    const { id } = req.params;
    const { shift_start, shift_end } = req.body;
    const schedule = await EmployeeWorkSchedule.findByPk(id);
    if (!schedule) return res.status(404).json({ error: 'Schedule not found' });

    await schedule.update({ shift_start, shift_end });
    return res.status(200).json(schedule);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// DELETE
const deleteSchedule = async (req, res) => {
  try {
    const { id } = req.params;
    const schedule = await EmployeeWorkSchedule.findByPk(id);
    if (!schedule) return res.status(404).json({ error: 'Schedule not found' });

    await schedule.destroy();
    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createSchedule,
  getAllSchedules,
  getScheduleById,
  updateSchedule,
  deleteSchedule
};
