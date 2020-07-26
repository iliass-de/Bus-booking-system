<template>
  <div class="">
    <h1>Trips</h1>
    <ul>
      <li v-for="trip in trips" :key="trip">
        {{ trip.departure }}
        {{ trip.arrival }}
        {{ trip.price }}

      </li>
    </ul>

    <div class="card">



    </div>



    <button v-on:click="fetch_data('Mannheim','Berlin','2020-10-01')">show-data</button>
  </div>
</template>

<script>
//http://localhost:3000/trips/departue/Mannheim/destination/Berlin/2020-10-01
export default {
  name: 'main',
  components: {

  },
  data: function() {
      return {
          trips: '{}'
      };
  },
  methods: {
      fetch_data: function (departure, destination, date) {
          const API_URL = 'http://localhost:3000/trips/departue/' + departure + '/destination/' + destination + '/' + date;
          this.$axios.get(API_URL).then((response) => {
              this.trips = response.data;
              console.log(response.data[0].arrival);
              console.log(API_URL);
          }).catch(error => {
              console.log(error);
          });
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
</style>
