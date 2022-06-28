
<template>
<div class="home-page">
<div class="container is-max-desktop">
  <div class="notification is-primary">
    This container is <strong>fullwidth</strong> <em>until</em> the <code>$fullhd</code> breakpoint.
  </div>
</div>

<div class="container is-max-desktop">
  <div class="notification is-primary">
    This container is <strong>fullwidth</strong> <em>until</em> the <code>$fullhd</code> breakpoint.
  </div>
</div>





<div>
  <h1>{{name}}</h1>
  <p>{{title}}</p>
</div>

<div>
  <p>{{store.name}}</p>
</div>



</div>
</template>


<script setup>
import { useStore } from '@/store/counter'
import {ref} from "@nuxtjs/composition-api"


const store = useStore()

const name = ref("Sergio Terrero")
const title = ref("Composition API is working")


</script>

<style scoped>
.container {
  margin:  25px auto;
}


</style>
