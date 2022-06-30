<template>
<div class="home-page">
 <h1>PROJECT LIST PAGE</h1>
 <p>WILL SHOW THE LIST OF THE PROJECT WITH TASKS</p>


<div>
  <ul class="items" v-for="items in store.loadedList" :key="items.id">
      <li> {{items.projectType}}</li>
      <div v-for="task in items.tasks" :key="task.taskName">
        <li > {{task.taskName}}</li>
      </div>
  </ul>
</div>



</div>






</template>

<script setup>
import { useProjectStore } from '@/store/projects'

const store = useProjectStore()






</script>

