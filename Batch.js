var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

//Connect to mongodb server
mongoose.connect('http://localhost/test');

//Creating Mongoose Schema
var TestSchema = new Schema({
    element: String,
    date: {type: Date, 'default': new Date}
});

//Creating Model With Collection Name batches
var Test = mongoose.model("Batch", TestSchema);

//Deleting all records for collection
Test.remove(function(){

    //Number of Records to Insert
    var records = 100000,
        start_time = new Date(),
        docs = [];

    console.log("Start inserting %d records to db.", left);

    //Creating Docs
    for(var i = 0; i < left; i++){
        docs.push({element: i, date: new Date});
    }

    //Accessing Native Driver From Model
    Test.collection.insert(docs, function(err){
        if(!err){
            Test.count(function(err, count){
                console.log("Counting tests collection has %d records!", count);
                console.log("Finished in %d ms!", new Date() - start_time);
                mongoose.disconnect();
            });
        }
    })

});