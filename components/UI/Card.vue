<template>
<div class="mini-card">

    <slot></slot>

</div>
</template>

<script>
import {
    useStore
} from '@/store/counter'
import {

    ref
} from "@nuxtjs/composition-api"
</script>

<style scoped>
.mini-card {

    border: dotted rgb(255, 0, 0) 1px;
    border-radius: 5px;
    padding: 1rem;
    margin: .8rem;
   width: 17rem;


}
</style>
