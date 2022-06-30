<template>
<div class="hero-section">
    <div class="hero">

        <div class="hero-flex">

            <div class="hero-text">
                <h1>The Project Management App</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus, harum ea voluptatibus ad nemo quidem?</p>

            </div>

            <div class="hero-image">

                <div class="circle"></div>

            </div>
        </div>

    </div>

</div>
</template>

<script>
import {
    useStore
} from '@/store/counter'
import {
    ref
} from "@nuxtjs/composition-api"

const store = useStore()

const name = ref("Sergio Terrero")
const title = ref("Composition API is working")
</script>

<style scoped>
.hero-flex {
      flex-direction: row;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: auto 0;
}

.hero {
    background-color: rgb(209, 209, 209);
    min-height: 90vh;


}

.fa-solid .fa-bars-filter {
    background: blue;
    font-size: 3rem;
}

.circle {
    width: 10rem;
    height: 10rem;
    border: solid red 1px;
}
</style>
