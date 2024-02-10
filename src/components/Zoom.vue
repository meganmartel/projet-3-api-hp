<template>
    <div class="zoom-container">
        <button @click="goBack" class="back-button">Retour à la liste des personnages</button>
        <h2 class="character-details">Détails du personnage</h2>
        <div v-if="character">
            <img :src="character.image" :alt="character.fullName" class="details-image">
            <h3 class="full-name">{{ character.fullName }}</h3>
            <p class="nick-name">Surnom : {{ character.nickname }}</p>
            <p class="house">Maison : {{ character.hogwartsHouse }}</p>
            <p class="actor">Acteur : {{ character.interpretedBy }}</p>
            <p class="birth">Date de naissance : {{ character.birthdate }}</p>
        </div>
    </div>
</template>

<script>
    import {
        fetchCharacterById
    } from '../composables/api';

    export default {
        data() {
            return {
                character: {}
            };
        },
        async mounted() {
            try {
                const characterId = this.$route.params.id;
                this.character = await fetchCharacterById(characterId);
                console.log(this.character)
            } catch (error) {
                console.error('Error fetching character details:', error);
            }
        },
        methods: {
            goBack() {
                this.$router.go(-1);
            }
        }

    }
</script>

<style>
    .zoom-container {
        padding-top: 50px;
        padding-bottom: 50px;
        width: 95%;
        margin: 0 auto;
    }

    .details-image {
        display: block;
        margin: 0 auto;
        width: 20%;
    }


    .character-details {
        font-size: 40px;
        text-align: center;
        font-family: Arial, Helvetica, sans-serif;
        margin-top: 0px;
        margin-bottom: 50px;
    }

    .full-name {
        text-align: center;
        font-family: Arial, Helvetica, sans-serif;
    }

    .nick-name {
        text-align: center;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 20px;
    }

    .house {
        text-align: center;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 20px;
    }

    .actor {
        text-align: center;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 20px;
    }

    .birth {
        text-align: center;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 20px;
    }
</style>