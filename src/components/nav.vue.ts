import { defineCustomElement } from 'vue';
import Nav from './nav.ce.vue';

const Vnav = defineCustomElement(Nav);

customElements.define('v-nav', Vnav);

declare module 'vue' {
  interface GlobalComponents {
    'v-nav': typeof Nav;
  }
}
