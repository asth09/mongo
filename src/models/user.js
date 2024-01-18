const  mongoose = require("mongoose");
const {Schema} = mongoose;
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
    usuario: { type: String, require: true},
    password: { type: String, require: true},
    date: { type: Date, default: Date.now}
});

UserSchema.methods.encryptPassword = async (password) => {
  const salt = await bcrypt.getSalt(10);
  const hash = bcrypt.hash(password,salt);
  return hash;
};

UserSchema.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('user', UserSchema);