<template>
  <div class="card">
    <div class="card-item card-img">
     <img src="" alt="">
    </div>
    <div class="card-item">
     <h1 > Technique</h1>
     <p>We offer the best rates</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BuefyCard',
  props:{
    title: {
      required:false,
      type: String,
    },

    description:{
      type: String,
      required:false,
    }
  }

}
</script>

<style scoped>
.card {
  border: 1px solid rgb(250, 250, 250);
  border-radius:10px;
    max-width:60rem;
    margin:auto ;
  /* display: flex;
  justify-content: space-between;
  text-align: center; */
}

/* .card-item{

  text-align: left;
} */

.card-item h1{

  font-size:1.5rem;
}

</style>
