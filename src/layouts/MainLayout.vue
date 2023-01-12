<template>
  <q-layout view="lHh Lpr lFf" class="bg-primary">
    <!-- HEADER -->
    <q-header >
      <q-toolbar id="toolbar" class="row justify-end">
        <!-- BOTÓN MENÚ -->
        <q-btn
          v-if="userStore.vistaUsuario"
          flat
          dense
          round
          id="btnMenu"
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

         <!-- izquierda del toolbar -->     

        <div class="row justify-end"> 
          <Marcador v-if="userStore.vistaUsuario" />
          <!-- BOTÓN CERRAR SESIÓN -->
          <q-btn 
          class="text-h6"
          v-if="userStore.vistaUsuario || userStore.vistaAdmin"
          @click="cerrarSesion"
          flat
          color="white" 
          icon-right="bi-box-arrow-right" 
          label="Salir" 
          />
        </div><!-- a la derecha del toolbar -->
      </q-toolbar>
    </q-header>

    <!-- MENÚ SIDEBAR -->
    <q-drawer
      class="poppins-font text-white bg-primary"
      v-model="leftDrawerOpen"
      show-if-above
      :mini="!leftDrawerOpen || miniState"
      @click.capture="drawerClick"
      :width="200"
      side="left"
      v-if="userStore.vistaUsuario"
    >
      <div>    
        <q-item-label
          class="text-white text-center q-mt-xl q-pt-xl"
          header
        >
          <q-icon size="md" name="img:myicon.png"/>
          <span class="q-ma-sm text-h6">Energiza</span>    
        </q-item-label>    
      </div>

      <q-list padding class="menu-list q-mt-xl q-ml-xs">

        <q-item
          class="q-mini-drawer-only q-mt-xl q-pt-xl q-mt-xl"
        >
          <q-item-section avatar>
            <q-icon size="md" name="img:myicon.png"/>
          </q-item-section>
        </q-item>

        <q-item clickable exact
          v-for="menu in sidebarStore.menuLogIn" :key="menu.index"
          :to="menu.to"
        >
          <q-item-section avatar>
            <q-icon :name="menu.icon" />
          </q-item-section>

          <q-item-section>
            <q-item-label>{{menu.label}}</q-item-label>
          </q-item-section>
        </q-item>

      </q-list>
      
      <div class="q-mini-drawer-hide absolute" style="top: 150px; right: 5px">
          <q-btn
            dense
            round
            unelevated
            color="secondary"
            icon="chevron_left"
            @click="miniState = true"
          />
        </div>
    
    </q-drawer>
    <q-footer> <br> </q-footer>

    <q-dialog v-model="tarjetaTiempo" persistent>
      <q-card class="bg-secondary text-white">
        <q-card-section>
          <div class="text-h6">Regresa pronto!</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{contadorStore.info}}
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- VISTA DE APLICACIÓN -->
    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup>
import Marcador from '../components/Marcador.vue'
import { ref } from 'vue'
import { useSidebarStore } from "../stores/sidebarStore";
import { useUserStore } from "../stores/userStore";
import { useContadorStore } from "../stores/contadorStore";
import { useRouter } from "vue-router";
import { useAulaStore } from 'src/stores/aulaStore';

const router = useRouter();
const sidebarStore = useSidebarStore()
const userStore = useUserStore()
const aulaStore = useAulaStore()
const contadorStore = useContadorStore()
const miniState = ref(false)
const leftDrawerOpen = ref(false)
const tarjetaTiempo = ref(false)

const horasFinal = ref(null)
const minutosFinal = ref(null)

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

const drawerClick = (e) => {
  if (miniState.value) {
    miniState.value = false
    e.stopPropagation()
  }
}

const cerrarSesion = () => {
  userStore.cerrarSesion()
  contadorStore.pararTiempo()

  /* Obtener tiempo final */
  const arrayHoras = []
  const arrayMinutos = []
  userStore.usuario[7].forEach(tiempo => {
  arrayHoras.push(tiempo.horas)
  arrayMinutos.push(tiempo.minutos)
  });  
  const totalMinutos = arrayMinutos.reduce((a, b) => a + b, 0)

  if (totalMinutos > 59) {
      let cociente = Math.floor(totalMinutos/60)
      arrayHoras.push(cociente)
      let resto = totalMinutos % 60
      minutosFinal.value = resto
      const totalHoras = arrayHoras.reduce((a, b) => a + b, 0)
      horasFinal.value = totalHoras
  } else if (totalMinutos < 60) {
      minutosFinal.value = totalMinutos
      horasFinal.value = 0
  }
  
  if (navigator.onLine) {
      console.log('DISPOSITIVO ESTÁ ONLINE');

      try {
          fetch('https://energiza-api-alumnos.herokuapp.com/api/alumnos')
          .then(res=> res.json())
          .then(data=> datosApi(data))
      } catch (error) {
          console.log(error);
      }

  } else { console.log('DISPOSITIVO OFFLINE'); }
  


  tarjetaTiempo.value = true
  router.push({path: '/'})
}

async function datosApi(data){
    console.log('datos desde api: ', data);
    console.log('length de api: ', data.length);

    const alumno = {
        nombre: userStore.usuario[0],
        rut: userStore.usuario[1],
        email: userStore.usuario[2],
        curso: aulaStore.curso.titulo,
        avance: userStore.usuario[6],
        tiempoConexion: horasFinal.value + ' horas, ' + minutosFinal.value + ' minutos.',
        conexiones: userStore.usuario[7],
        evaluaciones: userStore.usuario[8]
    }

    console.log('alumno: ', alumno);

    let user = data.filter( element => 
        element.rut === userStore.usuario[1] && element.curso === aulaStore.curso.titulo
    )

    console.log("Alumno filtrado: ", user);

    if (user.length === 0) {
        try {
            //AQUI VA LA DIRECCION DE LA API CON METODO POST
            await fetch('https://energiza-api-alumnos.herokuapp.com/api/nuevo-alumno', {
                method: "POST",
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(alumno)
            })
            .then(res=> res.json())
            .then(data=> console.log('POST: ', data, 'DATA ID: ', data._id))
        } catch (error) {
            console.log(error);
        }
    } else if (user.length > 0) {
        try {
            //AQUI VA LA DIRECCION DE LA API CON METODO PUT
            await fetch(`https://energiza-api-alumnos.herokuapp.com/api/alumno/${user[0]._id}`, {
                method: "PUT",
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(alumno)
            })
            .then(res=> res.json())
            .then(data=> console.log('PUT: ', data, 'DATA ID: ', data._id))
        } catch (error) {
            console.log(error);
        }
    }
}
</script>

<style scoped>
.menu-list, .q-item {
  border-radius: 32px 0px 0px 32px;
}
.q-item.q-router-link--active, .q-item--active {
  color: #FB6D3A;
  background-color: white;
}
.q-drawer--mini {
  width: 100px;
}
#btnMenu {
  display: none;
}
#toolbar {
  justify-content: flex-end;
}
@media (max-width: 850px){
  #btnMenu {
    display: inline;
  }
  #toolbar {
    justify-content: space-between;
  }
}
</style>

