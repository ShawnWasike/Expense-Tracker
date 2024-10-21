const Expense = require('../models/expense');

exports.addExpense = async (req, res) => {
  try {
    const { amount, date, category } = req.body;
    const expense = await Expense.create({
      user_id: req.user.id,
      amount,
      date,
      category,
    });
    res.status(201).json(expense);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.findAll({ where: { user_id: req.user.id } });
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateExpense = async (req, res) => {
  try {
    const { id } = req.params;
    const { amount, date, category } = req.body;
    const expense = await Expense.findOne({ where: { id, user_id: req.user.id } });
    if (!expense) {
      return res.status(404).json({ error: 'Expense not found' });
    }
    expense.amount = amount;
    expense.date = date;
    expense.category = category;
    await expense.save();
    res.json(expense);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteExpense = async (req, res) => {
  try {
    const { id } = req.params;
    const expense = await Expense.findOne({ where: { id, user_id: req.user.id } });
    if (!expense) {
      return res.status(404).json({ error: 'Expense not found' });
    }
    await expense.destroy();
    res.json({ message: 'Expense deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
