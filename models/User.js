const { Schema, model } = require('mongoose')

//TODO add validations

const NAME_PATTAERN = /^[a-zA-Z-]+$/;
const EMAIL_PATTAERN = /^([a-zA-Z]+)@([a-zA-Z]+)\.([a-zA-Z]+)$/;
const userSchema = new Schema({
    firstName: {
        type: String, minlength: [3, 'First name must be at least 3 characters long'], validate: {
            validator(value) {
                return NAME_PATTAERN.test(value);
            },
            message: 'First name may contain only english letters'
        }
    },
    lastName: {
        type: String, minlength: [5, 'Last name must be at least 5 characters long'], validate: {
            validator(value) {
                return NAME_PATTAERN.test(value);
            },
            message: 'Last name may contain only english letters'
        }
    },
    email: { 
        type: String, required: [true, 'Email is required'], validate: {
        validator(value) {
            return EMAIL_PATTAERN.test(value);
        },
        message: 'Email must be valid and may contain only english letters'
    } 
},
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