const express= require("express");
const router= express.Router();
const controller= require('../controllers/home_controller');

console.log("Router Loaded");

router.get('/', controller.home);
router.use('/users', require('./users'));
router.use('/post', require('./posts'));


module.exports= router;