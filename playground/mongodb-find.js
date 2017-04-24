//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} =require('mongodb');



var user = {name: 'Hantz', age : '30'};


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) =>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    //     console.log('Connect to MongoDB server');
    // db.collection('Todos').find({
    //     _id: new ObjectID('58f4fdcb97232ed67f1653fa')
    // }).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    //
    // },(err) =>{
    //      console.log('Unable to fetch Todos', err);
    // });


    console.log('Connect to MongoDB server');
    db.collection('Todos').find({
        _id: new ObjectID('58f4fdcb97232ed67f1653fa')
    }).count().then((count)=>{
        console.log(`Todos ${count}`);


    },(err) =>{
        console.log('Unable to fetch Todos', err);
    });

    //db.close();

    console.log('Connect to MongoDB server');
    db.collection('Todos').find({
        _id: new ObjectID('58f4fdcb97232ed67f1653fa')
    }).toArray().then((docs)=>{
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));

    },(err) =>{
        console.log('Unable to fetch Todos', err);
    });

    console.log('Connect to MongoDB server');
    db.collection('Users').find({
       name: 'Hantz'
    }).toArray().then((docs)=>{
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));

    },(err) =>{
        console.log('Unable to fetch Todos', err);
    });


});