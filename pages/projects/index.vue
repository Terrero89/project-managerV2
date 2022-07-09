<template>
  <BaseMain>
    <BaseFilter />
    <div class="tile is-ancestor">

      <div class="tile is-parent">
        <div class="tile is-child">
          <ProjectList />

        </div>
      </div>
      <div class="tile is-4 is-vertical is-parent">
        <div class="tile is-child box">
          <p class="title">One</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor
            vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
        </div>

      </div>

    </div>

  </BaseMain>
</template>

<script setup>
import {
  useProjectStore
} from '@/store/projects'

import {
  ref,
  computed,
  useRouter,
  useRoute
} from "@nuxtjs/composition-api"

// const props = defineProps([])
</script>

<style scoped>
.cen {
  align-items: center;
  width: 50rem;
  margin: auto 0;
}

.flexi {
  display: flex;
  justify-content: space-evenly;
}
</style>
