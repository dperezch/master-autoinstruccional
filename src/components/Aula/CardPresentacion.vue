<template>
            
            <q-card class="bg-primary text-white">
              <q-card-section>
                <div class="text-h6"> {{tituloPresentacion}} </div>
              </q-card-section>

              <q-card-section class="q-pa-none q-ma-none">
                <iframe  
                  :src="rutaPresentacion" 
                  style="width: 100vw; height: 80vh;"
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
    tituloPresentacion:{
        type: String,
        default: 'No hay titulo especificado'
    },
    rutaPresentacion: {
        type: String,
        default:'no-existe'
    }
})

</script>

<style>

</style>