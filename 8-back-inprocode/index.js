const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const locationRoutes = require('./routes/locationRoutes');
const eventsRoutes = require('./routes/events');


dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

const pluginRoutes = require('./routes/pluginRoutes');
app.use('/api/plugins', pluginRoutes);
app.use('/api/users', userRoutes);
app.use('/api/locations', locationRoutes);
app.use('/api/events', eventsRoutes)

app.get('/', (req, res) => {
  res.send('API funcionant ✅');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor escoltant a http://localhost:${PORT}`);
});
