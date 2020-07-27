<template>
  <div class="">
    <h1>Trips</h1>

    <table class="trips-table ">
      <thead>
      <tr>
        <th>Departue</th>
        <th>Arrival</th>
        <th>Price</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr  v-for="trip in  this.$store.state.trips" :key="trip">
        <td> <b>{{ trip.departure }} </b> </td>
        <td> <b> {{ trip.arrival }}</b>  </td>
        <td> <b> {{ trip.price }} € </b></td>
        <td> <button type="button" class="btn btn-dark">Rserve 1 Seat</button></td>
      </tr>

      </tbody>
    </table>
  </div>
</template>

<script>
//http://localhost:3000/trips/departue/Mannheim/destination/Berlin/2020-10-01
export default {
  name: 'main',
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
.trips-table{
  text-align: center;
  border-collapse: collapse;
  width: 80%;
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
