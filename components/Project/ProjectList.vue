<template>
 <div>
   <!-- once the button to see details is clicked, the it will identify the id through -->
  <!-- the props id passed from preview/ -->
  <!-- moved from projects to project List -->
   <ProjectPreview id="1"
    projectType="Web Development."
    description="Project in react for website..."
    duration="9"
      startDate="07/07/2022"
      endDate="07/015/2022"
      status="complete" />
     <ProjectPreview id="2"
    projectType="Web Development."
    description="Project in react for website..."
    duration="9"
      startDate="07/07/2022"
      endDate="07/015/2022"
      status="complete" />

         <ProjectPreview id="3"
    projectType="Web Development."
    description="Project in react for website..."
    duration="9"
      startDate="07/07/2022"
      endDate="07/015/2022"
      status="complete" />

</div>



</template>

<script setup>
import { useProjectStore } from '@/store/projects'

import { ref, computed, useRouter, useRoute } from "@nuxtjs/composition-api"

const currDate = ref(Date())
const props = defineProps([]);

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
