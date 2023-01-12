import { defineStore } from "pinia";
import { useAvanceStore } from "./avanceStore";

export const useAulaStore = defineStore('aulaStore', {
    state: () => ({
        datosCurso: null,
        datosModulo: null,
        datosLeccion: null,

        /* CARGAR EL CURSO AQUI */
        /* DENTRO DEL ARRAY modulos AGREGAR TANTOS MÓDULOS (OBJETOS) COMO SE NECESITE, REPITIENDO LA MISMA ESTRUCTURA COMO EN EL EJEMPLO */
        /* DENTRO DE CADA MÓDULO, EN EL APARTADO presentaciones SOLO DEBE IR UNA PRESENTACIÓN.   */
        /* DENTRO DE CADA MÓDULO, EN EL APARTADO lecciones AGREGAR TANTAS LECCIONES (OBJETOS) COMO SE NECESITE, REPITIENDO LA MISMA ESTRUCTURA COMO EN EL EJEMPLO */
        /* DENTRO DE CADA LECCIÓN HACER LO MISMO CON videos, textos, imagenes y ejercicios,  */
        curso: {
            titulo: "Curso 2 prueba",
            subtitulo: "Lorem ipsum dolor(no requerido)",
            descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
            modulos: [
                {
                    titulo: "Lorem ipsum",
                    subtitulo: "Módulo 0",
                    numero: "0",
                    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
                    descripcion2: "Cantidad de horas: 0 hrs.",
                    presentaciones: {
                        nombre: "Presentación",
                        ruta: [
                            "curso/Texto-ejemplo-M0.html"
                        ]
                    },
                    lecciones: [
                        {
                            titulo: "Cómo utilizar la Tablet",
                            numero: "1",
                            subtitulo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
                            videos: [],
                            imagenes: [
                                {
                                    nombre: "Guía de navegación",
                                    ruta: "curso/Texto-ejemplo-M0.html"
                                },
                                {
                                    nombre: "Temario de Curso",
                                    ruta: "curso/Texto-ejemplo-M0.html"
                                }
                            ],
                            textos: [],
                            ejercicios: []
                        }
                    ]
                },
                {
                    titulo: "Lorem ipsum",
                    subtitulo: "Módulo 1",
                    numero: "1",
                    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
                    descripcion2: "Cantidad de horas: 23 hrs.",
                    presentaciones: {
                        nombre: "Presentación",
                        ruta: [
                            "curso/Texto-ejemplo-M0.html" /* LAS CARPETAS PARA ALOJAR ARCHIVOS (IMÁGENES,VIDEOS,H5P) DEBEN ESTAR DENTRO DE LA CARPETA PUBLIC */
                        ]
                    },
                    lecciones: [
                        {
                            titulo: "Lorem ipsum 1", /* no repetir mismo nombre con otras leeciones */
                            numero: "1",
                            subtitulo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
                            videos: [
                                {
                                    nombre: "video 1 Lorem ipsum", /* no repetir mismo nombre con otros recursos */
                                    descripcion: "Aqui va la descripción-no requerido",
                                    ruta: "curso/test-video.mp4" /* LAS CARPETAS PARA ALOJAR ARCHIVOS (IMÁGENES,VIDEOS,H5P) DEBEN ESTAR DENTRO DE LA CARPETA PUBLIC */
                                },
                                {
                                    nombre: "video 2 Lorem ipsum",
                                    descripcion: "Aqui va la descripción-no requerido",
                                    ruta: "curso/test-video.mp4"
                                }

                            ],
                            textos: [
                                {
                                    titulo: "Texto Lorem ipsum",
                                    descripcion: "",
                                    ruta: "curso/Texto-ejemplo-M0.html" /* LAS CARPETAS PARA ALOJAR ARCHIVOS (IMÁGENES,VIDEOS,H5P) DEBEN ESTAR DENTRO DE LA CARPETA PUBLIC */
                                }
                            ],
                            imagenes: [
                                {
                                    nombre: "Imagen Lorem ipsum",
                                    descripcion: "",
                                    ruta: "curso/Texto-ejemplo-M0.html"
                                }
                            ],
                            ejercicios: [
                                {
                                    nombre: "Ejercicio Lorem ipsum",
                                    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                                    ruta: "curso/Texto-ejemplo-M0.html"
                                }

                            ]
                        },
                        {
                            titulo: "Lorem ipsum 2",
                            numero: "2",
                            subtitulo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
                            videos: [
                                {
                                    nombre: "video 1 Lorem ipsum",
                                    descripcion: "Aqui va la descripción-no requerido",
                                    ruta: "curso/test-video.mp4"
                                },
                                {
                                    nombre: "video 2 Lorem ipsum",
                                    descripcion: "Aqui va la descripción-no requerido",
                                    ruta: "curso/test-video.mp4"
                                }

                            ],
                            textos: [
                                {
                                    titulo: "Texto Lorem ipsum",
                                    descripcion: "",
                                    ruta: "curso/Texto-ejemplo-M0.html"
                                }
                            ],
                            imagenes: [
                                {
                                    nombre: "Imagen Lorem ipsum",
                                    descripcion: "",
                                    ruta: "curso/Texto-ejemplo-M0.html"
                                }
                            ],
                            ejercicios: [
                                {
                                    nombre: "Ejercicio Lorem ipsum",
                                    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                                    ruta: "curso/Texto-ejemplo-M0.html"
                                }

                            ]
                        },
                        {   /* LAS PRUEBAS FINALES DE MÓDULO SE DEBEN AGREGAR COMO UNA LECCIÓN MÁS AL FINAL DENTRO DEL MÓDULO, PERO AGREGANDO LA PROPIEDAD preguntas Y DENTRO DE ELLA UN OBJETO CON nombre: "Prueba Final" */
                            /* SI SE VA AGREGAR, RECORDAR INGRESAR MANUALMENTE EL TEST EN LA PLANTILLA Leccion.vue en la carpeta components/Aula */
                            /* SI EL MÓDULO NO TIENE PRUEBA FINAL, OMITIR ESTA ÚLTIMA LECCIÓN, COMO EN EL EJEMPLO DEL MÓDULO 0 */
                            titulo: "Lorem ipsum Evaluación",
                            modulo: "Módulo 1",
                            numero: "3",
                            subtitulo: "",
                            videos: [],
                            imagenes: [],
                            textos: [],
                            ejercicios: [],
                            preguntas: [{ nombre: "Prueba Final" }]
                        }
                    ]
                }
            ]
        }
    }),
    getters: {

    },
    actions: {
        loadData() {
            const avanceStore = useAvanceStore()
            this.datosCurso = this.curso
            avanceStore.getDatos(this.datosCurso)
        },
        getModulo(modulo) {
            this.datosModulo = modulo
        },
        getLeccion(leccion) {
            this.datosLeccion = leccion
        }
    }
})