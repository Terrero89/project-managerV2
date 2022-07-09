<template>
  <BaseMain>

  <nuxt-link to="/projects"> Go Back</nuxt-link>
    <div class="form-wrapper">
      <div class="form box is-centered mx-auto">

        <div class="field is">
          <label class="label">Name</label>
          <div class="control -medium">
            <input class="input is-medium" type="text" placeholder="Text input">
          </div>
        </div>
        <div class="dropdowns">
          <div class="field mr-5">
            <label class="label">Project Type</label>
            <div class="control">
              <div class="select is-medium">
                <select>
                  <option>Select dropdown</option>
                  <option>With options</option>
                </select>
              </div>
            </div>
          </div>

          <div class="field mr-5">
            <label class="label">Project Type</label>
            <div class="control">
              <div class="select is-medium">
                <select>
                  <option>Select dropdown</option>
                  <option>With options</option>
                </select>
              </div>
            </div>
          </div>

          <div class="field">
            <label class="label">Project Type</label>
            <div class="control">
              <div class="select is-medium">
                <select>
                  <option>Select dropdown</option>
                  <option>With options</option>
                </select>
              </div>
            </div>
          </div>

        </div>

        <div class="technologies box">
          <label class="checkbox">
            <input type="checkbox">
            React Js
          </label>
          <label class="checkbox">
            <input type="checkbox">
            Next Js
          </label>
          <label class="checkbox">
            <input type="checkbox">
            Vue JS
          </label>
          <label class="checkbox">
            <input type="checkbox">
            Nuxt Js
          </label>
          <label class="checkbox">
            <input type="checkbox">
            Python
          </label>
          <label class="checkbox">
            <input type="checkbox">
            C
          </label>
          <label class="checkbox">
            <input type="checkbox">
            other
          </label>


        </div>

        <div class="field">
          <label class="label">Description</label>
          <div class="control">
            <textarea class="textarea px-5" placeholder="Textarea"></textarea>
          </div>
        </div>


        <button class="button is-link large"> Submit</button>

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
const props = defineProps([]);
const currDate = ref(Date())

const store = useProjectStore();

const projectsLoaded = computed(() => store.projectList) //project list from pinia
const router = useRouter()
const route = useRoute()
const projectsRoute = computed(() => "/create-project")
</script>

<style scoped>
.form {

  max-width: 50rem;


}

.dropdowns {
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
}

.form-wrapper {}

.technologies {

  margin: 2rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around
}

.checkbox {
  margin: 0.5rem 1rem;
}

.large{
  width: 100%;
  padding: 0.5rem
}
</style>
