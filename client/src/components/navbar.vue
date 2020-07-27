<template>
    <div class="navigation">
    <nav class="navbar navbar-expand-lg  navbar-dark bg-primary">
        <a class="navbar-brand" href="#">My Ticket</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Booking </a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="#">Destinations</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="#">Help</a>
                </li>
            </ul>
        </div>
    </nav>
    </div>
</template>

<script>
    export default {
        name: "navbar"
    }
</script>

<style scoped>

.navigation {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
}
</style>