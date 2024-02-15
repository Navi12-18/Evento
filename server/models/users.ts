// const mongoose = require('mongoose');
const { Schema } = mongoose;

/**
 * @typedef {import('mongoose').Document} Document
 *
 * @typedef {Object} UserInterface
 * @property {string} firstName
 * @property {string} lastName
 * @property {string} email
 * @property {string} password
 * @property {number} mobileNumber
 */

/** @type {import('mongoose').Schema<UserInterface & Document>} */
const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    mobileNumber: { type: Number, required: true }
});

/** @type {import('mongoose').Model<UserInterface & Document>} */
const userModel = mongoose.model('User', userSchema);

module.exports = userModel;