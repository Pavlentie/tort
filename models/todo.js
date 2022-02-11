const mongoose = require('mongoose');

const TodoShema = new mongoose.Schema({

    todo: {
        type: String,
        required: true,
    },

});

module.exports = new mongoose.model("todo", TodoShema);
    