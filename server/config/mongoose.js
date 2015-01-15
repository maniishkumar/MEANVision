var mongoose = require('mongoose'),
	crypto = require('crypto');

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
		username: String,
		salt: String,
		hashed_pwd: String
	});

	//Method to validate the user using password
	userSchema.methods = {
		authenticate: function(passwordToMatch) {
			return hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
		}
	}

	var User = mongoose.model('User', userSchema);
//TO-DO: Though we are implementing
	User.find({}).exec(function(err, collection){
		if(collection.length === 0) {
			var salt, hash;
			salt = createSalt();
			hash = hashPwd(salt, 'manish');
			User.create({firstName:'Manish', lastName:'Kumar', username:'mkumar', salt:salt, hashed_pwd:hash});
			salt = createSalt();
			hash = hashPwd(salt, 'sunny');
			User.create({firstName:'Sunny', lastName:'Singh', username:'ssingh', salt:salt, hashed_pwd:hash});
			salt = createSalt();
			hash = hashPwd(salt, 'megha');
			User.create({firstName:'Megha', lastName:'Goyal', username:'mgoyal', salt:salt, hashed_pwd:hash});
		}
	});
}

function createSalt() {
	return crypto.randomBytes(128).toString('base64');
};

function hashPwd(salt, pwd) {
	var hmac = crypto.createHmac('sha1', salt);
	return hmac.update(pwd).digest('hex');
}