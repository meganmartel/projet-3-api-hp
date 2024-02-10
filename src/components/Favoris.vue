<template>
    <div class="favorites-container">
      <h2 class="favorites-title">Mes favoris</h2>
      <div v-if="favorites.length === 0" class="no-favorites-message">Aucun favori ajouté.</div>
      <div v-else class="favorites-grid">
        <div v-for="character in favorites" :key="character.index" class="favorite-card">
            <router-link :to="{ name: 'zoom', params: { id: character.index } }" :key="character.index" class="router-link">
                <img :src="character.image" :alt="character.fullName" class="favorite-image">
                <h3 class="full-name-favorites">{{ character.fullName }}</h3>
            </router-link>
        </div>
      </div>
    </div>
</template>
  
  <script>
  export default {
    computed: {
      favorites() {
        return this.$root.$data.favorites;
      },
    },
  };
  </script>
  
  <style>
    .favorites-container {
        padding-top: 50px;
        padding-bottom: 50px;
        width: 95%;
        margin: 0 auto;
    }

    .favorites-title {
    font-size: 40px;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    margin-bottom: 50px;
    margin-top: 0px;
    }

    .favorite-card {
        border: 1px solid black;
        border-radius: 10px;
        padding: 30px;
        text-align: center;
    }

    .favorite-image {
        display: block;
        margin: 0 auto;
        width: 75%;
    }

    .favorites-grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 50px;
    }

    .full-name-favorites {
        font-size: 22px;
        font-family: Arial, Helvetica, sans-serif;
        margin-bottom: 0
    }

    .no-favorites-message {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 22px;
        text-align: center;
    }

  </style>
  