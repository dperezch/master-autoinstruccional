<template>
    <div class="q-mr-xl q-mt-sm text-h6">
        {{contadorStore.horas}}  :  {{contadorStore.minutos}}  :  {{contadorStore.segundos}}
    </div>
</template>

<script setup>
import { useContadorStore } from "../stores/contadorStore";
const contadorStore = useContadorStore()
</script>

<style lang="scss" scoped>

</style>