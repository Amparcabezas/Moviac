<template>
  <div class="container">
    <h1>Instalaciones no oficiales accesibles</h1>
    <h3>
      Para acceder a la información y ubicación de las
      <b>instalaciones accesibles de carácter no oficial</b> en Madrid, selecciona
      el distrito y la instalación que deseas visitar.
    </h3>

    <div class="row selects">
      <div class="col-md-5 col-12 mb-4 mb-md-0">
        <!-- Email input -->
        <div class="mb-4">
          <select
            v-model="distrito"
            class="form-control"
            @change="verInstalaciones"
          >
            <option
              v-for="(distrito, item) in distritos"
              :key="item"
              :value="distrito"
            >
              {{ distrito }}
            </option>
          </select>
          <p class="form-label">Distrito</p>
        </div>
      </div>
      <div v-if="instalaciones.datos" class="col-md-5 col-12 mb-4 mb-md-0">
        <!-- Email input -->
        <div class="mb-4">
          <select
            v-model="instalacion"
            class="form-control"
            @change="mostrarInfoInstalacion"
          >
            <option
              v-for="(instalacion, indice) in instalaciones.datos"
              :key="indice"
              :value="instalacion['@id']"
            >
              {{ instalacion.title }}
            </option>
          </select>
          <p class="form-label">Instalación oficial</p>
        </div>
      </div>
    </div>
    <div v-if="informacion.datos" class="row infoInstitucion">
      <div class="col-12 col-md-6">
        <div class="col-12 mb-4 mb-md-0" style="font-size: 25px">
          <b>{{ informacion.datos.title }}</b>
        </div>
        <div class="col-12 mb-4 mb-md-0">
          <b>Dirección: </b>{{ informacion.datos.address["street-address"] }}
        </div>
        <div class="col-12 mb-4 mb-md-0">
          <b>Código Postal: </b>{{ informacion.datos.address["postal-code"] }}
        </div>
        <div class="col-12 mb-4 mb-md-0">
          <b>Localidad: </b>{{ informacion.datos.address.locality }}
        </div>
      </div>
      <div class="col-12 col-md-6">
        <Mapa :lat="latitud" :lon="longitud" :titulo="tituloInstitucion" />
      </div>
      <div class="enlaces">
        <p>
          <a
            class="col-12 btn btn-primary d-flex justify-content-between"
            data-toggle="collapse"
            href="#collapseExample2"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            <span>Horario</span> <span>+</span>
          </a>
        </p>
        <div class="col-12 collapse" id="collapseExample2">
          <div class="card card-body" style="color: black">
            {{ informacion.datos.organization.schedule }}
          </div>
        </div>
        <p>
          <a
            class="col-12 btn btn-primary d-flex justify-content-between"
            data-toggle="collapse"
            href="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            <span>Servicios</span> <span>+</span>
          </a>
        </p>
        <div class="col-12 collapse" id="collapseExample">
          <div class="card card-body" style="color: black">
            {{ informacion.datos.organization.services }}
          </div>
        </div>
      </div>
    </div>

    <div v-if="informacion.datos" class="row infoInstitucion">
      <div class="col-12 mb-4 mb-md-0 url">
        Para más información:
        <a :href="informacion.datos.relation" target="_blank"
          >Visita la web de madrid.es para más informacion
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, onMounted, watch } from "vue";
import Mapa from "@/components/Mapa.vue";

export default {
  name: "InstalacionesOficiales",
  props: {},
  components: {
    Mapa,
  },
  setup() {
    let latitud = ref("");
    let longitud = ref("");
    let tituloInstitucion = ref("");
    let distritos = reactive([
      "ARGANZUELA",
      "BARAJAS",
      "CARABANCHEL",
      "CENTRO",
      "CHAMARTIN",
      "CHAMBERI",
      "CIUDAD LINEAL",
      "FUENCARRAL-EL PARDO",
      "HORTALEZA",
      "LATINA",
      "MONCLOA-ARAVACA",
      "MORATALAZ",
      "PUENTE DE VALLECAS",
      "RETIRO",
      "SALAMANCA",
      "SAN BLAS-CANILLEJAS",
      "TETUAN",
      "USERA ",
      "VICALVARO",
      "VILLA DE VALLECAS",
      "VILLAVERDE",
    ]);
    let distrito = ref("");
    let instalaciones = reactive([]);
    let instalacion = ref("");
    let informacion = reactive([]);

    function verInstalaciones() {
     fetch(
        `https://datos.madrid.es/egob/catalogo/202180-0-instalaciones-accesibles-no-muni.json?distrito_nombre=${distrito.value}`
      )
        .then((res) => res.json())
        .then((datos) => {
          
          instalaciones.datos= datos["@graph"]
          
        });
    }

    function mostrarInfoInstalacion() {
      fetch(instalacion.value)
        .then((res) => res.json())
        .then((infoInstalacion) => {
          informacion.datos = infoInstalacion["@graph"][0];
          latitud.value = informacion.datos.location.latitude;
          longitud.value = informacion.datos.location.longitude;
          tituloInstitucion.value = informacion.datos.title;
   
        });
    }

    return {
      distritos,
      instalaciones,
      distrito,
      verInstalaciones,
      instalacion,
      mostrarInfoInstalacion,
      informacion,
      latitud,
      longitud,
      tituloInstitucion,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 80%;
  margin: 0 auto;
  margin-bottom: 100px;

  h1 {
    margin-top: 40px;
    margin-bottom: 50px;
    font-weight: bold;
  }
  h3 {
    text-align: left;
    text-indent: 50px;
    margin-bottom: 50px;
  }
}

.selects {
  display: flex;
  margin: 0 auto;
  justify-content: space-around;
}
.infoInstitucion {
  background-color: #212529;
  color: white;
  font-size: 20px;
  padding: 20px;
  margin-bottom: 30px;
  text-align: left;
}

.url {
  word-wrap: break-word;
}

.enlaces {
  margin-top: 20px;
  div {
    margin-bottom: 20px;
  }
}
</style>