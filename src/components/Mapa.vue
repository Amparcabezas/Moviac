<template>
  <div class="col-12" id="mapid"></div>
</template>

<script>
import L from "leaflet";
import {onMounted} from 'vue'
export default {
    name:'Mapa',
    props:{
      lon: Number,
      lat: Number,
      titulo: String
    },
    setup(props){
//console.log(props)   
let mymap;
let marker;
let longitud= props.lon
let latitud= props.lat
let titulo= props.titulo
//console.log("este es el console de mapa" + latitud)
//console.log("longitud" + longitud)


onMounted(() => {
  
  mymap = L.map("mapid").setView(
        [latitud, longitud],
        13
      );
      L.tileLayer(
        "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
        {
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: "mapbox/streets-v11",
          tileSize: 512,
          zoomOffset: -1,
          accessToken:
            "pk.eyJ1IjoiYW1wYSIsImEiOiJja2xhcWE0ejIwOXVnMnBvZHk2ZGh1ZWc1In0.stFyTBzG9KTXA87-mo5B-w",
        }
      ).addTo(mymap); 
      marker=L.marker([latitud, longitud]).addTo(mymap);
      marker.bindPopup(titulo).openPopup();
      

})

    
        return{

longitud,
latitud,
titulo
        }
    }

}
</script>

<style>
#mapid {
  height: 180px;
}
</style>