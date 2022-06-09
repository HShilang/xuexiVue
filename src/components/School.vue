<template>
  <div class="school">
    <h1>{{ msg }}</h1>
    <h2>
      学校名称：{{ name }}
      学校地址:{{ address }}
    </h2>
  </div>
</template>

<script>
//引入混合

export default {
  name: "School",
  data() {
    return {
      msg:'哈哈哈',
      name: '大连东软',
      address: '大连'
    }
  },
}
</script>

<style scoped>
.school {
  background-color: gray;
}
</style>
