var {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    
    var db = client.db('TodoApp');

    db.collection('Todos').findOneAndUpdate({
    _id : new Object('5c475022c82a0b3f60ee2dc0')}
    ,{
        $set: {
            completed:true
        }
    },
    {
        returnOriginal:false
    }, (err, result) => {
        console.log(result);
    });

    client.close();
})