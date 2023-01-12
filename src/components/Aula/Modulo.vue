<template>
    <q-page padding class="pagina bg-white poppins-font">
        <div class="flex justify-end q-mr-md">
             <q-btn color="secondary" text-color="white" label="Volver" @click="irAula" />
        </div>
        <div class="text-center q-mx-xl">
            <h4> {{aulaStore.datosModulo.subtitulo}} </h4>
            <h5> {{aulaStore.datosModulo.titulo}} </h5>
        </div>
        <div class="q-mt-md q-mx-xl q-pb-md">
            
            <div class="row" v-if="aulaStore.datosModulo.presentaciones">
                <q-btn 
                color="secondary" class=" q-mt-md col-11" 
                label="presentación inicial"
                @click="presentacion = true"
                />
                
                <q-icon name="bi-easel" size="md" class="col-1 q-mt-lg" color="primary"/>
                
            </div>
            

            <div v-for="(leccion , index) in aulaStore.datosModulo.lecciones" :key="index" class="row">
                <q-btn color="secondary" class="q-mt-md col-11" :label="leccion.titulo" @click="irLeccion(leccion)" />

                <q-icon :name="userStore.usuario[5].find(element => element == aulaStore.datosModulo.subtitulo + ' ' + leccion.titulo) ?  'bi-dash-square-fill'  : 'bi-check-square-fill' " 
                    size="md" class="col-1 q-mt-lg"
                    :color="userStore.usuario[5].find(element => element == aulaStore.datosModulo.subtitulo + ' ' + leccion.titulo) ? 'blue-grey-6' : 'positive' "
                />
            </div>


        </div>

        <q-dialog 
            v-model="presentacion" 
            persistent
            :maximized="maximizedToggle"
            transition-show="slide-up"
            transition-hide="slide-down"
        >
            <CardPresentacion
                :tituloPresentacion="aulaStore.datosModulo.presentaciones.nombre"
                :rutaPresentacion="aulaStore.datosModulo.presentaciones.ruta[0]"
            />
        </q-dialog>

    </q-page>
    
</template>

<script setup>
import { useAulaStore } from "stores/aulaStore";
import { useAvanceStore } from "stores/avanceStore";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import CardPresentacion from './CardPresentacion.vue'
import { useUserStore } from "stores/userStore";

const userStore = useUserStore()
const router = useRouter()
const aulaStore = useAulaStore()
const avanceStore = useAvanceStore()
const presentacion = ref(false)
const maximizedToggle = ref(true)


function irLeccion(leccion){
    router.push({path: `/aula/leccion/${leccion.numero}`})
    aulaStore.getLeccion(leccion)
    avanceStore.avanceBarra(aulaStore.datosModulo.subtitulo, leccion.titulo)
    
}

function irAula(){
    router.push({path: '/aula'})
    //aulaStore.getModulo(null)
}



onMounted(()=>{
    
    //desbloquear()
})

</script>

<style scoped>
.pagina{
    border-radius: 32px 32px 32px 32px;
  }
.gifModulo{
    background: url("assets/modulo.gif");
    background-size: cover;
    width: 200px;
    height: 200px;
}
</style>