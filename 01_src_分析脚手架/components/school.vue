<template>
  <div class="demo">
    <!--  组件的结构-->
    学校姓名:{{ name }}
    学校地址:{{ address }}
    <button @click="showName()">点我显示学校名称</button>
  </div>
</template>
<script>
//组件交互相关的代码(数据，方法等等)
export default ({
  data() {
    return {
      name: '大连东软',
      address: '软件园'
    }
  },
  methods: {
    showName() {
      alert(this.name)
    }
  },
})
</script>


<style>
/*组件的样式*/
.demo {
  background-color: #bbffaa;
}
</style>
