import type { RouteRecordRaw } from 'vue-router'

const routes = [
  {
    path: '/',
    component: async () => (await import(':modules/core/layouts/default-layout')).DefaultLayout,
    children: [
      {
        path: '',
        component: async () => (await import(':modules/billing/pages/payment')).PaymentPage,
      },
    ],
  },
] satisfies RouteRecordRaw[]

export {
  routes,
}
