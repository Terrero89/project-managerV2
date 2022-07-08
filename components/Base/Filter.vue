<template>
  <div class="flex-items tile is-child ">
    <!-- options filter-->
    <div class=" item select is-medium is-dark">
      <select value="Status">
        <option>Sort By</option>
        <option>Status</option>
        <option>Complete</option>
        <option>In Progress</option>
        <option>Pending</option>
      </select>
    </div>

    <div class=" item select is-medium is-dark ">
      <select>
        <option>Sort By</option>
        <option>Oldest</option>
        <option>Newest</option>
      </select>
    </div>
    <div class=" ml-auto">
      <input class="button mr-auto is-link is-medium" type="submit" value="Create Project " />

    </div>
  </div>
</template>

<style scoped>
.flex-items {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

}

.item {

  margin: 0 1rem;
}

@media screen and (max-width:450px) {
  .flex-items {



    display: inline;
    ;

  }

  .item {

  margin: 0 0rem;
}

}
</style>
