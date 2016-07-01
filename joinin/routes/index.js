
/*
 * GET home page.
 */
 var repo = require('../repository');

exports.index = function(req, res){
  res.render('index', { title: 'Express' })
};

exports.form = function(req,res){
	res.render('join-form',{title:'Express'});
};

exports.join = function(req,res){
	repo.hasNameAndEmail(req.body,res);
	//repo.insertUser(req.body,res);
	//res.render('join-result',{
	//	  username: req.body.name
	//	, useremail: req.body.email
	//	, title: 'Express'
	//});
};