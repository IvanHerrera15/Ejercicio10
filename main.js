var mongoose= require('mongoose');
var schema= require('./schema');

mongoose.connect('mongodb://localhost:27017/ejercicio9');

var Obj= mongoose.model('Collection9', schema, 'collection9');

var obj= new Obj({
	title:'Blog1',
	author:'Bruce Lee',
	body:'punch!, hit!, K.O!',
	comments:[{body:':D', date:'02/28/2019 07:00'},{body:'D:', date:'02/27/2019 07:20'}],
	meta:{votes:1, favs:2}
});

/*obj.save(error=>{
	if(error){
		console.log(error);
		process.exit(1);
	}
	console.log("Saved!!");
	process.exit(0);
});*/

/*Obj.find({author:'Bruce Lee'}, (err, docs)=>{
	if(err){
		console.log(err);
	}
	console.log(docs[0].comments);	
});*/

/*Obj.update({title:"Blog1"}, {$set:{body:'Fatality! x.x'}}, (err, docs)=>{
	if(err){
		console.log(err);
	}
	console.log(docs);
})*/

Obj.findByIdAndRemove({_id:'5c77ee4bbbe9b8129ac3f55d'}, (err, docs)=>{
	if(err){
		console.log(err);
	}
	console.log(docs);
})
