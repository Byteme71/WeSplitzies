const router = require("express").Router();
const db = require("../models");
const randToken = require("rand-token");
const encrypt = require("../crypt/encryption");

router.post("/api/bills", function (req, res) {
    console.log(req.body);

    db.Bill.create({
        items: req.body.items,
        price: req.body.price,
        qty: req.body.qty
    }).then(function (dbBills) {
        res.json(dbBills);
    }).catch(function (err) {
        throw err;
    });
});

router.post("/signup", function (req, res) {
    db.User.findOne({
        where: {
            email: req.body.email
        }
    }).then(function(result) {
        let token = randToken.generate(16);

        if (!result || result.email !== req.body.email) {
            let encryptPw = encrypt.encrypt(req.body.password);

            db.User.create({
                full_name: req.body.fullName,
                email: req.body.email,
                password: encryptPw,
                address: req.body.address,
                city: req.body.city,
                state: req.body.state,
                zip: req.body.zip,
                card: req.body.card,
                month: req.body.month,
                year: req.body.year,
                cvv: req.body.cvv,
                token: token
            }).then(function (dbUser) {
                res.cookie("TOKEN", token);
                req.session.user = dbUser.id;
                res.json(dbUser);
            });
        } else {
            res.send({
                "code": 304
            });
        };
    });
});

router.post("/login", function (req, res) {
    db.User.findOne({
        where: {
            email: req.body.email
        }
    }).then(function(result) {
        if (!result) {
            res.send({
                "code": 505
            });
        } else {
            let token = randToken.generate(16);
            let dbPassword = result.password;
            let decryptPw = encrypt.decrypt(dbPassword);

            if (result.email === req.body.email && decryptPw === req.body.password) {
                db.User.update({ token: token }, {
                    where: {
                        email: req.body.email
                    }
                }).then(function (data) {
                    if (!data) {
                        res.send("Log-in failure!");
                    } else {
                        res.cookie("TOKEN", token);
                        req.session.user = result.id;
                        res.send("Log-in success!");
                    };
                }).catch(function (error) {
                    res.send(error);
                });
            } else {
                res.send({
                    "code": 504
                });
            };
        };
    });
});

router.get('/contact', function (req, res) {
    if (req.session.user) {
        res.redirect('/');
    } else if (req.cookie) {
        db.User.findOne({
            where: {
                token: req.session.user.token
            }
        }).then(function (result) {
            req.session.user = result.id;
            res.redirect('/');
        });
    } else {
        res.redirect('/');
    };
});

router.get('/current', function (req, res) {
    if (req.session.user) {
        res.redirect('/');
    } else if (req.cookie) {
        db.User.findOne({
            where: {
                token: req.session.user.token
            }
        }).then(function (result) {
            req.session.user = result.id;
            res.redirect('/');
        });
    } else {
        res.redirect('/');
    };
});

router.get('/help', function (req, res) {
    if (req.session.user) {
        res.redirect('/');
    } else if (req.cookie) {
        db.User.findOne({
            where: {
                token: req.session.user.token
            }
        }).then(function (result) {
            req.session.user = result.id;
            res.redirect('/');
        });
    } else {
        res.redirect('/');
    };
});

router.get('/history', function (req, res) {
    if (req.session.user) {
        res.redirect('/');
    } else if (req.cookie) {
        db.User.findOne({
            where: {
                token: req.session.user.token
            }
        }).then(function (result) {
            req.session.user = result.id;
            res.redirect('/');
        });
    } else {
        res.redirect('/');
    };
});

router.get('/api/home', function (req, res) {
    if (req.session.user) {
        res.redirect('/');
    } else if (req.cookie) {
        db.User.findOne({
            where: {
                token: req.session.user.token
            }
        }).then(function (result) {
            req.session.user = result.id;
            res.redirect('/');
        });
    } else {
        res.redirect('/');
    };
});

router.get('/api/login', function (req, res) {
    if (req.session.user) {
        res.redirect('/');
    } else if (req.cookie) {
        db.User.findOne({
            where: {
                token: req.session.user.token
            }
        }).then(function (result) {
            req.session.user = result.id;
            res.redirect('/');
        });
    } else {
        res.redirect('/');
    };
});

router.get('/api/payment', function (req, res) {
    if (req.session.user) {
        res.redirect('/');
    } else if (req.cookie) {
        db.User.findOne({
            where: {
                token: req.session.user.token
            }
        }).then(function (result) {
            req.session.user = result.id;
            res.redirect('/');
        });
    } else {
        res.redirect('/');
    };
});

router.get('/api/qr', function (req, res) {
    if (req.session.user) {
        res.redirect('/');
    } else if (req.cookie) {
        db.User.findOne({
            where: {
                token: req.session.user.token
            }
        }).then(function (result) {
            req.session.user = result.id;
            res.redirect('/');
        });
    } else {
        res.redirect('/');
    };
});

router.get('/api/settings', function (req, res) {
    if (req.session.user) {
        res.redirect('/');
    } else if (req.cookie) {
        db.User.findOne({
            where: {
                token: req.session.user.token
            }
        }).then(function (result) {
            req.session.user = result.id;
            res.redirect('/');
        });
    } else {
        res.redirect('/');
    };
});

router.get('/api/signup', function (req, res) {
    if (req.session.user) {
        res.redirect('/');
    } else if (req.cookie) {
        db.User.findOne({
            where: {
                token: req.session.user.token
            }
        }).then(function (result) {
            req.session.user = result.id;
            res.redirect('/');
        });
    } else {
        res.redirect('/');
    };
});

router.get("/api/logout", function(req, res) {
    if (req.body) {
        res.clearCookie("TOKEN");
        req.session.destroy();
        res.end();
    } else {
        res.send({
            "code": 707
        });
    };
});

router.get("/api/bills/:id", function (req, res) {
    db.Qrcode.findAll({
            where: {
                id: req.params.id
            },
            include: [db.Bill]
        })
        .then(function (dbBills) {
            res.json(dbBills);
        });
});

router.get("/api/payment/:claimed", function (req, res) {

    console.log("is this what we need on the back end?! ",req.params)

    db.Bill.findAll({
            where: {
                claimed: req.params.claimed
            }
        })
        .then(function (dbBills) {
            res.json(dbBills);
        });
});




module.exports = router;