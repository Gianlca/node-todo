// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDb server');
    }
    console.log('Connected to MongoDB server');
    
    const db = client.db('TodoApp');

    // db.collection('Users').insertOne({
    //     name:'Gianluca',
    //     age:90,
    //     location:'Palermo'
    // }, (err, results) => {
    //     if(err) {
    //         return console.log('Unable to insert', err)
    //     }

    //     console.log(JSON.stringify(results.ops))
    // })

    db.collection('Todos').find({_id:new ObjectID('5c47500632d9e63e24331107')}).toArray().then((docs) => {
        console.log(docs)
    }, (err) => {
        console.log('Unable to fecth')
    });

    client.close();
});