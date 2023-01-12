<template>
  <q-page padding class="pagina flex flex-center" :class="userStore.vistaLoginRegistro ? 'bg-primary': 'bg-white' ">
    <!-- Vista inicio/ registro -->
    <LogRegister v-if="userStore.vistaLoginRegistro" />
    
    <!-- Vista Admin -->
    <Admin v-if="userStore.vistaAdmin"/>

    <!-- Vista general -->
    <div padding v-if="userStore.vistaUsuario" id="inicio" class="reverse-wrap poppins-font flex justify-center items-center">

      

      <div class="flex flex-center">
        <div></div>
        <div class="presentacion"> <!-- Aquí va la imagen en CSS --> </div>
            
      </div>

      <div class=" flex column text-center">
        <div class="text-h5"> <p class="welcome"> Bienvenid@ {{ userStore.usuario[0] }} </p> </div>
        <div>
          <p id="title">{{aulaStore.datosCurso.titulo}}</p>
          <p id="description">{{aulaStore.datosCurso.descripcion}}</p>
          <q-btn class="q-mb-xl" color="secondary" icon="bi-pencil-square" label="ingresar al aula" to="/aula" />
        </div>
      </div>

      
    </div>
  </q-page>

  
</template>

<script setup>


import LogRegister from '../components/Auth/LogRegister.vue'
import { useUserStore } from "../stores/userStore";
import Admin from "./admin/Admin.vue";
import { useAulaStore } from "../stores/aulaStore";



const aulaStore = useAulaStore()
const userStore = useUserStore()





</script>
<style>
video{
  position: relative;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 300px;
  border-radius: 32px 32px 0px 0px;
}
.pagina{
  border-radius: 32px 32px 32px 32px;
}
.presentacion{ 
  background: url("assets/presentacion&logo.png");
  background-size: cover;
  width: 350px;
  height: 300px;
}
.gifIndex{ 
  background: url("assets/tablet.gif");
  background-size: cover;
  width: 350px;
  height: 300px;
}
#description{ 
  font-size: 18px;
}
#title{ 
  font-size: 35px;
  font-weight: bolder;
}

</style>