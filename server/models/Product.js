const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  title: {
    type: String,
  },
  price: {
    type: Number
  },
}, {timestamps: true});

module.exports = mongoose.model("product", ProductSchema);