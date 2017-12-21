const mongoose = require('mongoose');

// Lint told me to do it this way!
const { Schema } = mongoose.Schema;

const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
  username: String,
  password: { type: String, select: false },
  firstName: String,
  lastName: String,
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);
