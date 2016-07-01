var Mongolian = require('mongolian')
	, server = new Mongolian
	, db = server.db('node_test')
	, user = db.collection('members');

var mongoUtil = module.exports = {
	insertUser: function(user, res){
		user.insert({
			name: user.name
			, email: user.email
		}, function(err,result){
			if(err){
				throw err;
			}
			res.render('join-result', {
				username: result.name
				, useremail: result.email
				, title: 'Express'
			});
		});
	}
	, hasNameAndEmail: function(user, res){
		users.findOne({'$or': [{'name':user.name}
			, {'email':user.email}]}, function(err,result){
				if(err){
					throw err;
				}
				if(result){
					res.render('join-fail', {
						title: 'Express'
					});
				} else {
					mongoUtil.insertUser(user, res);
				}
			}
		);
	}
};	