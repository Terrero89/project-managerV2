<template>
  <div>
    <div class="task-preview">
      <div>
        <div class="task box my-4">
          <p>{{ props.id }}</p>
          <p>Project: {{ props.taskName }}</p>
          <p>Description: {{ props.description }}</p>
          <p>Task Age: {{ props.age }} days</p>
          <p>Duration: {{ props.duration }} hours</p>
          <p>Start Date: {{ props.startDate }}</p>
          <p>End Date:{{ props.endDate }}</p>

          <p>{{ props.status }}</p>

          <div class="controls">
            <button>Delete</button>
            <nuxt-link :to="'tasks/' + props.id">
              <button>details</button>
            </nuxt-link>
            <nuxt-link :to="'tasks/' + props.id">
              <button>Tasks</button>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useProjectStore } from '@/store/projects'
import { useRoute, useRouter } from '@nuxtjs/composition-api'

const props = defineProps([
  'id',
  'taskName',
  'description',
  'status',
  'age',
  'duration',
  'startDate',
  'endDate',
  'projects'
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

.task {
}
</style>
