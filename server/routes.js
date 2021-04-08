module.exports = function(app){
	// Our model controllers (rather than routes)
	const users = require('./routes/users');
	const search = require('./routes/search');
	const mailingList = require('./routes/mailinglist')


	app.use('/apis/users', users);
	app.use('/apis/contacts', search)
	app.use('/apis/mailinglist', mailingList)
	//other routes..
}