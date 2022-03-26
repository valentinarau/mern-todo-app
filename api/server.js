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
    
const Task = require('./models/Task');

app.listen(3001, () => console.log('Server is running on port 3001...'));

app.get('/tasks', async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
})

app.post('/tasks/new', (req, res) => {
    const newTask = new Task({
        description: req.body.description
    })
    newTask.save().then(data => res.json(data));
})

app.put('/tasks/complete/:id', async (req, res) => {
    const task = await Task.findById(req.params.id);

    if(!task.completed) task.completed = true;
    else task.completed = false;

    task.save().then(data => res.json(data));


})

app.delete('/tasks/delete/:id', async (req, res) => {
    await Task.findByIdAndDelete(req.params.id).then(data => res.json(data));
})
