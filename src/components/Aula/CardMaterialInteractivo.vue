<template>
    
    <q-card class="bg-primary text-white">
              
              <q-card-section>
                <!-- <div class="text-h6"> {{tituloMaterial}} </div> -->
                <div v-if="descripcionMaterial === ''"  class="text-h6"> {{tituloMaterial}} </div>
                <div else> {{descripcionMaterial}} </div>
              </q-card-section>

              <q-card-section class="q-pa-none q-ma-none">
                <iframe  
                  :src="rutaMaterial" 
                  style="width: 100vw; height: 77vh;"
                  frameborder="0">
                </iframe>
              </q-card-section>
              <q-bar>
                <q-space />
                <q-btn label="Volver" color="secondary" v-close-popup />
              </q-bar>
            </q-card>
</template>

<script setup>

const props = defineProps({
    tituloMaterial: {
        type: String,
        default: 'No hay titulo especificado'
    },
    rutaMaterial: {
        type: String,
        default: 'no-existe'
    },
    descripcionMaterial: {
      type: String,
      default: ''
    }
})
</script>

<style lang="scss" scoped>

</style>