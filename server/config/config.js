var path = require('path');

var rootPath = path.normalize(__dirname + '/../../');
module.exports = {
	development: {
		rootPath: rootPath,
		db: 'mongodb://localhost/MEANVision',
		port: process.env.PORT || 3003
	},
	production: {
		rootPath: rootPath,
		db: 'mongodb://maniishkumar:meanvision@ds031651.mongolab.com:31651/meanvision',
		port: process.env.PORT || 80
	}
}