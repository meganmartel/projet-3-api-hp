<template>
        <div class="character-container">
            <h2 class="character-title">Liste des personnages</h2>
            <div class="character-grid">
                <div v-for="character in characters.slice(0,20)" :key="character.index" class="character-card">
                    <router-link :to="{ name: 'zoom', params: { id: character.index } }" :key="character.index" class="router-link">
                        <img :src="character.image" :alt="character.fullName" class="character-image">
                        <h3 class="full-name">{{ character.fullName }}</h3>
                    </router-link>
                    <button @click="addToFavorites(character)" class="favorite-btn">
                        {{ isFavorite(character) ? 'Retirer des favoris' : 'Ajouter aux favoris' }}
                        </button>
                </div>
            </div>
        </div>
</template>

<script>
    import { fetchCharacters } from '../composables/api';

    export default {
        inject: ['addToFavorites', 'favorites'],
        data() {
            return {
                characters: []
            };
        },
        async created() {
            this.characters = await fetchCharacters();
        },
        methods: {
            addToFavorites(character) {
            const index = this.$root.$data.favorites.findIndex((favCharacter) => favCharacter.index === character.index);
            if (index === -1) {
                this.$root.$data.favorites.push(character);
            } else {
                this.$root.$data.favorites.splice(index, 1);
            }
            },
            isFavorite(character) {
            return this.$root.$data.favorites.some((favCharacter) => favCharacter.index === character.index);
            },
        },
    };
</script>

<style>

.character-container {
    max-width: 95%;
    margin: 0 auto;
    padding-top: 50px;
    padding-bottom: 50px;
}

.character-title {
    font-size: 40px;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    margin-bottom: 50px;
    margin-top: 0px;
}

.character-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 50px;

}

.character-card {
    border: 1px solid black;
    border-radius: 10px;
    padding: 30px;
    text-align: center;
}

.character-image {
    display: block;
    margin: 0 auto;
    width: 75%;
}

.full-name {
    font-size: 22px;
    font-family: Arial, Helvetica, sans-serif;
}

.router-link {
    text-decoration: none;
}

.router-link h3 {
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 0;
    margin-top: 15px;
    color: black;
}
</style>