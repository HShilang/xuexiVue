<template>
  <div id="root">
    <student name="李四" sex="女" :age="18"/>
    <student name="王五" />
  </div>
</template>
<script>
//引入school组件
import student from "@/components/Student";

export default {
  name: "App",
  components: {
    student
  },
  methods:{}
}
</script>

<style scoped>

</style>
