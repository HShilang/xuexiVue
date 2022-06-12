<template>
  <div id="root">
    <h1>{{ msg }}</h1>
    <school :getSchoolName="getSchoolName"></school>
<!--        <student v-on:test="getStudentName"></student>-->
    <student ref="student"></student>
  </div>
</template>

<script>
//引入school组件
import school from "@/components/School";
import student from "@/components/Student";

export default {
  components: {
    school, student
  },
  name: "App",
  data() {
    return {
      msg: '努力学习'
    }
  },

  methods: {
    getSchoolName(name) {
      console.log('收到了学校名称', name)
    },
    getStudentName(name,...param) {
      console.log('收到了学生名称', name,param)
    }
  },
  mounted() {
      this.$refs.student.$on('getStudentName', this.getStudentName)
  },
}
</script>

<style scoped>
#root {
  background-color: #bbffaa;
}
</style>
