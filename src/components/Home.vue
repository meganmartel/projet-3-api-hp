<template>
    <div class="banner">
        <img src="../assets/home_1.jpg" alt="Home1">
        <img src="../assets/home_2.jpg" alt="Home2">
    </div>
    <div class="form-container">
        <h2 class="infolettre">Abonnement à La Gazette du Sorcier</h2>
        <div v-if="!formValide">
            <form @submit.prevent="submitForm">
                <p class="form-valide" v-if="formValide">Formulaire valide</p>
                <fieldset>
                    <div class="groupe">
                        <label for="prenom">Prénom :</label>
                        <input type="text" v-model="nouvelleInscription.prenom">
                        <span v-if="erreurs.prenom" class="error-message">Veuillez entrer votre prénom.</span>
                    </div>
                    <div class="groupe">
                        <label for="nom">Nom :</label>
                        <input type="text" v-model="nouvelleInscription.nom">
                        <span v-if="erreurs.nom" class="error-message">Veuillez entrer votre nom.</span>
                    </div>
                    <div class="groupe">
                        <label for="email">Email :</label>
                        <input type="email" v-model="nouvelleInscription.email">
                        <span v-if="erreurs.email" class="error-message">Veuillez entrer votre email.</span>
                    </div>
                    <button type="submit">Valider</button>
                </fieldset>
            </form>
        </div>
        <div v-else>
            <p class="remerciement">Merci pour votre inscription!</p>
        </div>
    </div>
</template>


<script>
    export default {
        data() {
            return {
                nouvelleInscription: {
                    prenom: "",
                    nom: "",
                    email: "",
                },
                erreurs: {
                    prenom: false,
                    nom: false,
                    email: false,
                },
                formValide: false,
            }
        },
        methods: {
            submitForm(e) {
                e.preventDefault()

                this.resetErreurs();

                let valide = true

                if (this.nouvelleInscription.prenom === "") {
                    this.erreurs.prenom = true
                    valide = false
                }

                if (this.nouvelleInscription.nom === "") {
                    this.erreurs.nom = true
                    valide = false
                }

                if (this.nouvelleInscription.email === "") {
                    this.erreurs.email = true
                    valide = false
                }

                if (!valide) {
                    this.formValide = false;
                    return;
                }

                this.formValide = true;
            },
            resetErreurs() {
                this.erreurs.prenom = false
                this.erreurs.nom = false
                this.erreurs.email = false
            }
        }
    }
</script>



<style>
    .banner {
        display: flex;
        width: 100%;
    }

    .banner img {
        flex: 1;
        width: 50%;
        height: auto;
    }

    .form-container {
        width: 35%;
        margin: 0 auto;

    }

    .infolettre {
        text-align: center;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 32px;
        margin-bottom: 10px;
        margin-top: 50px;
    }

    form {
        font-family: Arial, Helvetica, sans-serif;
        background-color: rgb(255, 200, 0);
        border-radius: 10px;
        padding: 20px;
        text-align: center;
        margin-bottom: 100px;
        width: 70%;
        margin: 0 auto 100px auto;
    }

    fieldset {
        border: none;
    }

    label {
        font-size: 20px;
    }

    input {
        font-size: 16px;
        padding: 5px;
        width: 50%;
        margin: 0 auto;
        border-radius: 5px;
    }

    .groupe {
        display: flex;
        flex-direction: column;
        padding: 10px;
    }

    .error-message {
        color: red;
    }

    button {
        font-size: 20px;
        padding: 10px;
        border-radius: 5px;
        margin-top: 15px;
        cursor: pointer;
        background-color: black;
        color: white;
    }

    .form-valide {
        color: green;
        font-size: 20px;
    }

    .remerciement {
        background-color: rgb(255, 200, 0);
        font-size: 24px;
        padding: 20px;
        text-align: center;
        font-family: Arial, Helvetica, sans-serif;
        border-radius: 10px;
    }
</style>