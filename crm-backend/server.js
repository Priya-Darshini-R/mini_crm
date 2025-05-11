const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const session = require('express-session');
const passport = require('passport');
const cors = require('cors');

dotenv.config();
require('./config/passport');

const app = express();
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/customers', require('./routes/customerRoutes'));
app.use('/api/campaigns', require('./routes/campaignRoutes'));

app.get('/', (req, res) => {
  res.send('API is running');
});

mongoose.connect(process.env.MONGO_URI).then(() => {
  app.listen(process.env.PORT, () => console.log("Server running on port", process.env.PORT));
}).catch(err => console.error(err));
