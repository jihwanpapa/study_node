var rest = require('restler')
	, fs = require('fs')
	, schedule = require('node-schedule');

var Tweet = {
	sinceId: '1'
	, getTweets : function(search,callback){
		search = encodeURIComponent(search);

		rest.get(
			'http://www.icheon.go.kr/site/ic/apiListJson.do?board=41' + 
				'&page=1'
				//'&src=tyah' + 
				//'&result_type=recent' +
				//'&rpp=100' + 
				//'&since_id=' + this.sinceId
			).on('complete', function(data){
				//var text = "";
				//data.results.forEach(function(elem, index, array){
				//	text += elem.from_user + ':' +
				//		elem.text + ' at' + elem.created_at + '\n';
				//});

				//var text = data.results.forEach(text += data.tiiitle);

				fs.open('./tweets1.txt','a', 0666, function(err,fd){
					if(err) {throw err;}
					var buffer = new Buffer(data);
					fs.write(fd,buffer,0,buffer.length,null,function(err){
						fs.close(fd,function(){});
					});
				});
				//console.log(data);
			});
	}
}

var rule = new schedule.RecurrenceRule();
rule.hour = new schedule.Range(0,23);
rule.minute = [0,10,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,40,50];

var j= schedule.scheduleJob(rule, function(){
	Tweet.getTweets('#nodejs');
	console.log('Backup is completed at ' + new Date());
})
