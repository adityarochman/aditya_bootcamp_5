const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/cart");

const Schema = mongoose.Schema;

const cartSchema = new Schema({

    nameCart: String,
    categoryCart: String,
    priceCart: Number,
    profileCart: String

});

const Cart = mongoose.model("cart", cartSchema);

module.exports = Cart;

