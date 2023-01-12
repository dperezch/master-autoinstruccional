<template>
    <div class="flex-center">
        <h5>Usuarios registrados:</h5>
        <table>
            <tr>
                <th class="text-h5">NOMBRE</th>
                <th class="text-h5">EMAIL</th>
                <th class="text-h5">CONTRASEÑA</th>
            </tr>
            <tr v-for="(usuario, index) in userStore.listaUsuarios" :key="index">
                <td class="text-h6"> {{usuario[0]}} </td>
                <td class="text-h6"> {{usuario[2]}} </td>
                <td class="text-h6"> {{usuario[3]}} </td>
            </tr>
        </table>

    </div>
</template>

<script setup>
import { useUserStore } from "stores/userStore";

const userStore = useUserStore()
</script>

<style scoped>
table{
    border-collapse: collapse;
}
td, th {
    border: 1px solid #fb6d3a70;
    padding: 8px;
}
tr:nth-child(even) {
    background-color: #fb6d3a93;
}
</style>