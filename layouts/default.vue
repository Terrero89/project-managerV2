
<template>
  <div>
    <TheHeader/>

    <nuxt/>
  </div>
</template>

<script>
import TheHeader from '@/components/Navigation/TheHeader'
export default {
  components: {
    TheHeader,
  },
  data() {
    return {
      displaySidenav: false
    }
  }
}
</script>


<style scoped>
html {
  font-family: 'Open Sans', sans-serif;
}
body {
  margin: 0;
}
</style>
