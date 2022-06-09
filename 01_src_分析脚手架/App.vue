<template>
  <div id="app">
    <img alt="Vue logo" src="assetsogo.png">
    <school></school>
  </div>
</template>

<script>
import school from "./components/school";

export default {
  name: 'App',
  components: {
    school
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
</style>
