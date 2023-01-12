import { defineStore } from "pinia";
import { useContadorStore } from "./contadorStore";

export const useUserStore = defineStore('userStore', {
    state: () => ({
        usuario: [],
        listaUsuarios: [],
        acceso: false,
        vistaLoginRegistro: true,
        vistaAdmin: false,
        vistaUsuario: false
    }),
    getters: {

    },
    actions: {
        cargarLocalStorage() {
            if (localStorage.getItem('listaUsuarios')) {
                this.listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios'))
            } else {
                localStorage.setItem('listaUsuarios', JSON.stringify(
                    [
                        ['admin', '123334445', 'admin@admin.com', '123456', '1', [], 0, [], [], []]
                    ]
                ))
                this.listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios'))
            }
        },
        setUsuario(usuario) {
            this.usuario = usuario
            this.listaUsuarios.push(this.usuario);
            localStorage.setItem('listaUsuarios', JSON.stringify(this.listaUsuarios))
        },
        iniciarSesion(mail, password) {
            const contadorStore = useContadorStore()
            this.usuario = []

            const usuarios = this.listaUsuarios
            for (let i = 0; i < usuarios.length; i++) {
                if (mail == usuarios[i][2] && password == usuarios[i][3]) {
                    this.usuario = usuarios[i]
                    sessionStorage.setItem('usuarioActivo', usuarios[i][0]);
                    sessionStorage.setItem('rolUsuarioActivo', usuarios[i][4])
                    this.acceso = true;
                    contadorStore.comenzarContador(0)
                }
            }

            if (this.acceso === true) {
                var rol = sessionStorage.getItem('rolUsuarioActivo');
                switch (rol) {
                    case '1':
                        this.vistaLoginRegistro = false
                        this.vistaUsuario = false
                        this.vistaAdmin = true
                        break;
                    case '2':
                        this.vistaLoginRegistro = false
                        this.vistaUsuario = true
                        this.vistaAdmin = false
                        break;
                    default:
                        this.vistaLoginRegistro = true
                        this.vistaUsuario = false
                        this.vistaAdmin = false
                        break;
                }
            }
        },
        cerrarSesion() {
            sessionStorage.clear()
            this.vistaLoginRegistro = true
            this.vistaUsuario = false
            this.vistaAdmin = false
        },
        ingresarIntentos(payload) {
            this.usuario[8].push(payload)
            localStorage.setItem('listaUsuarios', JSON.stringify(this.listaUsuarios))
        }
    }
})