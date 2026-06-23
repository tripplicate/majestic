import { routes as BillingRoutes } from ':modules/billing/app'
import { routes as CoreRoutes } from ':modules/core/app'

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...BillingRoutes,
    ...CoreRoutes,
  ],
})

export {
  router,
}
