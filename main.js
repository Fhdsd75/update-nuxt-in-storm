import { createApp } from "vue";
import App from "./App.vue";
import pinia from "./pinia"; // Импорт Pinia из вашего файла

const app = createApp(App);

app.use(pinia); // Подключаем Pinia
app.mount("#app");

