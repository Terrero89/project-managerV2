<template>
  <div class="container ">
    <h1>Home page</h1>
    <div class="notification is-primary my-5 ">

      <div class="main-wrapper is-mobile is-tablet ">

        <div class="tile is-ancestor my-5  ">
          <div class="tile is-parent ">
            <div class="tile is-child box">
              <p class="title">Overview</p>
              <p class="subtitle"> Naviagation</p>
              <p class="subtitle"> About</p>
              <p class="subtitle">More Stats</p>
              <div class="tile is-child box "> Is child fuck! </div>
            </div>
          </div>
          <div class="tile  is-vertical is-parent ">
            <div class="tile is-child box level">
              <div class="">
                <p class="title">All Projects</p>

              </div>
              <!-- pojects display section -->
              <div class="tile is-parent">
                <div class="tile is-child ">
                  <div class=" content project-totals flexi">
                    <p class="subtitle">Complete Projects</p>
                    <p class="subtitle">6</p>
                    <p class="subtitle">95%</p>
                  </div>

                </div>
              </div>

              <!-- pending Projects -->
              <div class="tile is-parent">
                <div class="tile is-child ">
                  <div class=" content project-totals flexi">
                    <p class="subtitle">In progress Projects</p>
                    <p class="subtitle">4</p>
                    <p class="subtitle">95%</p>
                  </div>

                </div>
              </div>

            </div>
            <div class="tile is-child box">
              <p class="title">All Tasks</p>
              <!-- pending Projects -->
              <div class="tile is-parent">
                <div class="tile is-child ">
                  <div class=" content project-totals flexi">
                    <p class="subtitle">Complete Tasks</p>
                    <p class="subtitle">4</p>
                    <p class="subtitle">95%</p>
                  </div>

                </div>
              </div>

              <!-- pending Projects -->
              <div class="tile is-parent">
                <div class="tile is-child ">
                  <div class=" content project-totals flexi">
                    <p class="subtitle">In progress Tasks</p>
                    <p class="subtitle">4</p>
                    
                    <p class="subtitle">95%</p>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div class="tile is-vertical is-parent">
            <div class="tile is-child box">
              <p class="title">Dashboard</p>
              <p>This would be a display to go to dashboard an see more statistics/</p>
            </div>
            <div class="tile is-parent box">
              <p class="title">Two</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  components: {

  },
}
</script>

<style scoped>
.flexi {
  display: flex;
  justify-content: space-between;
}

.main-wrapper h1 {
  font-size: 4rem;
  text-align: center;
  margin: 2rem 0;
}

/* @media screen and (max-width: 768px){
  .main-wrapper{
    width: 99vw;
    align-items: center;

  }
} */
</style>
