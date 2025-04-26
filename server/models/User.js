const mongoose = require("mongoose");
const crypto = require("crypto");

const UserSchema = mongoose.Schema({
  // username: {
  //   type: String,
  //   required: true,
  // },
  email: {
    type: String,
    required: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
  salt: String,
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
    required: true,
  },
});

UserSchema.virtual("password")
  .set(function (value) {
    this._password = value;
    this.salt = this.makeSalt();
    this.passwordHash = this.encryptPassword(value);
  })
  .get(function () {
    return this._password;
  });

// UserSchema
//   .virtual("passwordConfirmation")
//   .get(function () {
//     return this._passwordConfirmation;
//   })
//   .set(function (value) {
//     this._passwordConfirmation = value;
//   });

UserSchema.path("passwordHash").validate(function(v) {
  if (this._value && this._value.length < 6) {
    this.invalidate("password", "Password must be at least 6 characters");
  }
  if (this.isNew && !this._value) {
    this.invalidate("password", "Password is require");
  }
}, null);

// UserSchema.path('passwordHash').validate(function(v) {
//   if (this._password || this._passwordConfirmation) {
//     if (!val.check(this._password).min(6)) {
//       this.invalidate('password', 'must be at least 6 characters.');
//     }
//     if (this._password !== this._passwordConfirmation) {
//       this.invalidate('passwordConfirmation', 'must match confirmation.');
//     }
//   }

//   if (this.isNew && !this._password) {
//     this.invalidate('password', 'required');
//   }
// }, null);

UserSchema.methods = {
  makeSalt: function () {
    return Math.round(new Date().valueOf() * Math.random()) + "";
  },
  encryptPassword: function (value) {
    if (!value) return "";
    try {
      return crypto.creteHmac("sha256", this.salt).update(value).digest("hex");
    } catch (error) {
      return "";
    }
  },
};

module.exports = mongoose.model("user", UserSchema);
