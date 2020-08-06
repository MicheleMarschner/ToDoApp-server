const mongoose = require('mongoose');

const ToDoSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required: [true, 'Please add some text']
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    isCompleted: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('ToDo', ToDoSchema);