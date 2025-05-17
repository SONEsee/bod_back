// src/controllers/specialAllowance.controller.js
const { SpecialAllowance, Employee } = require('../models');

// Create a new special allowance record
const createSpecialAllowance = async (req, res) => {
  try {
    const { employee_id, amount, food_money } = req.body;
    const specialAllowance = await SpecialAllowance.create({
      employee_id,
      amount,
      food_money
    });
    return res.status(201).json(specialAllowance);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Get all special allowance records with employee details
const getAllSpecialAllowances = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // ໜ້າປັດຈຸບັນ, ຄ່າເລີ່ມຕົ້ນເປັນ 1
    const limit = parseInt(req.query.limit) || 10; // ຈຳນວນຂໍ້ມູນຕໍ່ໜ້າ, ຄ່າເລີ່ມຕົ້ນເປັນ 10
    const offset = (page - 1) * limit; // ຄຳນວນ offset ເພື່ອຂ້າມຂໍ້ມູນ

    const { count, rows } = await SpecialAllowance.findAndCountAll({
      limit: limit,
      offset: offset,
      order: [['special_allowance_id', 'ASC']], // ຈັດລຽງຕາມ special_allowance_id ແບບເລກນ້ອຍໄປໃຫຍ່
      include: [{ model: Employee, as: 'employee' }]
    });

    const totalPages = Math.ceil(count / limit); // ຄຳນວນຈຳນວນໜ້າທັງໝົດ

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

// Get a special allowance record by ID with employee details
const getSpecialAllowanceById = async (req, res) => {
  try {
    const { id } = req.params;
    const parsedId = parseInt(id, 10);
    const specialAllowance = await SpecialAllowance.findByPk(parsedId, {
      include: [{ model: Employee, as: 'employee' }]
    });
    if (!specialAllowance) {
      return res.status(404).json({ error: 'Special allowance record not found' });
    }
    return res.status(200).json(specialAllowance);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Update a special allowance record
const updateSpecialAllowance = async (req, res) => {
  try {
    const { id } = req.params;
    const parsedId = parseInt(id, 10);
    const { employee_id, amount, food_money } = req.body;

    const specialAllowance = await SpecialAllowance.findByPk(parsedId);
    if (!specialAllowance) {
      return res.status(404).json({ error: 'Special allowance record not found' });
    }

    await specialAllowance.update({
      employee_id,
      amount,
      food_money
    });
    return res.status(200).json(specialAllowance);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Delete a special allowance record
const deleteSpecialAllowance = async (req, res) => {
  try {
    const { id } = req.params;
    const parsedId = parseInt(id, 10);
    const specialAllowance = await SpecialAllowance.findByPk(parsedId);
    if (!specialAllowance) {
      return res.status(404).json({ error: 'Special allowance record not found' });
    }
    await specialAllowance.destroy();
    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createSpecialAllowance,
  getAllSpecialAllowances,
  getSpecialAllowanceById,
  updateSpecialAllowance,
  deleteSpecialAllowance
};