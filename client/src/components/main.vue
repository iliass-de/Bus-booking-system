<template>
  <div class="mainsec" v-if="this.$store.state.trips!=null">
    <h1>{{trips[0].departure}} → {{trips[0].arrival}}</h1>
    <h5> {{ getDate(trips[0].startTime) }} </h5>

    <table class="trips-table ">
      <thead>
      <tr>
        <th>Departue</th>
        <th>Arrival</th>
        <th>Time</th>
        <th>Price</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr  v-for="trip in trips" :key="trip">
        <td> <b>{{ trip.departure }} </b> </td>
        <td> <b> {{ trip.arrival }}</b>  </td>
        <td> <b> {{ showTime(trip.startTime) }} - {{ showTime(trip.endTime) }}</b></td>
        <td> <b> {{ trip.price }} € </b></td>
        <td> <button type="button" class="btn btn-dark">Reserve {{trip.freePlace}} Seat</button></td>
      </tr>


      </tbody>
    </table>
  </div>
</template>

<script>
//http://localhost:3000/trips/departue/Mannheim/destination/Berlin/2020-10-01
export default {
  name: 'main',
  computed: {
      trips(){
          let travellerInput = this.$store.state.traveller;
          let trips = this.$store.state.trips;
          for (let i=0;i<trips.length;i++){
              if(travellerInput < trips[i].freePlace){
                  trips[i].freePlace = travellerInput
              }
              console.log('number of  places '+trips[i].freePlace);
          }
          return this.$store.state.trips
      }
  },
  methods: {
      showTime(date){
          date = new Date(date);
          return date.toLocaleTimeString('en-US', { hour12: false,
              hour: "numeric",
              minute: "numeric"});
      },
      getDate(date){
          date = new Date(date);
          return date.toLocaleDateString('en-us', {weekday:'long', month:'long',day:'numeric'})
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.mainsec{
  text-align: center;
  margin-top: 2em;
}
.trips-table{
  margin: 2em;
  text-align: center;
  border-collapse: collapse;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}
.trips-table th{
  font-size: 21px;
}
.trips-table th, td{
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}
.trips-table td {
  height: 100px;
  left: 0;
  bottom: 0;
}
</style>
