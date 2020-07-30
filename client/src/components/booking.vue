<template>
    <div >
        <p class="booking_titel"> Your booking from {{this.$store.state.booking.data.departure}} to {{this.$store.state.booking.data.arrival}}</p>
        <p class="booking_underTitel"><i class="fa fa-calendar" aria-hidden="true"></i> {{this.$store.state.booking.data.trip_date}}, {{this.$store.state.booking.data.trip_startTime}} - {{this.$store.state.booking.data.trip_endTime}} </p>
        <p class="booking_underTitel"><i class="fa fa-male" aria-hidden="true"></i> Traveller: {{this.$store.state.booking.data.trips_freeplace}}</p>
        <form class="booking_form" action="/" method ="GET">
            <div class="form-group row">
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="text" placeholder="First name" required autocomplete="off">
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="text2" placeholder="Last name" required autocomplete="off">
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm-10">
                    <input type="email" class="form-control" id="text3" placeholder="Email" required autocomplete="off">
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="text4" placeholder="Phone No."  autocomplete="off">
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm-10">
                <select class="form-control" id="" >
                    <option>Credit card</option>
                    <option>Paypal</option>
                    <option>Transfer</option>
                </select>
                </div>
            </div>

            <div class="form-group row">
                <div class="col-sm-10">
                    <button type="submit" class="btn btn-primary"><i class="button_book">Book now:</i><i class="button_price"> total {{this.$store.state.booking.data.trip_price}}€ </i> </button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "booking"
    }
</script>

<style scoped>

.booking_titel{
    font-weight: bold;
    font-size: 30px;
    margin-top: 1em;
}
.booking_underTitel{
    font-weight: bold;
}
.booking_form{
    width: 60%;
    text-align: center;
    margin-left: 24em;
}

.booking_form button{
    margin-bottom: 5em;
}

.button_price{
    font-size: 15px;
}

.button_book{
    font-size: 20px;
}
</style>