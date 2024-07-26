// Plugins
import { registerPlugins } from '@/plugins'
import store from "@/store";
import './assets/style.css';

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

const app = createApp(App)

registerPlugins(app)

app
    .use(store)
    .mount('#app')
