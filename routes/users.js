const express= require('express');
const router= express.Router();
const usersController= require('../controllers/users_controller');

router.get('/profile', usersController.profile);
router.get('/feed', usersController.feed);

router.get('/sign-up', usersController.signup);

router.post('/create', usersController.create);

router.get('/sign-in', usersController.signin);

router.post('/create-session', usersController.createSession);

router.get('/delete-session', usersController.deleteSession);



module.exports= router;