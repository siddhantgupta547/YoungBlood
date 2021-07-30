const passport= require('passport');
const LocalStrategy= require('passport-local').Strategy;

const User= require('../models/user');


// Authentication using passport
passport.use(new LocalStrategy({
    usernameField : 'email'
    },
    //find a user and establish identity
    function(email, password, done){
        User.findOne({email:email}, function(err, user){
            if(err){
                console.log("error in finding user --> Passport");
                return done(err);
            }
            else if(!user || user.password!= password){
                console.log('invalid username/password');
                return done(null, false);
            }
            else{
                return done(null, user);
            }
        });
    }
));

//serializing the user to decide which key to put in the cookies
passport.serializeUser(function(user, done){
    done(null, user.id);
});

//deserializing the user from key in the cookies
passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
        if(err){
            console.log("error in finding user --> Passport");
            return done(err);
        }
        else{
            return done(null, user);
        }
    });
});

passport.checkAuthentication= function(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    else{
        return res.redirect('/users/sign-in');
    }
}

passport.setAuthenticatedUser= function(req, res, next){
    if(req.isAuthenticated()){
        res.locals.user= req.user;
    }
    return next();
}

module.exports= passport;