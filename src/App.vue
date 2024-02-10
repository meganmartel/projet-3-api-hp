<template>

<Header />
<RouterView />

</template>

<script>
    import { RouterView } from 'vue-router';
    import Header from '../src/components/Header.vue'
    import ListePersonnages from '../src/components/ListePersonnages.vue'
    import Zoom from '../src/components/Zoom.vue'
    import Favoris from '../src/components/Favoris.vue'



    export default {
        components: {
            Header,
            ListePersonnages,
            Zoom,
            Favoris
        },
        data() {
            return {
                favorites: []
            }
        },
        provide() {
            return {
                favorites: this.favorites,
                addToFavorites: this.addToFavorites,
            }
        }
    }

</script>

