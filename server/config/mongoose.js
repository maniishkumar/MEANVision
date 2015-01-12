var mongoose = require('mongoose');

module.exports = function(config) {
	mongoose.connect(config.db);
	//mongoose.connect('mongodb://localhost/MEANVision');

	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error.......'));
	//open the database for once
	db.once('open', function callback(){
		console.log('MEANVision db opened');
	});

	var userSchema = mongoose.Schema({
		firstName: String,
		lastName: String,
		userName: String
	});

	var User = mongoose.model('User', userSchema);

	User.find({}).exec(function(err, collection){
		if(collection.length === 0) {
			User.create({firstName:'Manish', lastName:'Kumar', userName:'mkumar'});
			User.create({firstName:'Sunny', lastName:'Singh', userName:'ssingh'});
			User.create({firstName:'Megha', lastName:'Goyal', userName:'mgoyal'});
		}
	});
}