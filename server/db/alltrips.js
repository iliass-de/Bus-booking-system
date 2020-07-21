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
    // get custom trips
    getFromToTrip: function(from, to, date) {
        let newDate = date.split('');
        // increment days with one
        newDate[9] = parseInt(newDate[9]) +1
        //convert newDate to string
        let stringDate = newDate.join('');
        return client.connect().then((client)=>{
            let db = client.db('data')
            return db.collection('trip').find({
                $and: [
                    {
                        departure: from
                    },
                    {
                        arrival: to
                    },
                    { startTime: {
                            $gte: date,
                            $lt:  stringDate
                      }
                    }
                ]
            }).toArray();
        });
    },
};
