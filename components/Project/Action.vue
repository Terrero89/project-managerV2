<template>


  <div class="tile is-parent">
    <article class="tile is-child ">
      <div class="my-4">

        <div class="actions box">
          <h1>{{ props.title }}</h1>
          <h3>Change: {{ props.action }}</h3>
          <h4>{{ currDate }}</h4>


        </div>
      </div>


    </article>
  </div>

</template>



<script setup>
import {
  ref
} from "@nuxtjs/composition-api"


const currDate = ref(Date())
const props = defineProps({
  title: String,
  action: String,

})
</script>


<style scoped>
.actions h1 {
  font-size: 1.3rem;
  color: black;
}

.actions h3 {
  font-size: 1.2rem;
  color: rgb(17, 99, 165);
}

.actions h4 {
  font-size: 1.1rem;
  color: rgb(0, 0, 0);
}
</style>
