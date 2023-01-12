<template>
    <div class="poppins-font" id="cuestionario">
        <div class="pregunta">
            <div class="q-ml-sm">
                <p class="text-weight-bold">1° Pregunta</p>
                <div class="imagen2"></div>
                <p>Respecto de la tabla, ¿Cuál Sería el resultado de la formula =SUMA(PROMEDIO(F4:F9);MAX(H4:H9))?</p>
            </div>
            <div>
                <q-list id="lista1">
                    <q-item >
                        <q-radio v-model="res.r1" val="opcion a" label="- 26,683333" />
                    </q-item>
                    <q-item >
                        <q-radio v-model="res.r1" val="opcion b" label="- 25.69888" />
                    </q-item>
                    <q-item >
                        <q-radio v-model="res.r1" val="opcion c" label="- No es posible mezclar formulas" />
                    </q-item>
                </q-list>
            </div>
        </div>

        <br>

        <div class="pregunta">
            <div class="q-ml-sm">
                <p class="text-weight-bold">2° Pregunta</p>
                <p>¿Es posible combinar y centrar varias celdas con datos?</p>
            </div>
            <div>
                <q-list id="lista2">
                    <q-item >
                        <q-radio v-model="res.r2" val="opcion a" label="- Si, dejaría los datos de la primera celda" />
                    </q-item>
                    <q-item >
                        <q-radio v-model="res.r2" val="opcion b" label="- Si, junta todos los datos en la celda combinada" />
                    </q-item>
                    <q-item >
                        <q-radio v-model="res.r2" val="opcion c" label="- No, saldría un cuadro de error" />
                    </q-item>
                </q-list>
            </div>
        </div>

        <br>

        <div class="pregunta">
            <div class="q-ml-sm">
                <p class="text-weight-bold">3° Pregunta</p>
                <div class="imagen3"></div>
                <p>En la tabla de la imagen, la que ya tiene formato tabla, como quedaría la fórmula para sumar las edades</p>
            </div>
            <div>
                <q-list id="lista3">
                    <q-item >
                        <q-radio v-model="res.r3" val="opcion a" label="- =SUMA(Tabla1[Edad])" />
                    </q-item>
                    <q-item >
                        <q-radio v-model="res.r3" val="opcion b" label="- =Suma(Edad)" />
                    </q-item>
                    <q-item >
                        <q-radio v-model="res.r3" val="opcion c" label="- =Suma(Tabla1[F4:F9])" />
                    </q-item>
                </q-list>
            </div>
        </div>

        <br>

        <div class="pregunta">
            <div class="q-ml-sm">
                <p class="text-weight-bold">4° Pregunta</p>
                <p>¿Cuál es la función del formato Condicional?</p>
            </div>
            <div>
                <q-list id="lista4">
                    <q-item >
                        <q-radio v-model="res.r4" val="opcion a" label="- Cambiar automáticamente el estilo según nuestros gustos" />
                    </q-item>
                    <q-item >
                        <q-radio v-model="res.r4" val="opcion b" label="- Establece condiciones a las celdas para mostrar o no sus datos" />
                    </q-item>
                    <q-item >
                        <q-radio v-model="res.r4" val="opcion c" label="- Establece cambios de estilo a las celdas según una condición " />
                    </q-item>
                </q-list>
            </div>
        </div>

        <br>

        <div class="pregunta">
            <div class="q-ml-sm">
                <p class="text-weight-bold">5° Pregunta</p>
                <p>¿Se pueden aplicar dos filtros a una misma tabla?</p>
            </div>
            <div>
                <q-list id="lista5">
                    <q-item >
                        <q-radio v-model="res.r5" val="opcion a" label="- Si, Excel ordena según el orden en que se pusieron los filtros" />
                    </q-item>
                    <q-item >
                        <q-radio v-model="res.r5" val="opcion b" label="- No, muestra un cuadro de error" />
                    </q-item>
                    <q-item >
                        <q-radio v-model="res.r5" val="opcion c" label="- Sí, Pero Excel borra automáticamente el filtro anterior" />
                    </q-item>
                </q-list>
            </div>
        </div>

        <br>

        <div class="pregunta">
            <div class="q-ml-sm">
                <p class="text-weight-bold">6° Pregunta</p>
                <p>En la formula =SUMA($A$1;$B$1) La referencia es de tipo</p>
            </div>
            <div>
                <q-list id="lista6">
                    <q-item >
                        <q-radio v-model="res.r6" val="opcion a" label="- Relativa" />
                    </q-item>
                    <q-item >
                        <q-radio v-model="res.r6" val="opcion b" label="- Absoluta" />
                    </q-item>
                    <q-item >
                        <q-radio v-model="res.r6" val="opcion c" label="- Mixta" />
                    </q-item>
                </q-list>
            </div>
        </div>

        <div class="pregunta">
            <div class="q-ml-sm">
                <p class="text-weight-bold">7° Pregunta</p>
                <p>¿Es posible eliminar un nombre en uso?</p>
            </div>
            <div>
                <q-list id="lista7">
                    <q-item >
                        <q-radio v-model="res.r7" val="opcion a" label="- No, envía un cuadro de error" />
                    </q-item>
                    <q-item >
                        <q-radio v-model="res.r7" val="opcion b" label="- Sí, pero las fórmulas que usaron ese nombre tendrán errores" />
                    </q-item>
                    <q-item >
                        <q-radio v-model="res.r7" val="opcion c" label="- No se pueden borrar los nombres ya creados" />
                    </q-item>
                </q-list>
            </div>
        </div>

        <div class="pregunta">
            <div class="q-ml-sm">
                <p class="text-weight-bold">8° Pregunta</p>
                <p>Si creamos un nombre edad que contiene varias edades, al usarlo para sacar el promedio de las edades la formula quedaría?</p>
            </div>
            <div>
                <q-list id="lista8">
                    <q-item >
                        <q-radio v-model="res.r8" val="opcion a" label="- =PROMEDIO[Edad]" />
                    </q-item>
                    <q-item >
                        <q-radio v-model="res.r8" val="opcion b" label="- =PROMEDIO(Edad)" />
                    </q-item>
                    <q-item >
                        <q-radio v-model="res.r8" val="opcion c" label="- =PROMEDIO(Nombre.Edad)" />
                    </q-item>
                </q-list>
            </div>
        </div>

        <div class="pregunta">
            <div class="q-ml-sm">
                <p class="text-weight-bold">9° Pregunta</p>
                <p>¿Es posible sumar un rango de celdas que cumplen una condición dada?</p>
            </div>
            <div>
                <q-list id="lista9">
                    <q-item >
                        <q-radio v-model="res.r9" val="opcion a" label="- Si, Mediante la Función Sumar.si" />
                    </q-item>
                    <q-item >
                        <q-radio v-model="res.r9" val="opcion b" label="- Si, usando dos funciones a la vez " />
                    </q-item>
                    <q-item >
                        <q-radio v-model="res.r9" val="opcion c" label="- No, solo podemos usar la fórmula uno a uno " />
                    </q-item>
                </q-list>
            </div>
        </div>

        <div class="pregunta">
            <div class="q-ml-sm">
                <p class="text-weight-bold">10° Pregunta</p>
                <p>¿En las funciones de texto Excel tiene asistentes que nos apoyen a crear la formula?</p>
            </div>
            <div>
                <q-list id="lista10">
                    <q-item >
                        <q-radio v-model="res.r10" val="opcion a" label="- No, solo se crean presionando el botón deseado" />
                    </q-item>
                    <q-item >
                        <q-radio v-model="res.r10" val="opcion b" label="- Si, Pero no explica que valores entregarle" />
                    </q-item>
                    <q-item >
                        <q-radio v-model="res.r10" val="opcion c" label="- Si, Cuenta con un asistente que nos guía a usar la fórmula correctamente " />
                    </q-item>
                </q-list>
            </div>
        </div>

        <br>

        <div>
            <q-btn v-if="contestar" :disable="btnResolve" color="secondary" text-color="white" label="Enviar Respuesta" @click="resolve" />
            <q-btn v-if="clean" class="q-ml-md" color="warning" text-color="black" label="Limpiar respuestas" @click="limpiar" />
        </div>

        <q-dialog v-model="alert" persistent>
            <q-card class="bg-red text-white">
                <q-card-section>
                    <div class="text-h6">Puedes hacerlo mejor!</div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                    Debes tener al menos un 65% de respuestas correctas, inténtalo nuevamente!
                </q-card-section>

                <q-card-actions align="right" class="bg-white">
                    <q-btn flat label="OK" color="primary" v-close-popup />
                </q-card-actions>
            </q-card>
        </q-dialog>

        <q-dialog v-model="success" persistent>
            <q-card class="bg-warning text-black">
                <q-card-section>
                    <div class="text-h6">Muy bien!!</div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                    Lograste una puntuación mayor al 65%, sigue así.
                </q-card-section>

                <q-card-actions align="right" class="bg-white text-black">
                    <q-btn flat label="OK" color="primary" v-close-popup @click="success3 = true" />
                </q-card-actions>
            </q-card>
        </q-dialog>

        <q-dialog v-model="success2" persistent>
            <q-card class="bg-positive text-white">
                <q-card-section>
                    <div class="text-h6">Felicitaciones!!</div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                    Aprobaste con el 100%.
                </q-card-section>

                <q-card-actions align="right" class="bg-white text-black">
                    <q-btn flat label="OK" color="primary" v-close-popup @click="success3 = true" />
                </q-card-actions>
            </q-card>
        </q-dialog>

        <q-dialog v-model="success3" persistent>
            <q-card class="bg-secondary text-white">
                <q-card-section>
                    <div class="text-h6">Felicitaciones !!</div>
                </q-card-section>

                <q-card-section class="q-pt-none"> <!-- Aqui agregar manualmente el numero de modulo -->
                    Has aprobado satisfactoriamente el módulo “Fórmulas y Funciones” en sus dos lecciones, ahora podrás pasar al siguiente módulo, “BD y Listas Personalizadas”. ¡Mucho éxito!
                </q-card-section>

                <q-card-actions align="right" class="bg-white text-black">
                    <q-btn flat label="Continuar al siguiente módulo" color="primary" v-close-popup @click="irAula" />
                    <q-btn flat label="Volver a intentarlo" color="primary" v-close-popup />
                </q-card-actions>
            </q-card>
        </q-dialog>
        
    </div>
</template>

<script>
import { mapActions } from "pinia";
import { useUserStore } from "stores/userStore";

export default {
    data(){
        return{
            res: {
                /* Aqui se guardan las opciones que elige el alumno */
                r1: '',
                r2: '',
                r3: '',
                r4: '',
                r5: '',
                r6: '',
                r7: '',
                r8: '',
                r9: '',
                r10: ''
            },
            alert: false,
            success: false,
            success2: false,
            success3: false,
            test: true,
            clean: false,
            contestar: true,
            intentos: [],
            modulo: 'Módulo 1' /* momentaneamente ingresar manual */
        }
    },
    methods: {
        ...mapActions(useUserStore, ['ingresarIntentos']),
        resolve(){
            /* intentos */
            this.intentos.push(1)

            const pregunta = document.querySelectorAll('.pregunta')
            console.log('total de preguntas: ',pregunta.length)
            console.log('total de respuestas: ',Object.keys(this.res).length) 

            var totalPreguntas = pregunta.length;

            var porcentajePregunta = 100 / totalPreguntas //porcentaje que representa cada pregunta

            console.log('este es el porcentaje de cada pregunta: ', porcentajePregunta);

            //respuestas
            var res1 = this.res.r1;
            var res2 = this.res.r2;
            var res3 = this.res.r3;
            var res4 = this.res.r4;
            var res5 = this.res.r5;
            var res6 = this.res.r6;
            var res7 = this.res.r7;
            var res8 = this.res.r8;
            var res9 = this.res.r9;
            var res10 = this.res.r10;
            //var res11 = this.res.r11;
            //var res12 = this.res.r12;


            //Aqui hay que poner las respuestas correctas de cada pregunta
            const apr1 = 'opcion a';
            const apr2 = 'opcion a';
            const apr3 = 'opcion a';
            const apr4 = 'opcion a';
            const apr5 = 'opcion a';
            const apr6 = 'opcion a';
            const apr7 = 'opcion a';
            const apr8 = 'opcion a';
            const apr9 = 'opcion a';
            const apr10 = 'opcion a';
            //const apr11 = 'opcion ';
            //const apr12 = 'opcion ';

            var porcentajes = []

            function createParrafo(texto){
                    let p = document.createElement('p');
                    p.textContent = texto;
                    p.classList.add("feedback")
                    return p;
                }
            const p1 = pregunta[0];
            const p2 = pregunta[1];
            const p3 = pregunta[2];
            const p4 = pregunta[3];
            const p5 = pregunta[4];
            const p6 = pregunta[5];
            const p7 = pregunta[6];
            const p8 = pregunta[7];
            const p9 = pregunta[8];
            const p10 = pregunta[9];
            //const p11 = pregunta[10];
            //const p12 = pregunta[11];

            if (res1 === apr1) { 
                porcentajes.push(porcentajePregunta);
                p1.appendChild(createParrafo(`Muy bien, la respuesta correcta es:  26,683333`)).style.color = "#21BA45";
               
                } else {
                    porcentajes.push(0);
                    p1.appendChild(createParrafo(`La respuesta correcta es:  26,683333`)).style.color = "red";  
                };
            if (res2 === apr2) { 
                porcentajes.push(porcentajePregunta);
                p2.appendChild(createParrafo(`Muy bien, la respuesta correcta es:  No, saldría un cuadro de error`)).style.color = "#21BA45";
                } else {
                    porcentajes.push(0);
                    p2.appendChild(createParrafo(`La respuesta correcta es: No, saldría un cuadro de error`)).style.color = "red"; 
                };
            if (res3 === apr3) { 
                porcentajes.push(porcentajePregunta);
                p3.appendChild(createParrafo(`Muy bien, la respuesta correcta es:  =SUMA(Tabla1[Edad])`)).style.color = "#21BA45";
                } else {
                    porcentajes.push(0);
                    p3.appendChild(createParrafo(`La respuesta correcta es:  =SUMA(Tabla1[Edad])`)).style.color = "red"; 
                };
            if (res4 === apr4) { 
                porcentajes.push(porcentajePregunta);
                p4.appendChild(createParrafo(`Muy bien, la respuesta correcta es: Establece cambios de estilo a las celdas según una condición`)).style.color = "#21BA45";
                } else {
                    porcentajes.push(0);
                    p4.appendChild(createParrafo(`La respuesta correcta es: Establece cambios de estilo a las celdas según una condición`)).style.color = "red"; 
                };
            if (res5 === apr5) { 
                porcentajes.push(porcentajePregunta);
                p5.appendChild(createParrafo(`Muy bien, la respuesta correcta es: Sí, Pero Excel borra automáticamente el filtro anterior`)).style.color = "#21BA45";
                } else {
                    porcentajes.push(0);
                    p5.appendChild(createParrafo(`La respuesta correcta es: Sí, Pero Excel borra automáticamente el filtro anterior`)).style.color = "red";
                };
            if (res6 === apr6) { 
                porcentajes.push(porcentajePregunta);
                p6.appendChild(createParrafo(`Muy bien, la respuesta correcta es: Absoluta`)).style.color = "#21BA45";
                } else {
                    porcentajes.push(0);
                    p6.appendChild(createParrafo(`La respuesta correcta es: Absoluta`)).style.color = "red";
                };
            
            if (res7 === apr7) { 
                porcentajes.push(porcentajePregunta);
                p7.appendChild(createParrafo(`Muy bien, la respuesta correcta es: Sí, pero las fórmulas que usaron ese nombre tendrán errores`)).style.color = "#21BA45";
                } else {
                    porcentajes.push(0);
                    p7.appendChild(createParrafo(`La respuesta correcta es: Sí, pero las fórmulas que usaron ese nombre tendrán errores`)).style.color = "red";
                };
            
            if (res8 === apr8) { 
                porcentajes.push(porcentajePregunta);
                p8.appendChild(createParrafo(`Muy bien, la respuesta correcta es: =PROMEDIO(Edad)`)).style.color = "#21BA45";
                } else {
                    porcentajes.push(0);
                    p8.appendChild(createParrafo(`La respuesta correcta es: =PROMEDIO(Edad)`)).style.color = "red";
                };
            
            if (res9 === apr9) { 
                porcentajes.push(porcentajePregunta);
                p9.appendChild(createParrafo(`Muy bien, la respuesta correcta es: Si, Mediante la Función Sumar.si`)).style.color = "#21BA45";
                } else {
                    porcentajes.push(0);
                    p9.appendChild(createParrafo(`La respuesta correcta es: Si, Mediante la Función Sumar.si`)).style.color = "red";
                };
            
            if (res10 === apr10) { 
                porcentajes.push(porcentajePregunta);
                p10.appendChild(createParrafo(`Muy bien, la respuesta correcta es: Si, Cuenta con un asistente que nos guía a usar la fórmula correctamente`)).style.color = "#21BA45";
                } else {
                    porcentajes.push(0);
                    p10.appendChild(createParrafo(`La respuesta correcta es: Si, Cuenta con un asistente que nos guía a usar la fórmula correctamente`)).style.color = "red";
                };
            
            /* if (res11 === apr11) { 
                porcentajes.push(porcentajePregunta);
                p11.appendChild(createParrafo(`Muy bien, la respuesta correcta es: Registrar todas las actividades que ha realizado...`)).style.color = "#21BA45";
                } else {
                    porcentajes.push(0);
                    p11.appendChild(createParrafo(`La respuesta correcta es: Registrar todas las actividades que ha realizado...`)).style.color = "red";
                };
            
            if (res12 === apr12) { 
                porcentajes.push(porcentajePregunta);
                p12.appendChild(createParrafo(`Muy bien, la respuesta correcta es: Dar tiempo a nuestras necesidades personales, buena alimentación...`)).style.color = "#21BA45";
                } else {
                    porcentajes.push(0);
                    p12.appendChild(createParrafo(`La respuesta correcta es: Dar tiempo a nuestras necesidades personales, buena alimentación...`)).style.color = "red";
                }; */

            //onsole.log(porcentajes)

            var totalRespuestas = porcentajes.reduce((a, b) => a + b, 0); 

            let date = new Date().toLocaleDateString();
            let hours = new Date().getHours()
            let minutes = new Date().getMinutes()
            let fecha = date + '- ' + hours + ':' + minutes + ' hrs'

            console.log('suma porcentaje respuestas: ', totalRespuestas);

            /* CORTE DE % DE PREGUNTAS */
            if (totalRespuestas >= 65 & totalRespuestas < 98) {
                this.success = true;
                this.$emit('success', this.test);
                this.clean = true;
                
                var sumaIntentos = this.intentos.reduce((a, b) => a + b, 0)
                var registroIntentos = {
                    modulo: this.modulo,
                    intento: 'intento n°' + sumaIntentos,
                    nota: totalRespuestas.toFixed(2) + '%',
                    fecha: fecha
                }
                this.ingresarIntentos(registroIntentos)

            } else if (totalRespuestas > 98 ) {
                this.success2 = true;
                this.$emit('success', this.test);
                
                var sumaIntentos = this.intentos.reduce((a, b) => a + b, 0)
                var registroIntentos = {
                    modulo: this.modulo,
                    intento: 'intento n°' + sumaIntentos,
                    nota: totalRespuestas.toFixed(2) + '%',
                    fecha: fecha
                }
                this.ingresarIntentos(registroIntentos)

            } else if (totalRespuestas < 65) {
                this.alert = true;
                this.clean = true;
                
                var sumaIntentos = this.intentos.reduce((a, b) => a + b, 0)
                var registroIntentos = {
                    modulo: this.modulo,
                    intento: 'intento n°' + sumaIntentos,
                    nota: totalRespuestas.toFixed(2) + '%',
                    fecha: fecha
                }
                this.ingresarIntentos(registroIntentos)
            }
            this.contestar = false;

        },
        limpiar(){
            const question = document.querySelectorAll('.pregunta');
            const parrafos = document.querySelectorAll('.feedback');
            for (let index = 0; index < question.length; index++) {
                question[index].removeChild(parrafos[index]);
            };

            var lista1 = document.querySelector('#lista1');
            var lista2 = document.querySelector('#lista2');
            var lista3 = document.querySelector('#lista3');
            var lista4 = document.querySelector('#lista4');
            var lista5 = document.querySelector('#lista5');
            var lista6 = document.querySelector('#lista6');
            var lista7 = document.querySelector('#lista7');
            var lista8 = document.querySelector('#lista8');
            var lista9 = document.querySelector('#lista9');
            var lista10 = document.querySelector('#lista10');
            //var lista11 = document.querySelector('#lista11');
            //var lista12 = document.querySelector('#lista12');

            for (let i = lista1.children.length; i >= 0; i--) {
                lista1.appendChild(lista1.children[Math.random() * i | 0]);
            }
            for (let i = lista2.children.length; i >= 0; i--) {
                lista2.appendChild(lista2.children[Math.random() * i | 0]);
            }
            for (let i = lista3.children.length; i >= 0; i--) {
                lista3.appendChild(lista3.children[Math.random() * i | 0]);
            }
            for (let i = lista4.children.length; i >= 0; i--) {
                lista4.appendChild(lista4.children[Math.random() * i | 0]);
            }
            for (let i = lista5.children.length; i >= 0; i--) {
                lista5.appendChild(lista5.children[Math.random() * i | 0]);
            }
            for (let i = lista6.children.length; i >= 0; i--) {
                lista6.appendChild(lista6.children[Math.random() * i | 0]);
            }
            for (let i = lista7.children.length; i >= 0; i--) {
                lista7.appendChild(lista7.children[Math.random() * i | 0]);
            }
            for (let i = lista8.children.length; i >= 0; i--) {
                lista8.appendChild(lista8.children[Math.random() * i | 0]);
            }
            for (let i = lista9.children.length; i >= 0; i--) {
                lista9.appendChild(lista9.children[Math.random() * i | 0]);
            }
            for (let i = lista10.children.length; i >= 0; i--) {
                lista10.appendChild(lista10.children[Math.random() * i | 0]);
            }
            /* for (let i = lista11.children.length; i >= 0; i--) {
                lista11.appendChild(lista11.children[Math.random() * i | 0]);
            }
            for (let i = lista12.children.length; i >= 0; i--) {
                lista12.appendChild(lista12.children[Math.random() * i | 0]);
            } */

            this.res.r1 = '';
            this.res.r2 = '';
            this.res.r3 = '';
            this.res.r4 = '';
            this.res.r5 = '';
            this.res.r6 = '';
            this.res.r7 = '';
            this.res.r8 = '';
            this.res.r9 = '';
            this.res.r10 = '';
            //this.res.r11 = '';
            //this.res.r12 = '';

            this.clean = false;
            this.contestar = true;
        },
        irAula(){
            this.$router.push('/aula')
        }
    },
    computed: {
        btnResolve(){
            if (
                this.res.r1 === '' || 
                this.res.r2 === '' || 
                this.res.r3 === '' || 
                this.res.r4 === '' || 
                this.res.r5 === '' || 
                this.res.r6 === '' ||
                this.res.r7 === '' ||
                this.res.r8 === '' ||
                this.res.r9 === '' ||
                this.res.r10 === '' 
                //this.res.r11 === '' ||
                //this.res.r12 === '' 
                ) {
               return true
            } else {return false}
        }
    }
    
}
</script>

<style>
.imagen2{
    background: url("assets/Imagen1.jpg");
    background-size: cover;
    width: 700px;
    height: 200px;
}
.imagen3{
    background: url("assets/Imagen2.jpg");
    background-size: cover;
    width: 700px;
    height: 200px;
}
</style>