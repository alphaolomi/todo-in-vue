<template>
  <div id="app">
    <nav>
      <router-link to="/">Index</router-link>
      <router-link to="/home">Home</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/register">Register</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/project/1">Project</router-link>
      <router-link to="/redirect">Redirect</router-link>
      <router-link to="/projects/create">Add</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default {
  name: "app"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
