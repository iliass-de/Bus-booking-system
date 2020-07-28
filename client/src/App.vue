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
import home from './components/main.vue'
import foot from './components/footer.vue'


export default {
  name: 'App',
  components: {
    navbar,
    headerarea,
    home,
    foot,

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body{
  height: 1000px;
}
</style>
