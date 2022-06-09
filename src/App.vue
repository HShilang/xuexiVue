<template>
  <div id="root">
    <student/>
    <tr></tr>
    <school/>
  </div>
</template>
<script>
//引入school组件
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Item from "@/components/Item";
import List from "@/components/List";

export default {
  name: "App",
  components: {
    Footer,Header,Item,List
  },
  methods:{}
}
</script>

<style>
.title{
  color: #bbffaa;
}
</style>
