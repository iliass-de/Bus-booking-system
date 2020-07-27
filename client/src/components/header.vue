<template>
    <div class="headerarea">
        <p>Muster Company</p>
        <div class="bookingsection">
            <div class="container">
                <div class="row">
                    <div class="col colhead">From</div>
                    <div class="col colhead">To</div>
                    <div class="col colhead">Date</div>
                    <div class="col colhead"></div>
                    <div class="w-100"></div>
                    <div class="col"><input v-model="departure" type="text"  class="form-control" placeholder="Departue"/></div>
                    <div class="col"><input v-model="arrival" type="text"  class="form-control" placeholder="Destination"/></div>
                    <div class="col"><input type="date" id="1" name="1" class="form-control"></div>
                    <div class="col"><input v-on:click="set_data(departure,arrival,'2020-10-01')" type="button" value="Search" class="btn btn-primary" ></div>
                </div>
            </div>
        </div>
        <div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "header",
        data: function() {
            return {
                trips: '{}'
            };
        },
        computed: {

        },
        methods: {
            set_data: function (departure, destination, date) {
                const API_URL = 'http://localhost:3000/trips/departue/' + departure + '/destination/' + destination + '/' + date;
                this.$axios.get(API_URL).then((response) => {
                    this.trips = response.data;
                    this.$store.commit('set_data', response.data)
                    console.log(this.$store.state.trips);
                    console.log(API_URL);
                }).catch(error => {
                    console.log(error);
                });
            }
        }
    }
</script>

<style scoped>

    .headerarea {
        background-image: url("../../public/img/jonathan-borba-T5jzpRTVF1U-unsplash.jpg");
        background-attachment: fixed;
        background-position: center;
        filter: opacity(opacity: 50%);
        background-repeat: no-repeat;
        height: 400px;
        position:relative;
        text-align:center;
    }
    .headerarea p {
        color:whitesmoke;
        font-size: 50px;
        text-align: center;
        text-shadow: 5px 10px 8px black;
        position:absolute;
        top:50%;
        left: 35%;
    }

.bookingsection{
    padding: 1em;
    border-radius: 25px;
    background-color : rgba(255, 255, 255, 0.76);
    height : auto;
    width : 80%;
    border : 1px black solid;
    display: block;
    margin: 5em auto;
    text-align: center;
    position:absolute;
    top:50%;
    left: 10%;
}
.colhead{
    font-weight: bold;
    font-size: 20px;
}

.btn-primary{
    width: 70%;
}
</style>