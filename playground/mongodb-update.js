//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} =require('mongodb');



var user = {name: 'Hantz', age : '30'};


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) =>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connect to MongoDB server');

   //  db.collection('Todos').findOneAndUpdate({
   //     _id: new ObjectID('58f4fdda907c90d68731fb54')
   // }, {
   //      $set: {
   //          completed: true
   //      }
   //  },{
   //         returnOriginal: false
   //  }).then((result) =>{
   //      console.log(result)
   // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('58f5076964fcf5dc57599865')
    },{
        $set:{
            name: "Hantzy"
        },
        $inc: {
            age: 1
        }
    },{
        returnOriginal: false
    }).then((result) =>{
        "use strict";
        console.log(result);
    });

});