const mongooose = require('mongoose');
const Schema = mongooose.Schema;

const TaskSchema = new Schema({
    description: { type: String, required: true },
    completed: { type: Boolean, default: false },
    timestamp: { type: Date, default: Date.now }
});

const Taks = mongooose.model('Task', TaskSchema);