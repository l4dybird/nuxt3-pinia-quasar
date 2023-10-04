import { Quasar } from 'quasar';
import * as components from 'quasar';
import {
  ClosePopup as vClosePopup,
  Intersection as vIntersection,
  Morph as vMorph,
  Mutation as vMutation,
  Ripple as vRipple,
  Scroll as vScroll,
  ScrollFire as vScrollFire,
  TouchHold as vTouchHold,
  TouchPan as vTouchPan,
  TouchRepeat as vTouchRepeat,
  TouchSwipe as vTouchSwipe,
} from 'quasar';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Quasar, {
    components,
    directives: {
      vClosePopup,
      vIntersection,
      vMorph,
      vMutation,
      vRipple,
      vScroll,
      vScrollFire,
      vTouchHold,
      vTouchPan,
      vTouchRepeat,
      vTouchSwipe,
    },
    plugins: {},
    iconSet: undefined,
    config: {},
    lang: undefined,
  });
});
