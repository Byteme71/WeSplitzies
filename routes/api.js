const router = require("express").Router();
// const Users = require("../models/Users.js");
// const QRcodes = require("../models/Qrcode.js");
// const Bills = require("../models/Bills.js");
const db = require("../models");


router.post("/api/bills", function (req, res) {
    console.log(req.body);
    db.Bills.create({
            items: req.body.items,
            price: req.body.price,
            qty: req.body.qty
        })
        .then(function (dbBills) {
            res.json(dbBills);
        });
});






module.exports = router;