<template>
  <div>
    <h1>{{ a }}</h1>
    <input type="range" v-model="a"> 看一下
    <ul>
      <li v-for="item in arr">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "basic",
  data() {
    return {
      a: 1,
      arr: ['Hanson', 'Jx', 'Galen', 'Lucas']
    }
  }
}
</script>

<style scoped>

</style>