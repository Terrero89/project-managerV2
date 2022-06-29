<template>
  <div class="card">
    <div class="card-img">
      <img
        :src="'{{url}}'"
        alt=""
      />
    </div>
    <div class="card-text">

        <h1>{{ title }}</h1>

      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BuefyCard',
  props: {
    title: {
      required: false,
      type: String,
    },

    description: {
      type: String,
      required: false,
    },
    url: {
      type: String,
      required: false,
    },
  },
}
</script>

<style scoped>
.card {
  font-size: 1.5rem;
  width: 50rem;
  margin: 4rem 0;
  border: 1px solid rgb(250, 250, 250);
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  overflow: hidden;

  align-items: center;
}

.card-img {
  margin-top: 0;
  margin: 0 2rem 0 0;
  width: 13rem;
  height: 13rem;
  border-radius: 5px;
}

.card-text {
  font-size: 1.5rem;
  text-align: left;
  margin: 0 0 0 5rem;
}

.card-text h1 {
  font-size: 1.8rem;
}
</style>
