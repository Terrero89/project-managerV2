<template>
<div class="hero-section">
    <div class="hero">


        <div class="hero-flex">

            <div class="hero-text">
                <h1>Project Management App</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus, harum ea voluptatibus ad nemo quidem consectetur adipisicing elit.
                    Accusamus, harum ea voluptatibus ad nemo quidem?</p>

            </div>

            <div class="hero-shape">

                <div class="circle"></div>

            </div>

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
.hero-flex {
    width: 1200px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 0 auto;
    flex-wrap: wrap;
    /* border: solid rgb(0, 38, 255) 1px; */

}

.hero {
    background-color: rgb(250, 250, 250);
    min-height: 90vh;
    display: flex;
    justify-content: space-between;




}

.hero-text {
    border: solid rgb(0, 38, 255) 1px;
    padding: 2rem;

    /* margin: 0 0 5rem 0; */

}

.hero-text h1 {
    padding: 0 1.5rem;
    font-size: 4rem;
    font-weight: 600;
    margin-bottom: 1.7rem;
}

.hero-text p {
    padding: 0 1.5rem;
    font-size: 1.3rem;
    line-height: 2.2rem;
    max-width: 38rem;
    margin-bottom: 2.5rem;
}

.hero-shape {
    position: relative;
    width: 20rem;
    height: 20rem;

    border: solid red 1px;

}

.circle {
    position: absolute;
    top: 5rem;
    left: 5rem;
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    border: solid red 1px;
}
</style>
