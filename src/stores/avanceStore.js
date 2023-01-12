import { defineStore } from "pinia";
import { useUserStore } from "./userStore";

export const useAvanceStore = defineStore('avanceStore', {
    state: () => ({
        datos: null,
        modulos: null,
        lecciones: [],
        valorCurso: 100,
        valorModulo: null,
        valorLeccion: null,

        recursos: [],
        listaRecursos: [],
        valorRecurso: null,

        lista: [],
        arrayBarra: [],
        barra: null
    }),
    getters: {

    },
    actions: {
        getDatos(datos) {
            this.datos = datos
            this.valorModulo = this.valorCurso / this.datos.modulos.length

            if (this.modulos === null) {
                this.modulos = this.datos.modulos
                this.modulos.forEach(modulo => {
                    this.lecciones.push(modulo.lecciones.length)
                    const mod = modulo.subtitulo
                    modulo.lecciones.forEach(leccion => {
                        const mod2 = leccion.titulo
                        this.lista.push(mod + ' ' + mod2)
                        this.recursos.push(leccion.videos.length)
                        this.recursos.push(leccion.imagenes.length)
                        this.recursos.push(leccion.textos.length)
                        this.recursos.push(leccion.ejercicios.length)

                        if (leccion.preguntas) {
                            this.recursos.push(leccion.preguntas.length)
                            leccion.preguntas.forEach(pregunta => {
                                this.listaRecursos.push(mod + ' ' + mod2 + ' ' + pregunta.nombre)
                            })
                        }

                        leccion.videos.forEach(video => {
                            this.listaRecursos.push(mod + ' ' + mod2 + ' ' + video.nombre)
                        })

                        leccion.imagenes.forEach(imagen => {
                            this.listaRecursos.push(mod + ' ' + mod2 + ' ' + imagen.nombre)
                        })

                        leccion.textos.forEach(texto => {
                            this.listaRecursos.push(mod + ' ' + mod2 + ' ' + texto.titulo)
                        })

                        leccion.ejercicios.forEach(ejercicio => {
                            this.listaRecursos.push(mod + ' ' + mod2 + ' ' + ejercicio.nombre)
                        })


                    });

                });

                const totalLecciones = this.lecciones.reduce((a, b) => a + b, 0)
                const valor = (this.valorCurso / totalLecciones).toFixed(2)
                this.valorLeccion = parseFloat(valor)
                const totalRecursos = this.recursos.reduce((a, b) => a + b, 0)
                const valorRecurso = (this.valorCurso / totalRecursos).toFixed(2)
                this.valorRecurso = parseFloat(valorRecurso)
            }

        },
        avanceBarra(modulo, leccion) {
            const userStore = useUserStore()
            const buscar = modulo + ' ' + leccion
            if (userStore.usuario[5].find(element => element == buscar)) {
                const newArray = userStore.usuario[5].filter(element => element != buscar)
                userStore.usuario[5] = newArray
                localStorage.setItem('listaUsuarios', JSON.stringify(userStore.listaUsuarios))
            } else { console.log('no existe'); }
        },
        avanceBarraRecursos(modulo, leccion, recurso) {
            const userStore = useUserStore()
            const buscarRecurso = modulo + ' ' + leccion + ' ' + recurso

            if (userStore.usuario[9].find(element => element == buscarRecurso)) {
                const newArrayRecursos = userStore.usuario[9].filter(element => element != buscarRecurso)
                if (this.barra === null) {
                    this.arrayBarra.push(this.valorRecurso)
                    const total = this.arrayBarra.map(c => parseFloat(c)).reduce((a, b) => a + b, 0);
                    this.barra = parseFloat(total.toFixed(2))
                } else {
                    this.arrayBarra.push(this.barra)
                    this.barra = null
                    this.arrayBarra.push(this.valorRecurso)
                    const total = this.arrayBarra.map(c => parseFloat(c)).reduce((a, b) => a + b, 0);
                    this.barra = parseFloat(total.toFixed(2))
                    this.arrayBarra = []
                }
                userStore.usuario[9] = newArrayRecursos
                userStore.usuario[6] = this.barra
                localStorage.setItem('listaUsuarios', JSON.stringify(userStore.listaUsuarios))
            } else {
                console.log('recurso no existe');
            }
        },
        getBarra() {
            const userStore = useUserStore()
            this.barra = userStore.usuario[6]
        }
    }

})