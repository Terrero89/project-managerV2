
<template>
<div>
<div>
    DETAIL OF SPECIFIC PROJECT
</div>


<div>
<p>tasks section (drop down hide option)</p>
<p>go to specific task---> OR SHOW ME ALL THE TASK FOR THIS ID</p>
</div>

</div>
</template>

<script setup>
import { useProjectStore } from '@/store/projects'
import {  useRoute, useRouter} from "@nuxtjs/composition-api"

const props = defineProps()
const store = useProjectStore();
const route = useRoute()
const router = useRouter()
// const projects = computed(() => store.projectList) //project list from pinia

</script>

<style scoped>
.project-detail .project-title {
  text-align: center;
  font-size: 2rem;
}

.project-detail {
  text-align: center;

}

.project-detail h2,
h3,
h4,
h5,
p {
  margin: 0.5rem 0;
  font-size: 1.5rem;
}
</style>


<script setup >
import { useProjectStore } from '@/store/projects'

import { computed} from "@nuxtjs/composition-api"

const store = useProjectStore();
const projectsLoaded = computed(() =>  store.projectList) //project list from pinia

</script>
