import { defineStore } from "pinia";
import { useUserStore } from "./userStore";

export const useRegistroStore = defineStore('registroStore', {
    state: () => ({
        tiempoConexion: {
            fecha: '',
            horas: null,
            minutos: null
        },
        date: '',
        horas: null,
        minutos: null

    }),
    getters: {

    },
    actions: {
        getDate(date) {
            this.date = date
        },
        getHoras(horas) {
            this.horas = horas
        },
        getMinutos(minutos) {
            this.minutos = minutos
        },
        setTiempoConexion() {
            const userStore = useUserStore()
            this.tiempoConexion.fecha = this.date
            this.tiempoConexion.horas = Number(this.horas)
            this.tiempoConexion.minutos = Number(this.minutos)
            const usuarios = userStore.listaUsuarios
            const usuario = userStore.usuario
            for (let i = 0; i < usuarios.length; i++) {
                if (usuario[0] == usuarios[i][0] && usuario[1] == usuarios[i][1]) {
                    usuarios[i][7].push(this.tiempoConexion)
                    localStorage.setItem('listaUsuarios', JSON.stringify(usuarios))
                }
            }
            this.tiempoConexion = {
                fecha: '',
                horas: null,
                minutos: null
            }

        }
    }
})