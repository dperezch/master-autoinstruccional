<template>
    <q-card class="column full-height">
        <q-card-section>
            <div class="text-h6"> {{nombreVideo}} </div>
        </q-card-section>

        <q-card-section class="col q-pt-none">
            <video controls controlsList="nodownload" >
                <source
                    :src="rutaVideo"
                    type="video/mp4"
                >
            </video>
        </q-card-section>

        <q-card-actions align="right" class="q-pt-sm" >
            <q-btn label="Volver" color="secondary" v-close-popup />
        </q-card-actions>
    </q-card>
</template>

<script setup>
const props = defineProps({
    nombreVideo: {
        type: String,
        default: 'No hay nombre especificado'
    },
    rutaVideo: {
        type: String,
        default: 'no-existe'
    }
})
</script>

<style scoped>
video{
    width: 100%;
}
</style>