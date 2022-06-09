<template>
  <div id="root">
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showDom">点我输出上方的DOM</button>
    <school ref="sch"></school>
  </div>
</template>

<script>
//引入school组件
import school from "@/components/School";

export default {
  name: "App",
  data(){
    return{
      msg:'努力学习'
    }
  },
  components: {
    school
  },
  methods:{
    showDom(){
      console.log(this.$refs.sch)
    }
  }
}
</script>

<style scoped>

</style>
