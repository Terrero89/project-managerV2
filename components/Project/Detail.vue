<template>
  <div class="tile is-ancestor is-primary px-5">
    <div class="tile is-parent">
      <div class="tile is-child box">
        <div class="project-detail">
          <h1>ID 1</h1>
          <h1 class="project-title">Python Development.</h1>
          <h2 class="project-status">Status: <span> Pending</span></h2>
          <div>
            <h3>Project age: <span> 5 Days</span></h3>
          </div>
          <h4>Start Date: <span> 07/09/2022</span></h4>
          <h5>End Date:<span> N/A</span>
          </h5>
          <p>Task history: <span>ARRAY [ ]</span></p>
          <nuxt-link to="/projects"> Projects</nuxt-link>

        </div>

        Show steps wioth steps components here.


      </div>
    </div>

  </div>

</template>

<script setup>
import {  useStore} from '@/store/projects'
import {ref} from "@nuxtjs/composition-api"


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
