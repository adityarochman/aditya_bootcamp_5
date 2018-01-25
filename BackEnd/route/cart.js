const express = require("express");
const Cart = require("../model/cart");
const router = express.Router();
const url = require("url");
const http = require("http");

router.post("/", (req, res) => {

    let newCart = new Cart({
        nameCart: req.body.nameCart,
        categoryCart: req.body.categoryCart,
        priceCart: req.body.priceCart,
        profileCart: req.body.profileCart
    });

    newCart.save((error) => {
        if (error) {
            res.status(500).send(error);
        }
        else {
            res.json(newCart);
        }
    });
})

router.get("/:id", (req, res) => {

    Employee.findById(req.params.id, (error, result) => {
        if (error) {
            res.statusCode(500).json(error);
        }
        else {
            res.json(result)
        }
    });

});

module.exports = (function () {
    return router;
})();