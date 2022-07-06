<template>
<div class="container ">
    <h1>Home page</h1>
    <div class="notification is-light my-5 ">

        <div class="main-wrapper is-mobile is-tablet ">

                  <!-- conternt for main card goes here/. -->
             <slot></slot>






        </div>

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
max-width:60rem;
    /* border: dotted blue 1px; */
margin: 1rem 0;
 border-radius: 10px;
  padding: 1rem;
  display: flex;
  justify-content:center;


flex-wrap: wrap;


}

</style>
