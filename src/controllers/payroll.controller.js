// src/controllers/payroll.controller.js
const { Payroll, Employee } = require('../models');

// Create a new payroll record
const createPayroll = async (req, res) => {
  try {
    const { employee_id, amount, social_date, tax, payment_date, base_salary, hard_work_money } = req.body;
    const payroll = await Payroll.create({
      employee_id,
      amount,
      social_date,
      tax,
      payment_date,
      base_salary,
      hard_work_money
    });
    return res.status(201).json(payroll);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Get all payroll records with employee details
const getAllPayrolls = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; 
    const limit = parseInt(req.query.limit) || 10; 
    const offset = (page - 1) * limit;

    const { count, rows } = await Payroll.findAndCountAll({
      limit: limit,
      offset: offset,
      order: [['payroll_id', 'ASC']],
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

// Get a payroll record by ID with employee details
const getPayrollById = async (req, res) => {
  try {
    const { id } = req.params;
    const parsedId = parseInt(id, 10);
    const payroll = await Payroll.findByPk(parsedId, {
      include: [{ model: Employee, as: 'employee' }]
    });
    if (!payroll) {
      return res.status(404).json({ error: 'Payroll record not found' });
    }
    return res.status(200).json(payroll);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Update a payroll record
const updatePayroll = async (req, res) => {
  try {
    const { id } = req.params;
    const parsedId = parseInt(id, 10);
    const { employee_id, amount, social_date, tax, payment_date, base_salary, hard_work_money } = req.body;

    const payroll = await Payroll.findByPk(parsedId);
    if (!payroll) {
      return res.status(404).json({ error: 'Payroll record not found' });
    }

    await payroll.update({
      employee_id,
      amount,
      social_date,
      tax,
      payment_date,
      base_salary,
      hard_work_money
    });
    return res.status(200).json(payroll);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Delete a payroll record
const deletePayroll = async (req, res) => {
  try {
    const { id } = req.params;
    const parsedId = parseInt(id, 10);
    const payroll = await Payroll.findByPk(parsedId);
    if (!payroll) {
      return res.status(404).json({ error: 'Payroll record not found' });
    }
    await payroll.destroy();
    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createPayroll,
  getAllPayrolls,
  getPayrollById,
  updatePayroll,
  deletePayroll
};