var {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    
    var db = client.db('TodoApp');

    db.collection('Todos').deleteOne({"text" : "Eat lunch"}, (err, result) => {
        console.log(result.result);
    })
    client.close();
})