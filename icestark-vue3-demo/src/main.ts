import { createApp } from "vue";
import type { App as Root } from "vue";
import { createWebHistory, createRouter } from 'vue-router';
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";
import isInIcestark from "@ice/stark-app/lib/isInIcestark";
import getBasename from '@ice/stark-app/lib/getBasename';
import routes from './routes/index.ts';
import store from "./store";

let vue: Root<Element> | null = null;

const runApp = (container: Element | string) => {
  vue = createApp(App);
  const history = createWebHistory(isInIcestark() ? getBasename() : '/');
  const router = createRouter({
    history,
    routes,
  });
  vue.use(ElementPlus);
  vue.use(store);
  vue.use(router);
  vue.mount(container);
};

if (!isInIcestark()) {
  runApp('#app');
}

export function mount({ container }: { container: Element}) {
  runApp(container);
}

export function unmount() {
  if (vue) {
    vue.unmount();
  }
}
