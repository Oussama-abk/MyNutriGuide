<template>
    <div class="container">

        <div class="title-subtitle-content">

            <p class="title">Bienvenu MyNutriGuide</p>

        </div>
        <div class="first-section">



            <div class="content-video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/WfwDey9_ppc?si=_LDiRDhEokRLPtNS"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                </iframe>
            </div>
            <div class="content-txt">
                <p class="subtitle">Commencez dès aujourd'hui et transformez votre alimentation avec MyNutriGuide !</p>

                <p class="txt">
                    MyNutriGuide est votre compagnon idéal pour adopter une alimentation équilibrée et saine. Notre
                    application
                    a
                    été conçue pour vous aider à atteindre vos objectifs nutritionnels de manière simple et efficace.
                    Que
                    vous
                    souhaitiez perdre du poids, gagner en masse musculaire, ou simplement maintenir une alimentation
                    équilibrée,
                    MyNutriGuide est là pour vous guider à chaque étape.
                </p>

                <div class="container-btns">
                    <button class="btn1">Recette avec restes</button>
                    <button class="btn2" @click.prevent="openExplorePopup">Explorez la recette</button>
                </div>
            </div>
        </div>


    </div>
</template>


<script>

import searchbar from './searchbar.vue';
// import eventBus from '@/plugins/eventBus.js'; // Adjust the path if necessary


export default {
    data() {
        return {

        };
    },
    methods: {
        // openExplorePopup(){
        //     eventBus.$emit('openExplorePopup');
        // }

    },
    components: {
        searchbar,
    }
};
</script>


<style lang="css" scoped>

.container{
    width:90%;
    margin:auto;
}
.title-subtitle-content {
    text-align: center;
    padding: 10px;
}

.title {
    font-family: "Roboto", sans-serif;
    font-size: 37px;
    font-weight: bold;
}

.subtitle {
    font-family: 'inter';
    font-size: 32px;
}

.txt {
    font-family: 'Open sans';
    font-size: 16px
}

.first-section {
    display: grid;
    grid-template-columns: auto 600px;



}
.container-btns {
    text-align: right;
}
.container-btns button{
    border: none;
    color: white;
    margin: 5px;
    padding: 10px 15px;
    font-family: 'Open sans';
    font-weight:bolder;
}

.container-btns .btn1{
    background-color: #FFB703;
}

.container-btns .btn2{
    background-color: #FB8500;
}
</style>
