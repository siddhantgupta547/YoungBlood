module.exports.profile= function(req, res){
    res.render('users_profile');
}

module.exports.feed= function(req, res){
    res.end("<h3>Users/Feed</h3>");
}