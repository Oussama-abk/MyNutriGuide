<template>
    <div class="container_recipie">
        <div class="title">
            <p class="recipie-name">{{ recipie.name }}</p>
            <p class="text">{{ recipie.name }} est un plat délicieux. Nous allons vous aider à le préparer étape par étape. Vous trouverez la recette et la vidéo ci-dessous!</p>
            <img :src="recipie.img">
        </div>

        <div class="instructions-container">

            <div class="instruction" v-html="recipie.instruction">

            </div>  
            <button @click.prevent="plusinfo">Plus d'information</button>

            <iframe class="videoytb" width="560" height="315" :src="`https://www.youtube.com/embed/${recipie.ytbLink}`"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                </iframe>

        </div>
        
       
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'recipie-comp',
    data() {


        return {
        recipie: {},
        }
    },

    created() {
      this.fetchRecipe();
    },


    methods:{
        plusinfo(){
            window.location.replace(this.recipie.moreinfo)
        },
        fetchRecipe() {

        const query = this.$route.params.dish;


    
            this.getrecipie(query);

    },

    async getrecipie(query){
        try{
                const results = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)

                if (results){
                    
                    this.recipie = {
                        name : results.data.meals[0].strMeal,
                        ytbLink : results.data.meals[0].strYoutube.split("v=")[1],
                        img : results.data.meals[0].strMealThumb,
                        instruction : results.data.meals[0].strInstructions,
                        moreinfo: results.data.meals[0].strSource,

                    }








                }

            }catch(err){
                console.log("here's the error", err)
            }
    }


}
}
</script>

<style lang="css" scoped>
.container_recipie {
    padding: 0 10%;
    margin: 20px auto;
    max-width: 1200px;
}

.title {
    text-align: left;
    margin: 10px 0;
}

p.recipie-name {
    color: black;
    font-size: 2rem;
    font-family: 'Open Sans', sans-serif; 
    margin: 0;
}

p.text {
    color: #666;
    font-size: 1rem;
    line-height: 1.5;
    font-family: "Roboto", sans-serif;
}

.title img {
    width: 100%;
    max-width: 450px;
    height: auto;
    display: block;
    margin: 20px 0;
}

.instructions-container {
    padding: 20px 0;
    text-align: justify;
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
    color: black;
}

.videoytb {
    width: 100%;
    max-width: 560px;
    height: auto;
    display: block;
    margin: 30px auto;
}

button {
    border: none;
    color: white;
    background-color: rgb(233, 121, 121);
    padding: 10px 15px;
    margin: 20px 0;
    cursor: pointer;
    font-size: 1rem;
    font-family: 'Open Sans', sans-serif;
    display: block;
    width: fit-content;
}

button:hover {
    background-color: rgb(255, 60, 60);
}

/* Responsive styles */
@media (max-width: 768px) {
    .title {
        text-align: center;
    }
    .instructions-container {
        padding: 10px;
        font-size: 0.9rem;
    }
    button {
        margin: 10px auto;
    }
}
</style>
