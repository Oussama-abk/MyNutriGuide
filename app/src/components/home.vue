<template>
    <div class="container">

        <div class="title-subtitle-content">

            <p class="title">Bienvenu MyNutriGuide</p>
            <p class="subtitle">Commencez dès aujourd'hui et transformez votre alimentation avec MyNutriGuide !</p>

        </div>
        <div class="search-container">
            <input type="text" class="search-input" v-model="search" @keydown.enter="recipiePage" placeholder="What are you looking for?">
            <button class="search-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search"
                    viewBox="0 0 16 16">
                    <path
                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.415l-3.85-3.85a1.007 1.007 0 0 0-.115-.098zm-5.403 1.407a5.5 5.5 0 1 1 7.778-7.778 5.5 5.5 0 0 1-7.778 7.778z" />
                </svg>
            </button>
        </div>

        <div class="container-video-txt">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/WfwDey9_ppc?si=_LDiRDhEokRLPtNS"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
            </iframe>

            <p>
                NutriZen est votre compagnon idéal pour adopter une alimentation équilibrée et saine. Notre application
                a
                été conçue pour vous aider à atteindre vos objectifs nutritionnels de manière simple et efficace. Que
                vous
                souhaitiez perdre du poids, gagner en masse musculaire, ou simplement maintenir une alimentation
                équilibrée,
                NutriZen est là pour vous guider à chaque étape.
            </p>
        </div>


    </div>
</template>


<script>


export default {
    data() {
        return {
            search: '',

        };
    },
    methods: {



        recipiePage (){   
            console.log(this.search)
            this.$router.push({ path: `/recipie/${this.search}`})
        }
    }   
};
</script>


<style lang="css" scoped>
.title-subtitle-content {
    text-align: center;
    padding: 10px;
}

.title {
    font-family: "Roboto", sans-serif;
    font-size: 32px;
    margin: 0%;
    font-weight: bold;
}

.subtitle {
    font-family: 'inter';
    font-size: 18px;
}

.container-video-txt {
    width :50%;
    margin: auto;
    padding: 30px;
}

.container-video-txt p {
    text-align: justify;
}
.container-video-txt iframe{
display:flex;
margin: auto;
}
.search-container {
    display: flex;
    align-items: center;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 0px 20px;
    width: 500px;
    margin: auto;
}

.search-input {
    border: none;
    outline: none;
    padding: 10px;
    font-size: 16px;
    flex-grow: 1;
}

.search-input::placeholder {
    color: #aaa;
}

.search-button {
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
    padding: 0;
    margin-left: 10px;
    color: #aaa;
}

.search-button svg {
    width: 20px;
    height: 20px;
}

</style>




