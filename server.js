const express = require('express');
const dotenv = require('dotenv');
const { sequelize } = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const orderRoutes = require('./routes/orderRoutes');
const routeRoutes = require('./routes/routeRoutes');

dotenv.config();
const app = express();
app.use(express.json());

sequelize.sync()
  .then(function() {
    console.log('PostgreSQL подключен');
  })
  .catch(function(err) {
    console.error('Ошибка подключения к PostgreSQL:', err.message);
  });

app.use('/api/auth', authRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/routes', routeRoutes);

app.listen(3000, function() {
  console.log('Сервер запущен на порту 3000');
});