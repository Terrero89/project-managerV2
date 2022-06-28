
<script setup>
import {ref} from "@nuxtjs/composition-api"

const name = ref("Sergio Terrero")
const title = ref("Composition API is working")

</script>


<template>
<div class="home-page">
 <h1>HOME PAGE</h1>
 <p>This is the home page for the web app.</p>

<div>
  <h1>{{name}}</h1>
  <p>{{title}}</p>
</div>



</div>
</template>

