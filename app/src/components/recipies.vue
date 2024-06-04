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

.container_recipie{
    padding: 0px 10%;

}

.title{
    text-align: left;
    margin: 10px 50px;
}
p.recipie-name{
    color: black;
    font-size: 36px;
    font-family: 'open sans'; 
    margin:0%;
}
p.text{
    color:#666;
    font-size: 1rem;
    line-height: 1.5;
    font-family: "Roboto";
}
.title img{
    width: 450px;
}
.instructions-container{
    padding:  0px 45px;
    text-align: justify;
    font-family: 'open sans';
    font-size: 14px;
    color: black;
}

.videoytb{
    display: flex;
    margin: auto;
    padding: 30px;
}
button{
    border: none;
    color: white;
    background-color: rgb(233, 121, 121);
    padding: 10px 15px;
    display: flex;
    margin-left: auto
}
button:hover{
    background-color: rgb(255, 60, 60);

}
</style>