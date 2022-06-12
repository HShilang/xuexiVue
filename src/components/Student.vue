<template>
  <div class="student">
    <h2>
      学生姓名：{{ studentName }}<br>
      学生年龄：{{ studentAge }}
      <button @click="sendStudentName">点我获得学生姓名</button>
    </h2>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      studentName: 'Hanson',
      studentAge: 24
    }
  },
  methods:{
    sendStudentName(){
      //测试Student实例身上的时间
      this.$emit('getStudentName',this.studentName)
    }
  }
}
</script>

<style scoped>
.student {
  background-color: orange;
  padding: 5px;
  margin-top: 20px;

}
</style>
