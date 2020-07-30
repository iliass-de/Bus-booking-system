<template>
  <div id="app">
    <navbar />
    <headerarea/>
    <router-view />
    <foot />
  </div>
</template>

<script>
import navbar from './components/navbar.vue'
import headerarea from './components/header.vue'
import foot from './components/footer.vue'



export default {
  name: 'App',
  components: {
    navbar,
    headerarea,
    foot,

  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bree+Serif&family=Prata&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bree+Serif&family=Francois+One&family=Prata&display=swap');

html, body {
  /*font-family: 'Bree Serif', serif;*/
  font-family: 'Francois One', sans-serif;
  /*font-family: 'Prata', serif;*/
}

body{
  height: auto;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-family: 'Francois One', sans-serif;
}

</style>
