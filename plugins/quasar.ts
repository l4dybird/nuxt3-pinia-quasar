import { Quasar } from 'quasar'
import * as All from 'quasar'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Quasar, {
    config: {},
    components: All,
    plugins: {},
  })
});