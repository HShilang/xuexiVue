<template>
  <div class="school">
    <h1>{{msg}}</h1>
    <h2>
      学生姓名：{{ name }}
      学生年龄:{{myAge}}
      学生性别:{{sex}}
      <button @click="updateAge()">尝试修改年龄</button>
    </h2>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      msg:'努力学习',
      myAge:this.age
    }
  },
  methods:{
    updateAge(){
      this.myAge++
    }
  },
  props:['name','age','sex']
  // props:{
  //   name:String,
  //   age:Number,
  //   sex:String
  // }
  // props:{
  //   name:{
  //     type:String,
  //     required:true,
  //   },
  //   age:{
  //     type:Number,
  //     default:99
  //   },
  //   sex:{
  //     type:String,
  //     required: false
  //   }
  // }
}
</script>

<style scoped>
.school {
  background-color: gray;
}
</style>
