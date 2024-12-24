
const mongoose = require('mongoose');
const TaskSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    dueDate: {type: Date, required: true},
    userId : {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'}
});

const Task = mongoose.model('Task', TaskSchema);
module.exports = Task;
