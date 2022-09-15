const { Schema, model } = require('mongoose');

//TODO change user model according to exam description
//TODO add validations
const userSchema = new Schema({
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
    email: { type: String, require: true },
    hashedPassword: { type: String, require: true }
});


userSchema.index({ email: 1 }, {
    unique: true,
    collation: {
        locale: 'en',
        strength: 2
    }
});

const User = model('User', userSchema);

module.exports = User;