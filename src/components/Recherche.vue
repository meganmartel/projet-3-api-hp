<template>
    <div class="search-container">
        <h2 class="search-title">Recherche de personnages</h2>
        <div class="search">
            <input type="text" v-model="searchQuery" placeholder="Rechercher un personnage...">
            <button @click="search">Rechercher</button>
        </div>
        <div v-if="error" class="error">{{ error }}</div>
        <div v-if="searched && characters.length === 0">
            Aucun résultat trouvé pour "{{ searchQuery }}"
        </div>
        <div v-else-if="characters.length > 0" class="character-grid">
            <div v-for="character in characters.slice(0,20)" :key="character.index" class="character-card">
                <router-link :to="{ name: 'zoom', params: { id: character.index } }" :key="character.index"
                    class="router-link">
                    <img :src="character.image" :alt="character.fullName" class="character-image">
                    <h3 class="full-name">{{ character.fullName }}</h3>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        searchCharacters
    } from '../composables/api.js';

    export default {
        data() {
            return {
                searchQuery: '',
                characters: [],
                error: null,
                searched: false
            };
        },
        methods: {
            async search() {

                try {
                    const characters = await searchCharacters(this.searchQuery);
                    this.characters = characters;
                    this.searched = true;
                } catch (error) {
                    this.error = 'Une erreur s\'est produite lors de la recherche des personnages.';
                }
            }
        }
    };
</script>

<style>
    .error {
        color: red;
    }

    .search-container {
        max-width: 95%;
        margin: 0 auto;
        padding-top: 50px;
        padding-bottom: 50px; 
    }

    .search-title {
        font-size: 40px;
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
    }

    .search input {
        width: 10%;
        margin-right: 15px;
        border-radius: 5px;
    }

    .search {
        text-align: center;
        margin-bottom: 100px;
    }

    .grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        margin: 0 auto;
    }
</style>