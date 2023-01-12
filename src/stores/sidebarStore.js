import { defineStore } from 'pinia';

export const useSidebarStore = defineStore('sidebarStore', {
  state: () => ({
    menuLogIn: [
      {
        label: 'Inicio',
        icon: 'bi-grid',
        to: '/'
      },
      {
        label: 'Aula',
        icon: 'bi-pencil-square',
        to: '/aula'
      },
      {
        label: 'Perfil',
        icon: 'bi-person',
        to: '/perfil'
      },
      {
        label: 'Contáctanos',
        icon: 'bi-telephone-forward',
        to: '/configuracion'
      },
    ],
  }),
  getters: {
    /* doubleCount: (state) => state.counter * 2, */
  },
  actions: {
    /* increment() {
      this.counter++;
    }, */
  },
});
