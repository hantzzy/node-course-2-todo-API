//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} =require('mongodb');



var user = {name: 'Hantz', age : '30'};


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) =>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
        console.log('Connect to MongoDB server');
    // db.collection('Todos').insertOne({
    //     text: 'something to do',
    //     completed : 'false'
    // }, (err, result)=> {
    //
    //     if(err){
    //         return console.log('enable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2)); //ops for the attribute that was insserted
    //
    // });

        db.collection('Users').insertOne({
            name: 'Hantzy',
            age: 30,
            location: 'Brockton Ma'
        }, (err, res) =>{

            if(err){
                return console.log('unable to insert user', err);
            }
                console.log(res.ops[0]._id.getTimestamp());
        });

    db.close();
});