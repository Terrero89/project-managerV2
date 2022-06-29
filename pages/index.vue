<template>
  <div class="home-page">
    <div class="page-hero">
      <h1>Welcome back {{ name }}!</h1>
      <card
        class="home-button"
        url="https://images.unsplash.com/photo-1652992714070-4b1c488ec7cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        title="Home"
        description="Welcome to my page"
        >Home</card
      >

      <card
        class="home-button"
        url="https://images.unsplash.com/photo-1652992714070-4b1c488ec7cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        title="Home"
        description="Welcome to my page"
        >Home</card
      >
      <card
        class="home-button"
        url="https://images.unsplash.com/photo-1652992714070-4b1c488ec7cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        title="Home"
        description="Welcome to my page"
        >Home</card
      >
    </div>
  </div>
</template>

<script setup>
import { useStore } from '@/store/counter'
import { ref } from '@nuxtjs/composition-api'

const store = useStore()

const name = ref('Sergio Terrero')
const title = ref('Composition API is working')
</script>

<style scoped>
.home-page {
  overflow: hidden;
  background-color: rgb(255, 255, 255);
  text-align: center;
  display: flex;
  justify-content: center;

}

.page-hero {
  font-size: 1.5rem;
  padding-top: 5rem;
  margin: 4rem 0;
}
</style>
