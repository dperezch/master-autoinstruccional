<template>
    <q-page padding class="pagina bg-white poppins-font flex column justify-center">
        <div class="col-4">
            <div class="text-h6">Tu progreso actual:</div>
            <q-linear-progress stripe rounded size="40px" :value="progreso" color="teal-13" class="q-mb-md">
                <div class="absolute-full flex flex-center">
                  <q-badge color="white" text-color="accent" :label="labelProgreso" />
                </div>
            </q-linear-progress>   
        </div>
        <div class="col-8">
            <div class="">
                <div id="tiempoFinal" class="text-h6 q-mb-md" v-if="userStore.usuario[7].length > 0">
                    Tiempo total de conexión: {{horasFinal}} horas, {{minutosFinal}} minutos 
                </div>
                
                <p class="q-mb-none" style="font-size:17px;">Registro de conexiones:</p> 
                <q-scroll-area style="height: 300px; width: 100%;"> <!-- medida para landfall -->
                <table 
                    id="tabla"
                    v-if="userStore.usuario[7].length > 0"
                    style="width: 100%;"
                >
                    <tr class="rowsConexiones">
                        <th class="cabecera" style="border: 1px solid #fb6d3a70; padding: 8px;" >Nombre</th>
                        <th class="cabecera" style="border: 1px solid #fb6d3a70; padding: 8px;" >Rut</th>
                        <th class="cabecera" style="border: 1px solid #fb6d3a70; padding: 8px;" >Fecha/hora</th>
                        <th class="cabecera" style="border: 1px solid #fb6d3a70; padding: 8px;" >Tiempo de conexión</th>
                        <th class="cabecera" style="border: 1px solid #fb6d3a70; padding: 8px;" >Correo</th>
                        <th class="cabecera" style="border: 1px solid #fb6d3a70; padding: 8px;" >Curso</th>
                    </tr>
                    <tr class="rowsConexiones" v-for="(registro, index) in registros" :key="index">
                        <td style="border: 1px solid #fb6d3a70; padding: 8px;" > {{userStore.usuario[0]}} </td>
                        <td style="border: 1px solid #fb6d3a70; padding: 8px;" > {{userStore.usuario[1]}} </td>
                        <td style="border: 1px solid #fb6d3a70; padding: 8px;" > {{registro.fecha}} </td>
                        <td style="border: 1px solid #fb6d3a70; padding: 8px;" > {{registro.horas}} horas y {{registro.minutos}} minutos </td>
                        <td style="border: 1px solid #fb6d3a70; padding: 8px;" > {{userStore.usuario[2]}} </td>
                        <td style="border: 1px solid #fb6d3a70; padding: 8px;" > {{aulaStore.curso.titulo}} </td>
                    </tr>
                </table>

                <!-- TABLA NOTAS -->
                <div v-if="userStore.usuario[8].length > 0"  class="q-mt-md">
                    <p class="q-mb-none" style="font-size:17px;">Registro de evaluaciones:</p>
                </div>
                <table
                    v-if="userStore.usuario[8].length > 0"
                    id="notas"
                    style="width: 100%;"
                >
                    <tr>
                        <th style="border: 1px solid #fb6d3a70; padding: 8px;" >Nombre</th>
                        <th style="border: 1px solid #fb6d3a70; padding: 8px;" >Rut</th>
                        <th style="border: 1px solid #fb6d3a70; padding: 8px;" >Módulo</th>
                        <th style="border: 1px solid #fb6d3a70; padding: 8px;" >Nota</th>
                        <th style="border: 1px solid #fb6d3a70; padding: 8px;" >Intentos</th>
                        <th style="border: 1px solid #fb6d3a70; padding: 8px;" >Fecha/hora</th>
                    </tr>
                    <tr v-for="nota in userStore.usuario[8]" >
                        <td style="border: 1px solid #fb6d3a70; padding: 8px;" > {{userStore.usuario[0]}} </td>
                        <td style="border: 1px solid #fb6d3a70; padding: 8px;" > {{userStore.usuario[1]}} </td>
                        <td style="border: 1px solid #fb6d3a70; padding: 8px;" > Evaluación Final {{nota.modulo}} </td>
                        <td style="border: 1px solid #fb6d3a70; padding: 8px;" > {{nota.nota}} </td>
                        <td style="border: 1px solid #fb6d3a70; padding: 8px;" > {{nota.intento}} </td>
                        <td style="border: 1px solid #fb6d3a70; padding: 8px;" > {{nota.fecha}} </td>
                    </tr>
                </table>


                <div v-if="userStore.usuario[7].length === 0" class="flex column justify-center items-center">
                    <h6>Aún no existen registros</h6>
                    <div class="sindatos"></div>
                    
                </div>

                </q-scroll-area>
                <!-- BOTON EXPORTAR PDF -->
                <div class="q-mt-md" v-if="userStore.usuario[7].length > 0">

                    <!-- <q-btn class="text-black" color="cyan-5" icon="picture_as_pdf" label="Enviar reporte de avance" glossy @click="reporte = true" /> --> <!-- @click="reporte = true" // @click="getCSV" -->
                    
                    <!-- <q-btn class="text-white" color="red" icon="" label="SINCRONIZAR" glossy @click="sincronizar" /> -->

                    <q-dialog 
                        v-model="reporte" 
                        full-width
                        full-height
                        persistent
                    >
                        <q-card class="column full-height">
                            <q-card-section>
                                <div class="text-h6"> Tutorial para enviar reporte de avance</div>
                            </q-card-section>

                            <q-card-section class="col q-pt-none">
                                <iframe  
                                    src="Tutorial.html" 
                                    style="width: 100%; height: 100%;"
                                    frameborder="0">
                                </iframe>
                            </q-card-section>

                            <q-card-actions align="between">
                                <div>
                                    <q-btn class="text-black q-ml-sm" color="teal-13" icon="picture_as_pdf" label="Descargar pdf" @click="getPDF" />
                                    <q-btn class="q-ml-sm" color="red" icon="mail_outline" label="Enviar correo" :href="href" /> 
                                </div>
            
                                <q-btn label="Volver" color="secondary" v-close-popup />
                            </q-card-actions>
                        </q-card>
                    </q-dialog>

                    

                </div>
            
            </div>
        </div>
        
    </q-page>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { onMounted, ref } from "vue";
import { useUserStore } from "../stores/userStore";
import { useAvanceStore } from "../stores/avanceStore";
import { useAulaStore } from "../stores/aulaStore";

const reporte = ref(false)
const userStore = useUserStore()
const aulaStore = useAulaStore()
const registros = ref([])
const href = ref(`mailto:gestion@sustantiva.cl?subject=Avances - Curso: ${aulaStore.curso.titulo} - Rut: ${userStore.usuario[1]}&body=Estimado, se adjunta información de avance, Atte. ${userStore.usuario[0]}  (NO OLVIDE ADJUNTAR SU REPORTE)`)

function obtenerRegistros(){
    registros.value = userStore.usuario[7]
    console.log( 'registros desde perfil' ,registros.value);
}

const horasFinal = ref(null)
const minutosFinal = ref(null)
function obtenerTotal(){
    const arrayHoras = []
    const arrayMinutos = []
    userStore.usuario[7].forEach(tiempo => {
    arrayHoras.push(tiempo.horas)
    arrayMinutos.push(tiempo.minutos)
    });  
    const totalMinutos = arrayMinutos.reduce((a, b) => a + b, 0)

    if (totalMinutos > 59) {
        let cociente = Math.floor(totalMinutos/60)
        arrayHoras.push(cociente)
        let resto = totalMinutos % 60
        minutosFinal.value = resto
        const totalHoras = arrayHoras.reduce((a, b) => a + b, 0)
        horasFinal.value = totalHoras
    } else if (totalMinutos < 60) {
        minutosFinal.value = totalMinutos
        horasFinal.value = 0
    }
}

const avanceStore = useAvanceStore()
const progreso = ref(0)

const labelProgreso = computed(()=>
  (progreso.value * 100).toFixed(2) + '%'
)

onMounted(()=>{
    obtenerRegistros()

    if (avanceStore.barra === null) {
    progreso.value = 0
    } else if (avanceStore.barra > 98.5 ){
    progreso.value = 1
    } else {
    progreso.value = avanceStore.barra / 100
    }
 
    obtenerTotal()
})

function getPDF(){

    // FECHA
    const day = new Date()
    const fecha = `${day.getDate()}-${day.getMonth()+1}-${day.getFullYear()}`


    //FUNCIÓN PARA EXPORTAR PDF EN PLATAFORMA ANDROID - no sirve en modo dev normal (en WINDOWS tira error)
    const name = `avance-${fecha}`.toString()
    console.log(name);

    let options = {
        documentSize: 'A4',
        type: 'share',
        fileName: name
    }

    if (userStore.usuario[8].length === 0 ) {
        let tabla = document.querySelector('#tabla').outerHTML
        const dato = document.querySelector("#tiempoFinal").innerHTML
        const progress = 'avance curso: '+labelProgreso.value.toString()

        pdf.fromData(`<html> <h4><strong> ${dato}, ${progress} </strong></h4> <br><br> <p>REGISTRO DE CONEXIONES</p> <br><br> ${tabla} </html>` , options)
        .then((stats)=> console.log('status', stats))
        .catch((err)=> console.log(err))       // SI FUNCIONA
    } else if (userStore.usuario[8].length > 0) {
        let tabla = document.querySelector('#tabla').outerHTML
        let listaNotas = document.querySelector('#notas').outerHTML
        const dato = document.querySelector("#tiempoFinal").innerHTML
        const progress = 'avance curso: '+labelProgreso.value.toString()

        pdf.fromData(`<html> <h4><strong> ${dato}, ${progress} </strong></h4> <br><br>  <p>REGISTRO DE EVALUACIONES</p> <br><br> ${listaNotas} <br><br> <p>REGISTRO DE CONEXIONES</p> <br><br> ${tabla} </html>` , options)
        .then((stats)=> console.log('status', stats))
        .catch((err)=> console.log(err))
    }
 
}
/* FUNCION EXPORTAR EXCEL - SOLO EN WINDOWS */
/* function getCSV(){
    //variable para almacenar la data del csv final
    var csv_data = []

    //obtener datos de filas
    var rows = document.getElementsByTagName('tr')
    for (let i = 0; i < rows.length; i++) {
        //obtener datos de cada columna
        var cols = rows[i].querySelectorAll('td,th');

        //Guardar cada dato de fila
        var csvrow = []
        for (let j = 0; j < cols.length; j++) {
            //Obtener el texto de cada celda de una fila
            //y enviarla hacia csvrow
            csvrow.push(cols[j].innerHTML);
        }
        // Combinar cada valor de columna con comas
        csv_data.push(csvrow.join(","));  
    }
    // Combinar cada dato de fila con nueva linea 
    csv_data = csv_data.join('\n');

    // Crear objeto archivo CSV  con los datos de csv_data
    var CSVFile = new Blob([csv_data], {type: "text/csv"});

    //crear link temporal para iniciar el proceso de descarga
    var temp_link = document.createElement('a')

    // descargar archivo csv
    temp_link.download = "prueba.csv";
    var url = window.URL.createObjectURL(CSVFile);
    temp_link.href = url;

    //este link no deberia mostrarse
    temp_link.style.display = "none";
    document.body.appendChild(temp_link);

    // click al link automatico
    temp_link.click();
    document.body.removeChild(temp_link);

    reporte.value = true;
} */

/* function sincronizar(){
    if (navigator.onLine) {
        console.log('DISPOSITIVO ESTÁ ONLINE');

        try {
            fetch('https://energiza-api.herokuapp.com/api/alumnos')
            .then(res=> res.json())
            .then(data=> datosApi(data))
        } catch (error) {
            console.log(error);
        }

    } else { console.log('DISPOSITIVO OFFLINE'); }
}

async function datosApi(data){
    console.log('datos desde api: ', data);
    console.log('length de api: ', data.length);

    const alumno = {
        nombre: userStore.usuario[0],
        rut: userStore.usuario[1],
        email: userStore.usuario[2],
        curso: aulaStore.curso.titulo,
        avance: userStore.usuario[6],
        tiempoConexion: horasFinal.value + ' horas, ' + minutosFinal.value + ' minutos.',
        conexiones: userStore.usuario[7],
        evaluaciones: userStore.usuario[8]
    }

    console.log('alumno: ', alumno);

    let user = data.filter( element => 
        element.rut === userStore.usuario[1] && element.curso === aulaStore.curso.titulo
    )

    console.log("Alumno filtrado: ", user);

    if (user.length === 0) {
        try {
            fetch('https://energiza-api.herokuapp.com/api/nuevo-alumno', {
                method: "POST",
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(alumno)
            })
            .then(res=> res.json())
            .then(data=> console.log('POST: ', data, 'DATA ID: ', data._id))
        } catch (error) {
            console.log(error);
        }
    } else if (user.length > 0) {
        try {
            fetch(`https://energiza-api.herokuapp.com/api/alumno/${user[0]._id}`, {
                method: "PUT",
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(alumno)
            })
            .then(res=> res.json())
            .then(data=> console.log('PUT: ', data, 'DATA ID: ', data._id))
        } catch (error) {
            console.log(error);
        }
    }

    

} */

/* for (let i = 0; i < data.length; i++) {
        const element = data[i];

        if (!element.rut.includes(userStore.usuario[1]) && !element.curso.includes(aulaStore.curso.titulo)) {
            try {
                fetch('https://energiza-api.herokuapp.com/api/nuevo-alumno', {
                    method: "POST",
                    headers: {'Content-type': 'application/json'},
                    body: JSON.stringify(alumno)
                })
                .then(res=> res.json())
                .then(data=> console.log('POST: ', data, 'DATA ID: ', data._id))
            } catch (error) {
                console.log(error);
            }
        } else if (element.rut === userStore.usuario[1] && element.curso === aulaStore.curso.titulo) {
            try {
                fetch(`https://energiza-api.herokuapp.com/api/alumno/${element._id}`, {
                    method: "PUT",
                    headers: {'Content-type': 'application/json'},
                    body: JSON.stringify(alumno)
                })
                .then(res=> res.json())
                .then(data=> console.log('PUT: ', data, 'DATA ID: ', data._id))
            } catch (error) {
                console.log(error);
            }
        }
        
    } */



</script>

<style>
.pagina{
    border-radius: 32px 32px 32px 32px;
}
table{
    border-collapse: collapse;
}

tr:nth-child(even) {
    background-color: #fb6d3a93;
}
.pdf{
    padding-left: 1em;
    padding-right: 1em;
    color: black;
    font-size: 18px;
    background-color: #1de9b6;
    text-decoration: none;
    border-radius: 25px;
}
.sindatos{ 
    background: url("assets/sindatos.png");
    background-size: cover;
    width: 150px;
    height: 150px;
}
.gifPerfil{ 
  background: url("assets/triunfo.gif");
  background-size: cover;
  width: 350px;
  height: 300px;
}

</style>
