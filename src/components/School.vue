<template>
  <div class="school">
    <h2>
      学校姓名：{{ schoolName }}
      学校地址：{{ schoolAddress }}
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
  }
}
</script>

<style scoped>
.school{
  background-color: gray;
}
</style>
