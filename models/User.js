const { Schema, model }  = require('mongoose')

//TODO add validations

const NAME_PATTAERN = /^[a-zA-Z-]+$/;
const userSchema = new Schema({
    firstName: { type: String, require: true, minLength: [3, 'First name must be at least 3 characters long'], validate: {
        validator(value) {
            return NAME_PATTAERN.test(value);
        },
        message: 'First name may contain only english letters'
    } },
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