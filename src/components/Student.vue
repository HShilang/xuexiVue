<template>
  <div class="student">
    <h1>{{ msg }}</h1>
    <h2 class="test">
      学生姓名：{{ name }}
      学生性别:{{ sex }}
    </h2>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      msg:'123',
      name: '努力学习',
      sex: '男'
    }
  },
}
</script>

<style scoped>
.student {
  background-color: gray;
}
</style>
