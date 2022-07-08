<template>
  <!-- each individual project preview -->
  <!-- project section -->
  <!-- PROJECT LIST SECTION -->
  <div class="wrapper">
    <div class="flexi box" v-for="project in projectsLoaded" :key="project.id">
      <div class="project-item">
        <h1>{{ project.projectType }}</h1>
        <h2>{{ project.description }}</h2>
        <h3>{{ project.duration }} <span>Hours</span> </h3>
        <h4>{{ project.age }}  <span>days old</span></h4>



      </div>

      <div class="dis">
        <button class="button is-warning is-medium mt-3 mr-auto">Progress</button>
        <nuxt-link to="/projects/project-detail"> <button class="button is-primary is-medium mt-3  ">
            details</button></nuxt-link>
        <button class="button delete is-medium is-danger mt-3"></button>
      </div>
    </div>

  </div>



</template>

<script setup>
import { useProjectStore } from '@/store/projects'

import { ref, computed, useRouter} from "@nuxtjs/composition-api"

const currDate = ref(Date())
const props = defineProps(['id', 'title', 'description', 'duration']);

const store = useProjectStore();

const projectsLoaded = computed( ()=>  store.projectList) //project list from pinia
// const route
// const goTodetails = computed(()=> router.params.)


</script>

<style scoped>

.project-item h1 {
  font-size: 2rem;
  color: black;
}

.project-item h2 {
  font-size: 1.6rem;
  color: black;
}

.project-item h3 {
  font-size: 1.4rem;
  color: black;
}

.project-item h3 {
  font-size: 1.4rem;
  color: black;
}
.project-item h4 {
  font-size: 1.4rem;
  color: black;
}
.project-item  span {
  font-size: 1.4rem;
  color: rgb(0, 76, 163);
}
.dis {
  display: flex;
  justify-content: flex-end;
}

.delete{
  margin-left: 1rem;
}
</style>
