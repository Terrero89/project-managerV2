
<template>
  <div class="home-page">
    <div class="page-hero">
      <h1>Welcome back {{ name }}!</h1>


    </div>











        <card class="home-button">Home</card>
        <card class="home-button">Projects</card>
        <card class="home-button">Dashboard</card>











  </div>
</template>


<script setup>
import { useStore } from '@/store/counter'
import { ref } from "@nuxtjs/composition-api"


const store = useStore()

const name = ref("Sergio Terrero")
const title = ref("Composition API is working")


</script>


<style scoped>
.home-page {
  overflow: hidden;
  min-height: 100vh;
  background-color: rgb(255, 255, 255);
  text-align: center;


}

.page-hero {


  /* display:flex;
    justify-content:center;
    flex-direction:column; */


}

.page-hero h1 {
  font-size: 1.5rem;
  padding-top: 5rem;
  margin: 4rem 0;

}

.home-card {
  height: 50rem;
    padding: 2rem;
}

.home-button{
  margin: 2rem 1.2rem;
    padding: 2rem;
}
.home-buttons{
  margin: 1rem 0;
    padding: 2rem;
}
</style>
