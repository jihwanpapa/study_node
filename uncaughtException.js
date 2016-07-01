process.on('uncaughtException',function(err){
	console.log('exception'+ err);
});

setTimeout(function(){
	console.log('this code is excutable');
},50000);

nonExistentFunction();

console.log('this code is not excutable');