const mongoose = require('mongoose');
const validator = require('validator');
const Schema = mongoose.Schema;
 
const UserAdminSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      validate: (value) => {
        const regexp = /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;

        return regexp.test(value);
      },
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      validate: (value) => validator.isEmail(value),
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const UserAdminModels =  mongoose.model('useradmins', UserAdminSchema);

module.exports = UserAdminModels;
