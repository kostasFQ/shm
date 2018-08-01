const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
  login: { type: String, trim: true, require: true, unique: true },
  email: { type: String, unique: true, lowercase: true, trim: true, required: true },
  password: { type: String, require: true },
  created: { type: Date, default: Date.now }
 });

UserSchema.pre('save', function(next) {
  let user = this;
  if (!user.isModified('password')) return next();
  bcrypt.genSalt(10, function(err, salt) {
      if (err) return next(err);
      bcrypt.hash(user.password, salt, function(err, hash) {
          if (err) return next(err);
          user.password = hash;
          next();
      });
  });
});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
      if (err) return cb(err);
      cb(null, isMatch);
  });
};

const User = mongoose.model('User', UserSchema);
exports.module = { user: User };