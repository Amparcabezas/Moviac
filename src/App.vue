<template>
<div>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <img class="icono" src="silla-de-ruedas.svg">
    <a class="navbar-brand" href="#"><b>MOVIAC</b> </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/instalacionesOficiales" class="nav-link">Instalaciones oficiales</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/instalacionesNoOficiales" class="nav-link">Instalaciones no oficiales</router-link>
        </li>
               
      </ul>
      
    </div>
  </div>
</nav>
<router-view/>
<footer class="footer bg-dark text-white text-center text-lg-start">  
<!--   <div class="container p-4 pb-0">
    <form action="">      
      <div class="row">        
        <div class="col-auto mb-4 mb-md-0">
          <p class="pt-2"><strong>Suscríbete a nuestra Newsletter</strong></p>
        </div>             
        <div class="col-md-5 col-12 mb-4 mb-md-0">
          
          <div class="form-outline mb-4">
            <input type="email" id="form5Example2" class="form-control" />
            <label class="form-label" for="form5Example2">Correo electrónico</label>
          </div>
        </div>
       
        <div class="col-auto mb-4 mb-md-0">
          
          <button type="submit" class="btn bg-light mb-4"><strong>Subscríbete</strong></button>
        </div>
        
      </div>
      
    </form>
  </div> -->
 
  <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
    © 2021 Copyfree:
    <a class="text-white" href="https://github.com/Amparcabezas" target="_blank">GitHub Amparcabezas</a>
  </div>
  
</footer>
</div>
  
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

.navbar-dark .navbar-nav .nav-link{
  color:white;
  font-size:20px;
}

.icono{
  height: 30px;
  margin-right: 10px;
   
}
.footer{
    
  width: 100%;
  bottom: 0;
  
}
</style>
