const express= require('express');
const router= express.Router();
const usersController= require('../controllers/users_controller');
const passport= require('passport');

router.get('/profile', passport.checkAuthentication, usersController.profile);
router.get('/feed', usersController.feed);

router.get('/sign-up', usersController.signup);

router.post('/create', usersController.create);

router.get('/sign-in', usersController.signin);

router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect: '/users/sign-in'}
),usersController.createSession);


module.exports= router;