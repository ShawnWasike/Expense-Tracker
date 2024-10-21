const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./models/index');
const authRoutes = require('./routes/authRoutes');
const expenseRoutes = require('./routes/expenseRoutes');
const mysql=require('mysql')


const app = express();


const connection = mysql.createConnection({
  host: 'localhost',       // MySQL server host
  user: 'root',            // MySQL username
  password: 'Shawn9540!', // MySQL password
  database: 'expense_tracker' 
})

app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/expenses', expenseRoutes);

sequelize.sync({ force: false }).then(() => {
  console.log('Database & tables created!');
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
}).catch(err => {
  console.error('Error syncing database:', err);
});
