// src/controllers/supmenu.controller.js
const { SupMenu } = require('../models');

// Create
const createSupMenu = async (req, res) => {
  try {
    const { main_id, name, url } = req.body;
    const supMenu = await SupMenu.create({ main_id, name, url });
    res.status(201).json(supMenu);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Read all
const getAllSupMenus = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 10; // ຈຳນວນຂໍ້ມູນຕໍ່ຫນ້າ
    const page = parseInt(req.query.page) || 1; // ໜ້າປັດຈຸບັນ
    const offset = (page - 1) * limit;

    const { count, rows } = await SupMenu.findAndCountAll({
      limit,
      offset
    });

    res.status(200).json({
      totalItems: count,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
      data: rows
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// Read by ID
const getSupMenuById = async (req, res) => {
  try {
    const supMenu = await SupMenu.findByPk(req.params.id);
    if (!supMenu) return res.status(404).json({ error: 'Not found' });
    res.status(200).json(supMenu);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update
const updateSupMenu = async (req, res) => {
  try {
    const supMenu = await SupMenu.findByPk(req.params.id);
    if (!supMenu) return res.status(404).json({ error: 'Not found' });

    const { main_id, name, url } = req.body;
    await supMenu.update({ main_id, name, url });
    res.status(200).json(supMenu);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete
const deleteSupMenu = async (req, res) => {
  try {
    const supMenu = await SupMenu.findByPk(req.params.id);
    if (!supMenu) return res.status(404).json({ error: 'Not found' });

    await supMenu.destroy();
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createSupMenu,
  getAllSupMenus,
  getSupMenuById,
  updateSupMenu,
  deleteSupMenu
};
