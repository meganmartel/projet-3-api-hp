<template>
    <nav class="navbar">
        <div class="header">
            <h1 class="logo">
                <img src="../assets/Harry-Potter-Logo.png" alt="HarryPotterLogo">
            </h1>
            <ul class="menu">
                <li>
                    <RouterLink to="/">Accueil</RouterLink>
                </li>
                <li>
                    <RouterLink to="/ListePersonnages">Personnages</RouterLink>
                </li>
                <li>
                    <RouterLink to="/Recherche">Recherche</RouterLink>
                </li>
                <li>
                    <RouterLink to="/Favoris">Favoris</RouterLink>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    import { RouterLink } from 'vue-router';
</script>


<style>

.logo img {
    height: 100px;
    margin-top: 5px;
}

.navbar {
    background-color: black;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    width: 100%;
}

.header {
    width: 95%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.menu {
    display: flex;
    font-size: 24px;
}

.menu a {
    text-decoration: none;
    color: white;
}

.menu li {
    list-style: none;
    padding-left: 40px;
}

.menu li:hover {
    text-decoration: underline;
}

.menu a.router-link-exact-active {
    text-decoration: underline;
}


</style>