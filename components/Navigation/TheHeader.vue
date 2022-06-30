<template>
<div class="header-container">
    <header class="the-header">
        <TheSideNavToggle />
        <div class="logo">
            <nuxt-link to="/">Project Manager</nuxt-link>
        </div>
        <div class="spacer"></div>
        <div class="navigation-items">

            <ul class="nav-list">
                <li class="nav-item">
                    <nuxt-link to="/home">Home</nuxt-link>
                </li>
                <li class="nav-item">
                    <nuxt-link to="/projects">Projects</nuxt-link>
                </li>
                <li class="nav-item">
                    <nuxt-link to="/dashboard">Dashboard</nuxt-link>
                </li>
            </ul>
        </div>
        <div class="nav-icons">
            <nuxt-link class="nav-icon" to="/home">
                <b-icon icon="home" size="is-" type="is-light">
                </b-icon>
            </nuxt-link>

            <nuxt-link class="nav-icon" to="/projects">
                <b-icon icon="apps" size="is-" type="is-light">
                </b-icon>
            </nuxt-link>
            <nuxt-link class="nav-icon" to="dashboard">
                <b-icon icon="view-dashboard" size="is-" type="is-light">
                </b-icon>

            </nuxt-link>

        </div>

    </header>
</div>
</template>

<script>
import TheSideNavToggle from "@/components/Navigation/TheSideNavToggle";

export default {
    name: "TheHeader",
    components: {
        TheSideNavToggle
    }
};
</script>

<style scoped>

.nav-icon {
    margin: 0 1rem
}

.header-container {
    height: 50px;
}

.the-header {
    width: 100%;
    position: fixed;
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    /* background-color: rgb(35, 80, 177); */
    background-color: #0093E9;
background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);

    z-index: 100;
    box-sizing: border-box;
    padding: 0 20px;
}

.logo {
    
    font-size: 1.5rem;
}

.logo a {
    text-decoration: none;
    color: white;

}

.spacer {
    flex: 1;
}

.navigation-items {
    display: none;
}

@media (min-width: 480px) {
    .navigation-items {
        display: block;
    }
}

@media (min-width: 480px) {
    .nav-icons {
        display: none;
    }
}

.nav-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
}

.nav-item {
    margin: 0 10px;
}

.nav-item a {
    text-decoration: none;
    color: white;
      font-size: 1.2rem;
}

.nav-item a:hover,
.nav-item a:active,
.nav-item a.nuxt-link-active{
    color: rgb(245, 12, 12);
}

.nav-icon :hover,
.nav-icon a .nuxt-link:active,
.nav-icon.nuxt-link-active {
    color: rgb(245, 12, 12);
}
</style>
