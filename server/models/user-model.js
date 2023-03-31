const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
   firstname: { type: String, unique: true, required: true },
   lastname: { type: String, unique: true, required: true },
   roles: [{ type: String, ref: 'Roles' }],
   email: { type: String, unique: true, required: true },
   password: { type: String, required: true },
   isActivated: { type: Boolean, default: false },
   activationLink: { type: String },
})

module.exports = model('User', UserSchema);