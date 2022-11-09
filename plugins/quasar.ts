import { Quasar } from "quasar";
import * as components from "quasar";
import * as directives from "quasar";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Quasar, {
      config: {},
      components,
      directives,
  });
});
