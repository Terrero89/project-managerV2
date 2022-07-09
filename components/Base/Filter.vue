<template>
<div class="is-ancestor box">
    <div class="filters flexi ">

        <div class="select is-medium mr-5">
            <select class="is-hovered ">
                <option>Select dropdown</option>
                <option>With options</option>
                <option>Select dropdown</option>
                <option>With options</option>
                <option>Select dropdown</option>
                <option>With options</option>
            </select>
        </div>

        <div class="select is-medium multiple">
            <select class="is-hovered">
                <option>Select dropdown</option>
                <option>With options</option>
                <option>Select dropdown</option>
                <option>With options</option>
                <option>Select dropdown</option>
                <option>With options</option>
            </select>
        </div>

        <div class="is-parent is-8 is-mobile ml-auto">

            <nuxt-link :to="projectsRoute">  <b-button class="is-medium is-primary">Create Project +</b-button></nuxt-link>
        </div>

    </div>

</div>
</template>


<script setup>
import { useProjectStore } from '@/store/projects'

import { ref, computed, useRouter, useRoute } from "@nuxtjs/composition-api"
const props = defineProps([]
);
const currDate = ref(Date())


const store = useProjectStore();

const projectsLoaded = computed(() => store.projectList) //project list from pinia
const router = useRouter()
const route = useRoute()
const projectsRoute = computed(() => "/create-project")

</script>

<style scoped>
.flex-items {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

}

.item {

    margin: 0 1rem;
}

.flexi {
    display: flex;
    justify-content: space-evenly;
}

@media screen and (max-width:450px) {
    .flex-items {

        display: inline;
        ;

    }

    .item {

        margin: 0 0rem;
    }

}
</style>
