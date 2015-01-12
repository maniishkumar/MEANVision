var passport = require('passport');

module.exports = function(app) {
	app.get('/partials/*', function(req, res) {
		console.log("We are here");
    	res.render('../../public/app/' + req.params[0]);
	});

	app.post('/login', function(req, res, next){
		console.log(req);
		var auth = passport.authenticate('local', function(err, user){
console.log("User is: ");
			//console.log(user);
			if(err) { return next(err);}
			if(!user) {res.send({success:false});}

			req.login(user, function(err){
				if(err){ return next(err);}
				res.send({success:true, user:user});
			});
		});
		auth(req, res, next);
	});

	app.get('*', function (req, res) {
		console.log("We are at index");
		res.render('index');
	})
}