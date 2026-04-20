import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { VBtn, VCard, VCardItem, VCol, VOverlay, VRow } from 'vuetify/components'

const vuetify = createVuetify({
 components:{
    VOverlay, VCardItem,VCard,VBtn,VRow,VCol
 }
})

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
