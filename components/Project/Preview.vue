<template>
  <div class="project box">
    <div class="project-text">
      <p>{{props.id}}</p>
      <h1>{{props.projectType}}</h1>
      <h2>{{props.description}}</h2>
      <p>{{props.duration}}</p>

    </div>

    <div class="buttons ">
      <button> {{props.isComplete}} Progress</button>
      <!-- this nuxt link will create the link to to specific id  -->
<!-- prop will be identifier to route the click in details from the projects component. -->
      <nuxt-link :to="'projects/' + props.id"> <button> details</button> </nuxt-link>
      <button> delete</button>
    </div>
  </div>




</template>

<script setup>
import { useProjectStore } from '@/store/projects'

import { ref, computed, useRouter, useRoute } from "@nuxtjs/composition-api"
const props = defineProps(['id','projectType', 'description', 'duration', 'age','startDate','endDate', 'isComplete']
);
const currDate = ref(Date())


const store = useProjectStore();

const projectsLoaded = computed(() => store.projectList) //project list from pinia
const router = useRouter()
const route = useRoute()




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

.project-item span {
  font-size: 1.4rem;
  color: rgb(0, 76, 163);
}

.dis {
  display: flex;
  justify-content: flex-end;
}

.delete {
  margin-left: 1rem;
}
</style>
