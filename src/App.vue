<template>
  <div id="root">
    <student/>
    <tr></tr>
    <school/>
  </div>
</template>
<script>
//引入school组件
import school from "@/components/Schools";
import student from "@/components/Student";

export default {
  name: "App",
  components: {
    student,school
  },
  methods:{}
}
</script>

<style>
.title{
  color: #bbffaa;
}
</style>
