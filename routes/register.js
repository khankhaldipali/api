var express = require('express');
var router = express.Router();
var login = require('../models/loginSchema.js');
const bcrypt = require('bcrypt');

router.post('/be', async function (req, res, next) {
    const password = (req.body.password);
    const cpassword = (req.body.confirm_password);

    if (password != cpassword) {
        res.json({
            status: "password doesn't match !........"
        })
    }
    var bpass = await bcrypt.hash(req.body.password, 10);
    console.log(bpass);
    const obj = {
        name: req.body.name,
        email: req.body.email,
        password: bpass
    }
    const data = await login.create(obj);
    res.json({
        data
    })
})
// -----------------login---------------
router.post('/b_login', async function (req, res, next) {
    var data = await login.find({ email: req.body.email })
    var [data] = data;
        var result = await bcrypt.compare(req.body.password, data.password);
       
        res.status(201).json({
            status:"Success",
            email:data.email,
            password:req.body.password,
            login:result

        })
})

module.exports = router;
