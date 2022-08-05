import { createApp } from "vue";
import { createI18n } from "vue-i18n/index";

import App from "./App.vue";
import Router from "./router.js";
import VueConfetti from "vue-confetti";

import en from "./languages/en.json";
import pl from "./languages/pl.json";
import de from "./languages/de.json";

const i18n = createI18n({
   locale: "en",
   fallbackLocale: "en",
   messages: {
      en,
      pl,
      de,
   },
});

const app = createApp(App);
app.use(i18n);
app.use(VueConfetti);
app.use(Router);

app.mount("#app");
