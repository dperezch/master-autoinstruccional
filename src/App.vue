<template>
  <router-view />
</template>

<script setup>
import { onMounted } from 'vue';
import { useUserStore } from "./stores/userStore";
import { useAulaStore } from "./stores/aulaStore";

const userStore = useUserStore()
const aulaStore = useAulaStore()

onMounted(()=>{
  userStore.cargarLocalStorage()
  aulaStore.loadData()
})
</script>
