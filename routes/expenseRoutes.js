const express = require('express');
const { addExpense, getExpenses, updateExpense, deleteExpense } = require('../controllers/expenseController');
const authenticate = require('../middleware/authMiddleware');
const router = express.Router();

// Ensure each route handler is a function
router.post('/add', authenticate, addExpense);
router.get('/all', authenticate, getExpenses);
router.put('/update/:id', authenticate, updateExpense);
router.delete('/delete/:id', authenticate, deleteExpense);

module.exports = router;
