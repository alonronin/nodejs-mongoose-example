var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

//Connect to mongodb server
mongoose.connect('http://localhost/test');

//Creating Mongoose Schema
var TestSchema = new Schema({
    element: String,
    date: {type: Date, 'default': new Date}
});

//Creating Model With Collection Name singles
var Test = mongoose.model("Single", TestSchema);

//Async Insert Function
var Insert = function(elem, callback){

    var test = new Test(),
        start_time = new Date();

    test.element = elem;

    test.save(function(err, doc){
        if(!err){
            callback(doc, (new Date() - start_time) / 1000);
        }
    });
};

//Deleting all records for collection
Test.remove(function(){
    //Number of Records to Insert
    var records = 100,
        start_time = new Date();

    console.log("Start inserting %d records to db.", left);

    for(var i = 0; i < left; i++){
        Insert(i, function(elem, time){
            console.log("returning elemen %s in %d seconds.", elem, time);

            if(--records === 0){
                Test.count(function(err, count){
                    console.log("Counting tests collection has %d records!", count);
                    console.log("Finished in %d ms!", new Date() - start_time);
                    mongoose.disconnect();
                });

            }
        });
    }
});




