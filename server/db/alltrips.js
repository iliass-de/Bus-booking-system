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
        let dateString = date;
        let newDate = new Date(dateString);
        //add a day to the date
        newDate.setDate(newDate.getDate() + 1);
        let y = newDate.getFullYear(),
            m = newDate.getMonth() + 1, // january is month 0 in javascript
            d = newDate.getDate();
        newDate = function(val) { var str = val.toString(); return (str.length < 2) ? "0" + str : str};
        dateString = [y, newDate(m), newDate(d)].join("-");

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
                            $lt:  dateString
                        }
                    }
                ]
            }).toArray();
        });
    },
};

/*
{ startTime: {
                        $gte: '2020-10-01 00:00:00',
                        $lt:  '2020-10-02 00:00:00'
                      }
                    } */