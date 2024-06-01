<template>
    <div class="container_recipie">

        <div class="img_title">
            <div class="content-title-txt">
                <p class="title"> {{ recipie.name }}</p>
                <p class="txt">
                    Welcome to my special recipe! I bet you are excited to discover the magic ingredients and instructions to prepare the tart you see in the picture. Don't worry, you're in the right place. We provide all the ingredients and instructions you need. Plus, we've uploaded a helpful video on YouTube which you can find below. If you could kindly drop a like on the video, it would encourage us to continue providing more delicious dishes. Thank you and enjoy! 😊
                </p>
            </div>

            <img :src="recipie.img" alt="Delicious !!">
        </div>


        <div class="ingrdient-ytb_content">
            <iframe width="560" height="315" :src="`https://www.youtube.com/embed/${recipie.ytbLink}`"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
            </iframe>
            <div class="recipieInstruction"v-html="recipie.instruction">

            </div>
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
    width: 90%;
    margin:auto
}
.img_title {
    padding: 20px;
    display: grid;
    grid-template-columns: auto auto;
}

.img_title img {
    width:500px;
}

.img_title .title {
    font-size: 36px;
    font-family: "Roboto", sans-serif;
    font-weight: bolder;
    text-align: center;
    margin: 5px;
}
.content-title-txt{
    width: 550px;
}
.img_title .txt{
    font-size: 22px;
    font-family: 'Open Sans';
    text-align: justify;
}

.ingrdient-ytb_content{
    display: grid;
    grid-template-columns: auto auto;

}

.recipieInstruction {
    text-align: justify;
    width: 80%;
margin: auto;
font-size: 18px;
font-family: 'Open Sans';
}


</style>