<template>
<BaseMain>

    <h1>Project page</h1>



    <div class="tile is-ancestor level">
        <div class="tile is-vertical is-8">
            <div class="tile is-parent ">

                <article class="tile is-child box">

                    <div class="tile is-parent is-mobile">
                        <div>
                            <input class="button mr-5 is-link" type="submit" value="Create Project " />

                        </div>
                        <div class="tile is-child ">
                            <!-- Put any content you want -->
                            <div class="select is-light">
                                <select value="Status">
                                  <option disable>Status</option>
                                    <option>Complete</option>
                                    <option>In Progress</option>
                                    <option>Pending</option>
                                </select>
                            </div>

                           <div class="select is-light ">
                                <select >
                                    <option>Project Type</option>
                                    <option>Technologies</option>
                                </select>
                            </div>


                        </div>

                    </div>

                </article>
            </div>

            <div class="tile is-parent">
                <article class="tile is-child ">
                    <!-- Put any content you want -->
                    Project Preview
                    <div class="project-box flexi box">

                        <div class="project-item">
                            <h1>Web Development</h1>
                            <h2>Description</h2>
                            <h3>4hr</h3>
                            <h3>Vue, Nuxt Js, </h3>
                            <h3></h3>
                            <button class="button is-small is-success">Complete</button>
                        </div>
                        <div class="action-buttons mt-auto">
                            <button class="button is-link is-small">Update</button>
                            <button class="button is-danger is-small">X</button>

                        </div>

                    </div>

                    <div class="project-box flexi box">
                        <div class="project-item">
                            <h1>Web Development</h1>
                            <h2>Description</h2>
                            <h3>4hr</h3>
                            <h3>Vue, Nuxt Js, </h3>
                            <h3></h3>
                            <button class="button is-small is-warning">Progress</button>
                        </div>
                        <div class="action-buttons mt-auto">
                            <button class="button is-link is-small">Update</button>
                            <button class="button is-danger is-small">X</button>

                        </div>

                    </div>

                    <div class="project-box flexi box">
                        <div class="project-item">
                            <h1>Python</h1>
                            <h2>Description</h2>
                            <h3>4hr</h3>
                            <h3>Vue, Nuxt Js, </h3>
                            <h3></h3>
                            <button class="button is-small is-warning">In progress</button>
                        </div>
                        <div class="action-buttons mt-auto">
                            <button class="button is-link is-small">Update</button>
                            <button class="button is-danger is-small">X</button>

                        </div>

                    </div>
                </article>
            </div>
        </div>
        <!-- component itself -->
        <div class="tile is-parent level">
            <article class="tile is-child ">
                <!-- Put any content you want -->

                <h1>Latest Actions</h1>
                <div class="actions box">
                    <h4>Project name</h4>
                    <h3>Date</h3>
                    <p>Action complete:</p>

                </div>
                <div class="actions box">
                    <h4>Project name</h4>
                    <h3>Date</h3>
                    <p>Action complete:</p>

                </div>

                <div class="actions box">
                    <h4>Project name</h4>
                    <h3>Date</h3>
                    <p>Action complete:</p>

                </div>
                <div class="actions box">
                    <h4>Project name</h4>
                    <h3>Date</h3>
                    <p>Action complete:</p>

                </div>
                <div class="actions box">
                    <h4>Project name</h4>
                    <h3>Date</h3>
                    <p>Action complete:</p>

                </div>

            </article>
        </div>
    </div>

    <div class="tile is-ancestor">
        <div class="tile is-vertical is-8">
            <div class="tile">

            </div>

        </div>

    </div>

</BaseMain>
</template>

<script>
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
