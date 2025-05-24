// controllers/mainmenu.controller.js
const { MainMenu } = require('../models/');

// Create
const createMainMenu = async (req, res) => {
  try {
    const { name, icon } = req.body;
    const mainMenu = await MainMenu.create({ name, icon });
    return res.status(201).json(mainMenu);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Read all with pagination
const getAllMainMenus = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 10;
    const page = parseInt(req.query.page) || 1;
    const offset = (page - 1) * limit;

    const { count, rows } = await MainMenu.findAndCountAll({ limit, offset });

    return res.status(200).json({
      totalItems: count,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
      data: rows
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Read one
const getMainMenuById = async (req, res) => {
  try {
    const { id } = req.params;
    const mainMenu = await MainMenu.findByPk(id);
    if (!mainMenu) {
      return res.status(404).json({ error: 'Main menu not found' });
    }
    return res.status(200).json(mainMenu);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Update
const updateMainMenu = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, icon } = req.body;
    const mainMenu = await MainMenu.findByPk(id);
    if (!mainMenu) {
      return res.status(404).json({ error: 'Main menu not found' });
    }
    await mainMenu.update({ name, icon });
    return res.status(200).json(mainMenu);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Delete
const deleteMainMenu = async (req, res) => {
  try {
    const { id } = req.params;
    const mainMenu = await MainMenu.findByPk(id);
    if (!mainMenu) {
      return res.status(404).json({ error: 'Main menu not found' });
    }
    await mainMenu.destroy();
    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createMainMenu,
  getAllMainMenus,
  getMainMenuById,
  updateMainMenu,
  deleteMainMenu
};
