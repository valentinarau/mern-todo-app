const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.log(err));

app.listen(3001, () => console.log('Server is running on port 3001...'));
