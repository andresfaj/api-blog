var mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

var CategorySchema = mongoose.Schema({
    name: { type: String, unique: true, lowercase: true, required: [true, "A name is required"] },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    date: { type: Date, default: Date.now }
});

CategorySchema.plugin(uniqueValidator, { message: '{PATH} must be unique' });

module.exports = mongoose.model('Categories', CategorySchema);