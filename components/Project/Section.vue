<template>
  <BaseMain>

    <h1>Project page</h1>

    <div class="tile is-ancestor level">
      <div class="tile is-vertical is-8">

        <!-- component itself just refactoring -->

        <!-- -------------------------------- -->

        <!-- -------------------------------- -->
        <!-- Top Section of main screen -->
        <div class="tile is-parent ">

          <article class="tile is-child box">

            <div class="tile is-parent">


              <BaseFilter />

            </div>

          </article>
        </div>

        <!-- -------------------------------- -->
        <!-- end of component -->
        <!-- -------------------------------- -->
        <!-- Projects List section-->
        <div class="tile is-parent">
          <article class="tile is-child ">

            Project List Component
            <ProjectItem />


          </article>
        </div>



      </div>

      <!-- component itself -->


<!-- Actions Section -->
      <div class="tile is-parent level">
        <article class="tile is-child ">


          <h1>Latest Actions</h1>

          <ProjectAction title="Web Development" action="button in xxxx" />

          <ProjectAction title="Web Development" action="button in xxxx" />
          <ProjectAction title="Web Development" action=" button in xxxx" />

          <ProjectAction title="Web Development" action="button in xxxx" />

        </article>
      </div>

      <!-- end component -->
    </div>



  </BaseMain>
</template>

<script setup>
// import {
//     useProjectStore
// } from '@/store/projects'

// const store = useProjectStore()
</script>

<style scoped>
.cen {
  align-items: center;
  width: 50rem;
  margin: auto 0;
}

.flexi {
  display: flex;
  justify-content: space-between;
}
</style>
