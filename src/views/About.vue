<template>
<div class="container section">
<h1>Queremos que Madrid sea accesible.</h1>
<h3>Madrid es una ciudad con grandes atractivos turísticos de los que disfrutar. Arte, cultura, ocio, deporte, gastronomía, compras, naturaleza… Las propuestas son infinitas. Y la ciudad está tratando de mejorar su oferta y ajustarla para que sea accesible para todXs.</h3>

<h3>El objetivo de esta página es ofrecer un recurso con el que  las personas con discapacidad puedan informarse en profundidad sobre la accesibilidad en instalaciones municipales.</h3>
</div>
  
</template>

<script>
export default {
  name:'About'

}
</script>


<style lang="scss" scoped>
.container{
  max-width: 80%;
  margin: 0 auto;
  margin-bottom: 100px;
    h1{
      margin-top: 40px;
      margin-bottom: 50px;
      font-weight: bold;
    }
    h3{
      text-align: left;
      text-indent: 50px; 
      margin-bottom: 50px;
    }
    
  
}
.section{
  min-height: 80vh;
  overflow: auto;
}

</style>
