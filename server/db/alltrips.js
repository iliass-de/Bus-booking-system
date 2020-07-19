const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";
const client = new MongoClient(url, {useUnifiedTopology: true});

module.exports = {

    // get all Trips
    getAllItems: function() {
        return client.connect().then((client)=>{
            let db = client.db('data')
            return db.collection('trip').find().toArray();
        });
    },
};