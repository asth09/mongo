const  mongoose = require("mongoose");
const {Schema} = mongoose;
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
    usuario: { type: String, require: true},
    password: { type: String, require: true},
}, {versionKey:false});

UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    return next();
  }
  const hashedPassword = await bcrypt.hash(this.password, 10);
  this.password = hashedPassword;
  next();
});

const UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;