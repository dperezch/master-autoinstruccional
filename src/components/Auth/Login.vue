<template>
<form @submit.prevent="submitForm">
    
    <div class="row q-mb-md">
        <q-input 
            ref="email"
            color="secondary"
            bg-color="grey-4"
            outlined 
            v-model="ingresarEmail" 
            label="Tu correo ..." 
            stack-label 
            class="col"
            :rules="[ val => isValid(val) || 'Ingresa un correo válido']"
            lazy-rules
        />
    </div>
    <div class="row q-mb-md">
        <q-input 
            ref="password"
            color="secondary"
            bg-color="grey-4"
            outlined 
            v-model="ingresarPassword" 
            :type="isPwd ? 'password' : 'text'"
            label="Contraseña" 
            stack-label 
            class="col"
            :rules="[ val => val.length >= 6 || 'Usa al menos 6 carácteres']"
            lazy-rules
        > 
            <template v-slot:append>
                <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                />
            </template>
        
        </q-input>
    </div>
    <div class="row">
        <div >
            <q-item clickable class="text-indigo-10 q-mt-sm" @click="recuperar = true">
                Olvidé mi contraseña
            </q-item>
        </div>
        <q-space />
        <div class="row">
            <p class="q-mt-md text-weight-bold text-body1">Ingresa</p>
        <q-btn 
            flat
            size="xl"
            color="dark" 
            icon-right="bi-arrow-right-circle-fill"
            type="submit"
            :disable="ingresarEmail === '' || ingresarPassword === '' ? true : false"
        />
        </div>
        
    </div>
</form>

<q-dialog
      v-model="recuperar"
      full-height
      full-width
      persistent
    >
      <q-card class="column full-height">
        <q-card-section>
          <div class="text-h6">CONTÁCTANOS A:</div>
        </q-card-section>

        <q-card-section class="col q-pt-none flex column items-center justify-center">
            <div class="recuperar">
                <!-- Aquí va la imagen en CSS -->
            </div>
            
            <br>
            <br>
            <br>
            <div>
                <q-list>
                    <q-item clickable>
                        <q-item-section avatar>
                            <q-icon size="3em" color="blue" name="phone_in_talk" />
                        </q-item-section>

                        <q-item-section>
                            <q-item-label>TELÉFONO</q-item-label>
                            <q-item-label class="text-weight-bolder" style="font-size: 15px;" > +569 39138316</q-item-label>
                        </q-item-section>
                    </q-item>


                    <q-item clickable>
                        <q-item-section avatar>
                            <q-icon size="3em" color="red" name="mail_outline" />
                        </q-item-section>

                        <q-item-section>
                            <q-item-label>CORREO ELECTRÓNICO</q-item-label>
                            <q-item-label class="text-weight-bolder" style="font-size: 15px;">gestion@sustantiva.cl</q-item-label>
                        </q-item-section>
                    </q-item>
                </q-list>
            </div>
            
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="salir" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
</template>

<script setup>
import { ref } from 'vue';
import { useUserStore } from "stores/userStore";
import { useAvanceStore } from "stores/avanceStore";
import { useQuasar, QSpinnerFacebook } from 'quasar'

const userStore = useUserStore()
const avanceStore = useAvanceStore()
const ingresarEmail = ref('')
const ingresarPassword = ref('')
const recuperar = ref(false)
const isPwd = ref(true)

const $q = useQuasar()
let timer

const isValid = (email) => {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(email).toLowerCase());
}
const submitForm = () => {
    const email = (ingresarEmail.value).toLowerCase()
    //loading
    $q.loading.show({
        spinner: QSpinnerFacebook,
        spinnerColor: 'secondary',
        spinnerSize: 140,
        backgroundColor: 'purple',
        message: 'Iniciando sesión. Un momento...',
        messageColor: 'white'
    })
    //se esconde en 3 segundos
    timer = setTimeout(()=>{
        $q.loading.hide()
        // Iniciar sesion
        userStore.iniciarSesion(email, ingresarPassword.value)
        ingresarEmail.value = '';
        ingresarPassword.value = '';
        avanceStore.getBarra()
        timer = void 0
    },3000)

    
    
}
</script>



<style scoped>
.recuperar{
    background: url("assets/recuperar.png");
    background-size: cover;
    width: 300px;
    height: 200px;
}
</style>