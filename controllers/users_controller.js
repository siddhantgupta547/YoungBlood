const user= require('../models/user');

module.exports.profile= function(req, res){
    res.render('users_profile');
}

module.exports.feed= function(req, res){
    res.end("<h3>Users/Feed</h3>");
}

module.exports.signup= function(req,res){
    return res.render('users_sign_up');
}

module.exports.signin= function(req,res){
    res.render('users_sign_in');
}

module.exports.create= function(req, res){
    if(req.body.password !== req.body.confirm_password){
        res.redirect('back');
    }
    if(user.findOne({email: req.body.email}, function(err, User){
        if(err){
            console.log("error in creating user, email");
            return;
        }
        else if(User){
            return res.redirect('/users/sign-in');
        }
        else{
            user.create(req.body, function(err){
                if(err){
                    console.log("error in creating user, create");
                    return res.redirect('back');
                }
                else{
                    return res.redirect('/users/sign-in');
                }
            })
        }
    }));
}

// module.exports.createSession= function(req, res){

// }