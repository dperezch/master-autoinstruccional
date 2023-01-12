<template>
    <q-page padding class="pagina poppins-font flex flex-center bg-white">
      <div class="flex flex-row justify-evenly">
        <div>
          <q-scroll-area style="height: 500px; width: 400px;">
              <q-card
                v-for="(modulo, index) in aulaStore.datosCurso.modulos" :key="index"
                class="my-card q-py-md q-my-xl bg-secondary"
                style="border-radius: 32px 32px 32px 32px;"
              >
                <q-card-section>
                  <q-item>
                    <q-item-section avatar>
                      <q-avatar color="primary" text-color="white">
                        {{modulo.numero}}
                      </q-avatar>
                    </q-item-section>
                    <q-item-section class="text-weight-bold text-subtitle1 text-white">
                        <div> {{modulo.titulo}} </div>
                        <div class="text-subtitle2"> {{modulo.subtitulo}} </div>
                    </q-item-section>
                  </q-item>
                </q-card-section>
                <br/>
                <q-card-section 
                  class="q-pt-none q-mx-sm text-white text-center" 
                >
                  <br/>
                  <p style="font-size: 15px;">
                    {{modulo.descripcion}}
                  </p>  
                  <p> {{modulo.descripcion2}} </p>
                </q-card-section>
          
          
                <q-card-actions align="center">
                  <q-btn 
                    @click="irModulo(modulo)"
                    rounded
                    class="text-white q-px-md"
                    color="primary"
                    style="width: 180px;"
                  >
                    Ingresar
                  </q-btn>
                </q-card-actions>

              </q-card>
          </q-scroll-area>
        
        </div>

        <q-dialog v-model="avance50" persistent>
            <q-card class="bg-secondary text-white">
                <q-card-section>
                    <div class="text-h6">Increíble!!</div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                    Haz logrado un 50% de avance total del curso!
                </q-card-section>

                <q-card-actions align="right" class="bg-white text-black">
                    <q-btn flat label="OK" color="primary" v-close-popup />
                </q-card-actions>
            </q-card>
        </q-dialog>

        <q-dialog v-model="avance100" persistent>
            <q-card class="bg-secondary text-white">
                <q-card-section>
                    <div class="text-h6">Felicitaciones!!</div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                    Haz logrado un 100% de avance total del curso!
                </q-card-section>

                <q-card-actions align="right" class="bg-white text-black">
                    <q-btn flat label="OK" color="primary" v-close-popup />
                </q-card-actions>
            </q-card>
        </q-dialog>
        
        

      </div>
        
        
    </q-page>
</template>

<script setup>
import { useAvanceStore } from 'src/stores/avanceStore';
import { useRouter } from 'vue-router';
import { useAulaStore } from "../stores/aulaStore";
import { ref, onMounted } from "vue";

const avanceStore = useAvanceStore()
const aulaStore = useAulaStore()
const router = useRouter()
const avance50 = ref(false)
const avance100 = ref(false)


function irModulo(modulo){
  router.push({path: `/aula/modulo/${modulo.numero}`})
  aulaStore.getModulo(modulo)
}

onMounted(()=>{
  if (avanceStore.barra === 50) {
    avance50.value = true
  } else if (avanceStore.barra === 100) {
    avance100.value = true
  }
})



</script>

<style>
  .pagina{
    border-radius: 32px 32px 32px 32px;
  }
  .fondoGif{
    background: url("assets/fondo.gif");
    background-size: cover;
    width: 100%;
    height: 100%;
  }
  .my-card {
    width: 370px;
  }
  .aula{ 
    background: url("assets/aula.png");
    background-size: cover;
    width: 300px;
    height: 490px;
  }
</style>