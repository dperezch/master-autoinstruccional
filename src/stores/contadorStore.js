import { defineStore } from "pinia";
import { useRegistroStore } from "./registroStore";

export const useContadorStore = defineStore('contadorStore', {
    state: () => ({
        intervalo: null,
        segundos: 0,
        minutos: 0,
        horas: 0,
        info: '',
        date: ''
    }),
    getters: {

    },
    actions: {
        comenzarContador(tiempo) {
            var intervalo = setInterval(() => {
                tiempo++
                if (tiempo < 10) {
                    tiempo = '0' + tiempo
                }
                if (tiempo === 60) {
                    this.setMinutos()
                    tiempo = 0
                }
                this.setTiempo(tiempo)
                this.comenzarTiempo(intervalo)
            }, 1000)

            let date = new Date().toLocaleDateString();
            let hours = new Date().getHours()
            let minutes = new Date().getMinutes()
            this.date = date + '- ' + hours + ':' + minutes + ' hrs'

        },
        setMinutos() {
            this.minutos++
            if (this.minutos < 10) {
                this.minutos = '0' + this.minutos
            }
            if (this.minutos === 60) {
                this.horas++
                this.minutos = 0
            }
        },
        setTiempo(tiempo) {
            this.segundos = tiempo
        },
        comenzarTiempo(intervalo) {
            this.intervalo = intervalo
        },
        pararTiempo() {
            const registroStore = useRegistroStore()
            clearInterval(this.intervalo)
            registroStore.getDate(this.date)
            registroStore.getHoras(this.horas)
            registroStore.getMinutos(this.minutos)
            registroStore.setTiempoConexion()
            this.info = 'Estuviste este tiempo: ' + this.horas + ' horas, ' + this.minutos + ' minutos y ' + this.segundos + ' segundos.'
            this.intervalo = null
            this.segundos = 0
            this.minutos = 0
            this.horas = 0
            this.date = ''
        }
    }
})