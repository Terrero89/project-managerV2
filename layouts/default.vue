<template>
  <div>
<the-navbar/>

<Nuxt />

  </div>
</template>

<script>
import TheNavbar from '../components/Navigation/TheNavbar.vue'

export default {
  components: {TheNavbar  },
  name: 'DefaultLayout',
  data() {
    return {

    }
  },
}
</script>
