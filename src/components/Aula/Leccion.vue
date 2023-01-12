<template>
    <q-page padding class="pagina bg-white poppins-font">
        <div class="flex justify-end q-mr-md">
             <q-btn color="secondary" text-color="white" label="Volver" @click="irModulo"/>
        </div>
        <div class="text-center">
            <h4> {{aulaStore.datosModulo.subtitulo}} </h4>
            <h5> {{aulaStore.datosLeccion.titulo}} </h5>
            <h6> {{aulaStore.datosLeccion.subtitulo}} </h6>
        </div>

        <div class="q-mx-lg">
            <h6 v-if="aulaStore.datosLeccion.textos.length > 0 || aulaStore.datosLeccion.imagenes > 0 || aulaStore.datosLeccion.ejercicios > 0">Material Interactivo</h6>
            <q-list>
                <q-item 
                    clickable
                    @click="irMaterial(texto.titulo, texto.ruta, texto.descripcion)"
                    class="q-mx-lg" 
                    v-for="(texto, index) in aulaStore.datosLeccion.textos" :key="index" 
                >
                    <q-icon 
                        :name="userStore.usuario[9].find(element => element == aulaStore.datosModulo.subtitulo + ' ' + aulaStore.datosLeccion.titulo + ' ' + texto.titulo) ? 'bi-dash' : 'bi-check-all' "  
                        :color="userStore.usuario[9].find(element => element == aulaStore.datosModulo.subtitulo + ' ' + aulaStore.datosLeccion.titulo + ' ' + texto.titulo) ? 'blue-grey-6' : 'positive'"
                        size="md" class="q-mt-xs q-mr-xs"
                    />

                    <q-item-section avatar>
                        <q-avatar rounded color="secondary" text-color="white" icon="bi-file-earmark-richtext" />
                    </q-item-section>
                    <q-item-section> {{texto.titulo}} </q-item-section>
                </q-item>
                <q-item
                    clickable
                    @click="irMaterial(imagen.nombre, imagen.ruta, imagen.descripcion)"
                    class="q-mx-lg" 
                    v-for="(imagen, index) in aulaStore.datosLeccion.imagenes"
                >
                    <q-icon 
                        :name="userStore.usuario[9].find(element => element == aulaStore.datosModulo.subtitulo + ' ' + aulaStore.datosLeccion.titulo + ' ' + imagen.nombre) ? 'bi-dash' : 'bi-check-all' "  
                        :color="userStore.usuario[9].find(element => element == aulaStore.datosModulo.subtitulo + ' ' + aulaStore.datosLeccion.titulo + ' ' + imagen.nombre) ? 'blue-grey-6' : 'positive'"
                        size="md" class="q-mt-xs q-mr-xs"
                    />

                    <q-item-section avatar>
                        <q-avatar rounded color="secondary" text-color="white" icon="bi-image-fill" />
                    </q-item-section>
                    <q-item-section> {{imagen.nombre}} </q-item-section>
                </q-item>
                <q-item 
                    clickable
                    @click="irMaterial(ejercicio.nombre, ejercicio.ruta, ejercicio.descripcion)"
                    class="q-mx-lg" 
                    v-for="(ejercicio, index) in aulaStore.datosLeccion.ejercicios"
                >
                    <q-icon 
                        :name="userStore.usuario[9].find(element => element == aulaStore.datosModulo.subtitulo + ' ' + aulaStore.datosLeccion.titulo + ' ' + ejercicio.nombre) ? 'bi-dash' : 'bi-check-all' "  
                        :color="userStore.usuario[9].find(element => element == aulaStore.datosModulo.subtitulo + ' ' + aulaStore.datosLeccion.titulo + ' ' + ejercicio.nombre) ? 'blue-grey-6' : 'positive'"
                        size="md" class="q-mt-xs q-mr-xs"
                    />

                    <q-item-section avatar>
                        <q-avatar rounded color="secondary" text-color="white" icon="bi-dpad" />
                    </q-item-section>
                    <q-item-section> {{ejercicio.nombre}} </q-item-section>
                </q-item>
            </q-list>

            <q-item v-if="aulaStore.datosLeccion.preguntas"
                clickable @click="irPrueba(pregunta.nombre)" class="q-mx-lg"  
                v-for="(pregunta, index) in aulaStore.datosLeccion.preguntas"
            >
                <q-icon 
                    :name="userStore.usuario[9].find(element => element == aulaStore.datosModulo.subtitulo + ' ' + aulaStore.datosLeccion.titulo + ' ' + pregunta.nombre) ? 'bi-dash' : 'bi-check-all' "  
                    :color="userStore.usuario[9].find(element => element == aulaStore.datosModulo.subtitulo + ' ' + aulaStore.datosLeccion.titulo + ' ' + pregunta.nombre) ? 'blue-grey-6' : 'positive'"
                    size="md" class="q-mt-xs q-mr-xs"
                />

                <q-item-section avatar>
                    <q-avatar rounded color="secondary" text-color="white" icon="bi-file-earmark-richtext" />
                </q-item-section>
                <q-item-section> {{pregunta.nombre}} </q-item-section>
            </q-item>

        </div>

        <div class="q-mx-lg">
            <h6 v-if="aulaStore.datosLeccion.videos.length > 0">Videos</h6>
            <q-list>
                <q-item  
                    clickable
                    @click="irVideo(video.nombre, video.ruta)" 
                    class="q-mx-lg" 
                    v-for="(video, index) in aulaStore.datosLeccion.videos" :key="index" 
                >
                    <q-icon 
                        :name="userStore.usuario[9].find(element => element == aulaStore.datosModulo.subtitulo + ' ' + aulaStore.datosLeccion.titulo + ' ' + video.nombre) ? 'bi-dash' : 'bi-check-all' "  
                        :color="userStore.usuario[9].find(element => element == aulaStore.datosModulo.subtitulo + ' ' + aulaStore.datosLeccion.titulo + ' ' + video.nombre) ? 'blue-grey-6' : 'positive'"
                        size="md" class="q-mt-xs q-mr-xs"
                    />
                    
                    <q-item-section avatar>
                        <q-avatar rounded color="secondary" text-color="white" icon="bi-file-play" />
                    </q-item-section>
                    <q-item-section> {{video.nombre}} </q-item-section>
                </q-item>
            </q-list>
            
        </div>

        <div 
            class="flex justify-end q-mr-md"
            v-if="!aulaStore.datosLeccion.preguntas"
        >
             <q-btn color="secondary" text-color="white" label="Siguiente" @click="irModulo" class="q-mt-xl"/>
        </div>

        <q-dialog 
            v-model="video" 
            full-width
            full-height
            persistent
        >
            <CardVideo 
                :nombreVideo = "nombreVid"
                :rutaVideo = "rutaVid"
            />
        </q-dialog>

        <q-dialog 
            v-model="material" 
            persistent
            :maximized="maximizedToggle"
            transition-show="slide-up"
            transition-hide="slide-down"
        >
            <CardMaterialInteractivo
                :tituloMaterial="nombreMat"
                :rutaMaterial="rutaMat"
                :descripcionMaterial="descMat"
            />
        </q-dialog>

        <q-dialog 
            v-model="prueba" 
            persistent
            :maximized="maximizedToggle"
            transition-show="slide-up"
            transition-hide="slide-down"
        >
            <q-card class="bg-white text-black">
              <q-card-section>
                <div class="text-h6"> Prueba final {{aulaStore.datosModulo.subtitulo}} </div>
              </q-card-section>

              <q-card-section class="q-pa-none q-ma-none">
                <!-- AQUÍ SE DEBE AGREGAR LOS TEST Y DEPENDIENDO DEL MÓDULO SE MOSTRARA EL QUE CORRESPONDE -->
                <Test1 
                    v-if="aulaStore.datosModulo.subtitulo === 'Módulo 1'"  
                />

                <!-- EJEMPLO, copiar la plantilla Test1.vue, editar preguntas y cambiar nombre por Test2.vue, agregar como se ve aquí abajo con la condicional v-if y el nombre del módulo (Módulo 2): 
                <Test2 
                    v-if="aulaStore.datosModulo.subtitulo === 'Módulo 2'"  
                />
                
                -->

              </q-card-section>
              <q-bar>
                <q-space />
                <q-btn label="Volver" color="secondary" v-close-popup />
              </q-bar>
            </q-card>
        </q-dialog>
        

    </q-page>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useAulaStore } from "stores/aulaStore";
import { ref } from 'vue';
import CardVideo from './CardVideo.vue'
import CardMaterialInteractivo from './CardMaterialInteractivo.vue';
import Test1 from './Test1.vue';
import { useAvanceStore } from 'src/stores/avanceStore';
import { useUserStore } from 'src/stores/userStore';


const router = useRouter()
const aulaStore = useAulaStore()
const avanceStore = useAvanceStore()
const userStore = useUserStore()
const video = ref(false)
const nombreVid = ref('')
const rutaVid = ref('')
const material = ref(false)
const nombreMat = ref('')
const rutaMat = ref('')
const descMat = ref('')
const maximizedToggle = ref(true)
const prueba = ref(false)


function irVideo(nombre, ruta){
    //console.log('estoy presionando: ', nombre , ' ', ruta);
    nombreVid.value = nombre
    rutaVid.value = ruta
    video.value = true
    avanceStore.avanceBarraRecursos(aulaStore.datosModulo.subtitulo, aulaStore.datosLeccion.titulo, nombre)
}

function irMaterial(nombre, ruta, descripcion){
    //console.log('estoy presionando: ', nombre , ' ', ruta);
    nombreMat.value = nombre
    rutaMat.value = ruta
    descMat.value = descripcion
    material.value = true
    avanceStore.avanceBarraRecursos(aulaStore.datosModulo.subtitulo, aulaStore.datosLeccion.titulo, nombre)

}


function irModulo(){
    router.push({path: `/aula/modulo/${aulaStore.datosModulo.numero}`})
    //aulaStore.getModulo(null)
}

function irPrueba(nombre){
    prueba.value = true
    avanceStore.avanceBarraRecursos(aulaStore.datosModulo.subtitulo, aulaStore.datosLeccion.titulo, nombre)
}
</script>

<style scoped>
.pagina{
    border-radius: 32px 32px 32px 32px;
  }
.my-card {
    width: 100%;
    max-width: 400px;
  }
</style>