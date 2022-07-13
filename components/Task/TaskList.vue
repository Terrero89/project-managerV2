<template>
 <BaseMain>
  <div>
       <div class="task-parent">
        <!-- finding the parent title. find title that is equal to the title id, with the same id of title -->
        <p>parent project</p>
        <p>parent project title</p>
        <p>PROJECT NAME THAT THESE TAS ARE UNDER</p>
      </div>
    <TaskPreview
      id="1"
      taskName="Navbar"
      description="Building website for Joe Camargo with react, Next etc.."
      startDate="07/15/2022"
      endDate=""
      age="3"
      duration="6"
      status="pending"

    />

        <TaskPreview
      id="1"
       taskName="Hero Section"
      description="Building website for Joe Camargo with react, Next etc.."
      startDate="07/15/2022"
      endDate=""
      age="3"
      duration="6"
      status="In progress"

    />

       <TaskPreview
      id="2"
      taskName="Hero section refactoring"
      description="Building website for Joe Camargo with react, Next etc.."
      startDate="07/15/2022"
      endDate="07/18/2022"
      age="3"
      duration="6"
      status="complete"

    />

       <TaskPreview
      id="3"
       taskName="About me page"
      description="Building website for Joe Camargo with react, Next etc.."
      startDate="07/15/2022"
      endDate="07/18/2022"
      age="3"
      duration="6"
      status="complete"

    />
  </div>

 </BaseMain>
</template>

<script setup>
import { useProjectStore } from '@/store/projects'
import { useRoute, useRouter } from '@nuxtjs/composition-api'

const props = defineProps([
  'id',
  'projectType',
  'status',
  'age',
  'duration',
  'startDate',
  'endDate',
])

const store = useProjectStore()
const route = useRoute()
const router = useRouter()
// const projects = computed(() => store.projectList) //project list from pinia
// projects;
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
