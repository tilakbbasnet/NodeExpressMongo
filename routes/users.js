const express =  require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', async(req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.json({message:error})
    }
});

router.get('/newUser', (req, res) => {
    res.send('Hey new user');
});

router.post('/', async(req, res) => {
    const user = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        address: req.body.address
    });
    try{
        console.log('saving');
    const savedUser = await user.save()
    res.json(savedUser);
    }catch(err){
        console.log('err');
        res.status(400);
        res.json({message: err});
    }
});

module.exports = router;