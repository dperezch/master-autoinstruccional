
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/admin', component: () => import('pages/admin/Admin.vue') },
      { path: '/perfil', component: () => import('pages/PerfilPage.vue') },
      { path: '/aula', component: () => import('pages/AulaPage.vue') },
      { path: '/aula/modulo/:id', component: () => import('components/Aula/Modulo.vue') },
      { path: '/aula/leccion/:id', component: () => import('components/Aula/Leccion.vue') },
      { path: '/configuracion', component: () => import('pages/ConfigPage.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
