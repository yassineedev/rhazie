import './assets/main.css'
import '../public/assets/js/main.js'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n';

// Import translations
import en from './locales/en.json';
import fr from './locales/fr.json';
import ar from './locales/ar.json';

// Configure I18n
const i18n = createI18n({
  locale: 'en', // Default language
  fallbackLocale: 'en',
  messages: {
    en,
    fr,
    ar
  }
});
const app = createApp(App)


app.use(router)
app.use(i18n)
app.mount('#app')
