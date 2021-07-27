module.exports.profile= function(req, res){
    res.render('users_profile');
}

module.exports.feed= function(req, res){
    res.end("<h3>Users/Feed</h3>");
}

module.exports.signup= function(req,res){
    res.render('Users_sign_up');
}

module.exports.signin= function(req,res){
    res.render('users_sign_in');
}

// module.exports.create= function(req, res){

// }

// module.exports.createSession= function(req, res){

// }