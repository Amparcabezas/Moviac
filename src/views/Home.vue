<template>
  <div>
    <p>Explora Madrid Accesible</p>
    <span class="overlay"></span>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>
<style scoped>
div {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background: url("https://i2.wp.com/www.tufts-skidmore.es/wp-content/uploads/2016/12/panoramica-Madrid.jpeg?w=800&ssl=1");
  background-size: cover;  
  width: 100%;
  height: 500px;
  font-size: 3.75rem;
  font-family: sans-serif;
}
.overlay{
  width: 100%;
  height: 500px;
  position: absolute;
  top:0;
  left: 0;
  background-color:rgba(0, 0, 0, 0.541);
}

p {
  color: white;
  opacity: 1;
  z-index: 999;
}

</style>
