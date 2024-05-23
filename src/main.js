import { createApp } from "vue";
import { createPinia } from "pinia";
import { IonicVue } from "@ionic/vue";

import App from "./App.vue";
import router from "./router";

// Ionic Cores
import "@ionic/vue/css/core.css";
import "@ionic/vue/css/normalize.css";
import "@ionic/vue/css/structure.css";
import "@ionic/vue/css/typography.css";
import "@ionic/vue/css/padding.css";
import "@ionic/vue/css/float-elements.css";
import "@ionic/vue/css/text-alignment.css";
import "@ionic/vue/css/text-transformation.css";
import "@ionic/vue/css/flex-utils.css";
import "@ionic/vue/css/display.css";

// Commons
import "./styles/main.scss";

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(IonicVue);

// app.mount("#app");
router.isReady().then(() => {
  app.mount('#app');
});