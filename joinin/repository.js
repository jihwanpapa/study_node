//old method
//var mysql = require('mysql')
//	, DATABASE = 'studydb'
//	, TABLE = 'member'
//	, client = mysql.createClient({
//		user: 'study'
//		, password: 'stydy'
//	});
var mysql = require('mysql');
var mysqlConfig = {
	host:'127.0.0.1'
	, port:'3306'
	, user:'study'
	, password:'study'
	, database:'studydb'
};
var client = mysql.createConnection(mysqlConfig);
var TABLE = 'member';

//old method
//client.query('USE' + DATABASE);


var mysqlUtil = module.exports = {
	insertUser: function(user, res){
		client.query(			
			'insert into '+ TABLE + ' SET name = ? , email = ?'
			, [user.name, user.email]
			, function(error, rows){
				client.query(
					'select * from member where name = ?'
					, [user.name]
					, function(error,rows){
						if (error){
							throw error;
						}
						res.render('join-result', {
							username: rows[0].name
							, useremail: rows[0].email
							, title: 'Express'
							, joinSuccess: true
						});
					}
				);
			}
		);
	}
	, hasNameAndEmail: function(user,res){
		client.query(
			'select * from member where name =  ? or email = ?'
			, [user.name, user.email]
			, function(error, rows){
				if(error){
					throw error;
				}
				
				//console.log(rows);
				if (rows.length>0){
					res.render('join-fail', {
						title: 'Express'
					});
				}else{
					mysqlUtil.insertUser(user,res);
				}
			}
		);
	}
};