<template>
  <div class="school">
    <h2>
      学校姓名：{{ schoolName }}<br>
      学校地址：{{ schoolAddress }}
      <button @click="sendSchoolName">把学校名给app</button>

    </h2>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      schoolName: '大连东软',
      schoolAddress: '大连'
    }
  },
  props:['getSchoolName'],
  methods:{
    sendSchoolName(){
      this.getSchoolName(this.schoolName)
    }
  }
}
</script>

<style scoped>
.school {
  background-color: gray;
  padding: 5px;
}
</style>
