<template>
    <div class="headerarea">
        <p>Muster bus company</p>
        <div class="bookingsection">
            <div class="container">
                <div class="row">
                    <div class="col colhead">From</div>
                    <div class="col colhead">To</div>
                    <div class="col colhead">Date</div>
                    <div class="col colhead">Traveller</div>
                    <div class="col colhead"></div>
                    <div class="w-100"></div>
                    <div class="col"><input v-model="departure" type="text"  class="form-control booking-inputs" placeholder="Departue"  @keyup='capitalize'  /></div>
                    <div class="col"><input v-model="arrival" type="text"  class="form-control booking-inputs" placeholder="Destination" @keyup='capitalize'  /></div>
                    <div class="col"><input v-model="date" type="date" id="1" name="1" class="form-control"></div>
                    <div class="col"><input v-model="traveller" type="number" value="0" min="0" max="50" step="1" class="form-control spinner booking-inputs" /></div>
                    <div class="col"><input v-on:click="set_data(departure,arrival,date,traveller)" type="button" value="Search" class="btn btn-primary" ></div>
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
                trips: '{}',
                date: '',
                departure:'',
                arrival:'',
                traveller:''
            };
        },
        computed: {

        },
        methods: {
            set_data: function (departure, destination, date, traveller) {
                let textInput = document.getElementsByClassName('booking-inputs');
                for (let i=0;i<textInput.length ;i++){
                    if (textInput[i].value == ''){
                        alert('You have to fill all the fields');
                        return;
                    }
                }
                const API_URL = 'http://localhost:3000/trips/departue/' + departure + '/destination/' + destination + '/' + date;
                this.$axios.get(API_URL).then((response) => {
                    this.$store.commit('set_data', response.data)
                    this.$store.commit('set_traveller', traveller)
                    //console.log(API_URL);
                }).catch(error => {
                    console.log(error);
                });
            },
            capitalize() {
                    this.departure = this.departure.toString().charAt(0).toUpperCase() + this.departure.slice(1);
                    this.arrival = this.arrival.toString().charAt(0).toUpperCase() + this.arrival.slice(1)
            }
        }
    }
</script>

<style scoped>

.headerarea {
    background-image: url("../../public/img/jonathan-borba-T5jzpRTVF1U-unsplash.jpg");
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    height: 400px;
    position:relative;
    text-align:center;
}
.headerarea p {
    color:white;
    font-size: 50px;
    text-align: center;
    text-shadow: 5px 10px 8px black;
    position:absolute;
    top:50%;
    left: 35%;
    font-family: 'Bree Serif', serif;
    font-family: 'Prata', serif;
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

.spinner{
    width: 40%;
    margin-left: 3.5em;
}
</style>