import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

// Pages
import Home from './page/Home'
import RestaurantDetail from './page/RestaurantDetail'

const routes = [
    { path: '/', component: Home },
    { path: '/restaurant', component: RestaurantDetail },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

const VueApp = createApp(App)

VueApp.use(router)

VueApp.mount('#app')

