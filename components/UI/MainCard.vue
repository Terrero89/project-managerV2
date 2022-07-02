<template>
<div class="card">

    <div class="card-box">
          <slot></slot>

    </div>

</div>
</template>

<script setup>
import {
    useStore
} from '@/store/counter'
import {

    ref
} from "@nuxtjs/composition-api"


</script>

<style scoped>

.card {

display: flex;
justify-content:center;


  margin:  auto;



}

.card-box{
max-width:80rem;
    border: dotted blue 1px;
margin: 1rem 0;
 border-radius: 10px;
  padding: 1rem;
  display: flex;
  justify-content:center;


flex-wrap: wrap;

  max-width:70rem ;
}

</style>
