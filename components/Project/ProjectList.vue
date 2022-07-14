<!-- REUSABLE FULL LIST OF PROJECTS -->

<template>
  <div>
    <!-- once the button to see details is clicked, the it will identify the id through -->
    <!-- the props id passed from preview/ -->
    <!-- moved from projects to project List -->
    <ProjectPreview
      v-for="project in projectList"
      :key="project.id"
      :id="project.id"
      :project-type="project.projectType"
      :description="project.description"
      :age="project.age"
      :startDate="project.startDate"
      :status="project.isComplete"
    />




  </div>
</template>

<script setup>
import { useProjectStore } from '@/store/projects'

import { ref, computed, useRouter, useRoute } from '@nuxtjs/composition-api'
const store = useProjectStore()

const projectList = computed(() => store.projectList) //project list from pinia
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
