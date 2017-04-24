//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} =require('mongodb');



var user = {name: 'Hantz', age : '30'};


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) =>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    // delete many
    // db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) =>{
    //     "use strict";
    //     console.log(result);
    // });

    //delete one document

    // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) =>{
    //     "use strict";
    //     console.log(result);
    // });


    // find one and delete

    // db.collection('Todos').findOneAndDelete({completed: 'false'}).then((result)=>{
    //     "use strict";
    //     console.log(result);
    // });

    // delete  group user by name
    // db.collection('Users').deleteMany({name: 'Hantz'}).then((result) =>{
    //     "use strict";
    //     console.log(result);
    // });

    // delete  many user by ID
    // db.collection('Users').deleteOne({
    //     _id: new ObjectID('58f5071e5661d1dc2729a039')}).then((result) =>{
    //     "use strict";
    //     console.log(result);
    // });

    // find one and delete
    db.collection('Users').findOneAndDelete({name: 'Hantzy'}).then((result) =>{
        "use strict";
        console.log(result);
    });


    console.log('Connect to MongoDB server');

});