<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Welcome msg="Projects Management System"/>
  </div>
</template>

<script>
import Welcome from './components/Welcome.vue'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default {
  name: 'app',
  components: {
    Welcome
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
