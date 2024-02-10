import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue'
import ListePersonnages from '../components/ListePersonnages.vue'
import Zoom from '../components/Zoom.vue'
import Recherche from '../components/Recherche.vue'
import Favoris from '../components/Favoris.vue'




const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/listepersonnages',
            name: 'listepersonnages',
            component: ListePersonnages
        },
        {
            path: '/zoom/:id',
            name: 'zoom',
            component: Zoom
        },
        {
            path: '/recherche',
            name: 'recherche',
            component: Recherche
        },
        {
            path: '/favoris',
            name: 'favoris',
            component: Favoris,
        }
    ]
})

export default router