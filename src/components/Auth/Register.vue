<template>
    <q-form ref="myForm" @submit.prevent="submitForm">
    
    <div class="row q-mb-md">
        <q-input 
            outlined 
            color="white"
            bg-color="cyan-7"
            v-model="ingresarNombre" 
            label="Nombre" 
            stack-label 
            class="col"
        />
    </div>
    <div class="row q-mb-md">
        <q-input 
            
            outlined 
            color="white"
            bg-color="cyan-7"
            v-model="ingresarRut" 
            label="Rut" 
            stack-label
            mask="##.###.###-X" 
            hint="Ejemplo: 12.333.444-5 ó K / 01.222.333-4 ó K"
            unmasked-value
            class="col"
        />
    </div>
    <div class="row q-mb-none">
        <q-input 
            outlined 
            color="white"
            bg-color="cyan-7"
            v-model="ingresarEmail" 
            label="Tu correo" 
            stack-label 
            class="col"
            :rules="[ val => isValid(val) || 'Ingresa un correo válido']"
            lazy-rules
        />
    </div>
    <div class="row q-mt-none q-mb-none">
        <q-input 
            outlined 
            color="white"
            bg-color="cyan-7"
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
        <q-space />
        <p class="q-mt-md text-weight-bold text-body1">Registrate</p>
        <q-btn 
            flat
            size="xl"
            color="dark" 
            icon-right="bi-arrow-right-circle-fill"
            type="submit"
            :disable="  ingresarNombre === '' || 
                        ingresarEmail === '' || 
                        ingresarPassword === '' ||
                        ingresarRut === '' ? true : false"
        />
    </div>
</q-form>

<q-dialog v-model="alerta" persistent transition-show="scale" transition-hide="scale">
    <q-card class="bg-secondary text-white" style="width: 300px">
        <q-card-section>
          <div class="text-h6">Cuenta creada</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Ya puedes hacer inicio de sesión en la pestaña 'INGRESA'
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="OK" v-close-popup />
        </q-card-actions>
    </q-card>
</q-dialog>

<q-dialog v-model="denegado" persistent transition-show="scale" transition-hide="scale">
    <q-card class="bg-red text-white" style="width: 300px">
        <q-card-section>
          <div class="text-h6">ERROR</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          El RUT y/o EMAIL ingresado ya existe.
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="OK" v-close-popup />
        </q-card-actions>
    </q-card>
</q-dialog>

</template>

<script setup>
import { ref } from 'vue';
import { useUserStore } from "stores/userStore";
import { useAvanceStore } from "stores/avanceStore";  ///////

const avanceStore = useAvanceStore()  ///////
const userStore = useUserStore()
const ingresarNombre = ref('')
const ingresarRut = ref('')
const ingresarEmail = ref('')
const ingresarPassword = ref('')
const alerta = ref(false)
const denegado = ref(false)
const myForm = ref(null)
const isPwd = ref(true)

const isValid = (email) => {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(email).toLowerCase());
}

const submitForm = () => {
    const email = (ingresarEmail.value).toLowerCase()
    const rut = ingresarRut.value
    const usuario = [ingresarNombre.value, rut, email, ingresarPassword.value, '2', avanceStore.lista, 0, [], [], avanceStore.listaRecursos]   /////// array 0-9

    const alumnos = userStore.listaUsuarios

    if (alumnos.some(alumno => alumno[1] === rut || alumno[2] === email)) {
        denegado.value = true
    } else {
        userStore.setUsuario(usuario)
        alerta.value = true
    }

    ingresarNombre.value = '';
    ingresarRut.value = '';
    ingresarEmail.value = '';
    ingresarPassword.value = '';
    myForm.value.resetValidation()
}

</script>

<style lang="scss" scoped>

</style>