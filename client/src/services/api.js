exports.fetch_trips = function(departure, destination, date) {
    const API_URL = 'http://localhost:3000/trips/departue/+'+departure+'/destination/'+destination+'/'+date;
    this.$http.get(API_URL)
        .then((result) => {
            this.users = result.data

        })

}