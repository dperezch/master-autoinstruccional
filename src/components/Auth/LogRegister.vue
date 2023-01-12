<template>
<q-page class="poppins-font">
    <q-card class="login-tabs" :class="(tab === 'login')? 'mycard' : 'mycard2' " >
        <q-tabs
          v-model="tab"
          dense
          class="text-white q-mt-lg "
          active-color="white"
          indicator-color="white"
          align="justify"
          narrow-indicator
        >
          <q-tab name="login" label="Ingresa" />
          <q-tab name="register" label="Registrate" />
        </q-tabs>


        <q-tab-panels v-model="tab" animated class="absolute-bottom q-mb-none transparent">
          <q-tab-panel name="login">
            <Login />
          </q-tab-panel>

          <q-tab-panel name="register">
            <Register/>
          </q-tab-panel>

          
        </q-tab-panels>
    </q-card>

</q-page>
    
</template>

<script setup>
import Register from './Register.vue'
import Login from './Login.vue'
import { ref } from 'vue';

const tab = ref('login')

</script>

<style scoped>
.mycard{
    background: url("assets/login.png");
    background-size: cover;
    width: 400px;
}  
.mycard2{
    background: url("assets/register.png");
    background-size: cover;
    width: 400px;
}
.login-tabs{
    max-width: 400px;
    height: 600px;
    margin: 0 auto;
    border-radius: 32px 32px 32px 32px;
}

</style>