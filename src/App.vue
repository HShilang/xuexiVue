<template>
  <div id="root">
    <student/>
    <tr></tr>
    <school/>
  </div>
</template>
<script>
//引入school组件
import student from "@/components/Student";
import school from "@/components/School";

export default {
  name: "App",
  components: {
    student,school
  },
  methods:{}
}
</script>

<style scoped>

</style>
