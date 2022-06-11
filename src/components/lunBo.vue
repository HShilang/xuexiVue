<template>
  <div class="root">
    <img v-for="i in 5" :src="'../../assets/images/'+(i-1)+'.jpg'" :class="{current:nowIdx===i-1 }">
    <div class="circles">
      <p class="current"></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "lunBo",
  data() {
    return {
      nowIdx: 0,
    }
  }
}
</script>

<style scoped>
.root {
  width: 650px;
  height: 360px;
  border: 1px black solid;
  position: relative;
}

.root img {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: all .6s;
}

.root img.current {
  opacity: 1;
}

.root .circles {
  position: absolute;
  width: 200px;
  height: 20px;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
}

.root .circles p {
  width: 20px;
  height: 20px;
  background-color: rgba(187, 255, 170, 0.4);
  border-radius: 50%;
}

.root .circles p.current {
  background-color: rgba(255, 0, 0, 0.25);
}
</style>