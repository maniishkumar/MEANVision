var passport = require('passport'),
    mongoose = require('mongoose'),
    LocalStrategy = require('passport-local').Strategy,
    User = mongoose.model('User');

module.exports = function() {
    //Validate user using passport local strategy
    passport.use(new LocalStrategy(
        function(username, password, done){
            User.findOne({ username: username }, function(err, user) {
                if (err) { return done(err); }
                if (user && user.authenticate(password)) {
                    return done(null, user);
                } else {
                    return done(null, false, { message: 'Incorrect username.' });
                }
            });
        }
    ));

    //Passport serialize user function
    passport.serializeUser(function(user, done){
        if(user) {
            console.log('Serialize User');
            done(null, user._id);
        }
    });

    //Passport deserialize user function
    passport.deserializeUser(function(id, done){
        User.findOne({_id:id}).exec(function(err, user){
            console.log("deserializeUser");
            //console.log(err);
            if(user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        });
    });
}