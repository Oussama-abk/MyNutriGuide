<template>
    <div class="container_recipie">
        <div class="container-txt">
            <p class="title">Découvrez Nos Délicieux Plats</p>
            <p class="txt">Cliquez sur un Plat pour Voir les Ingrédients et les Instructions</p>
        </div>




        <div class="card-container">
            <div v-for="(recipie, index) in recipies.slice(0, 6)" :key="index" class="card" >
                <img :src="recipie.img" alt="Recipe Image" @click.prevent="redirect(index)">
                <p>{{ recipie.name }}</p>
            </div>
        </div>

    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'recipie-leftof',
    data() {


        return {
            query: '',
            recipies: [],
        }
    },

    created() {
        this.fetchRecipe();
    },

    mounted() {
        this.getrecipie();
    },

    methods: {

        fetchRecipe() {

            this.query = this.$route.params.ingredient;



        },

        redirect(index){

            window.location.replace(this.recipies[index].src)

        },

        async getrecipie() {
            try {
                const results = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${this.query}`)


                const fetchedRecipies = results.data.meals;

                if (results) {

                    for (let i = 0; i < fetchedRecipies.length; i++) {

                        const dishname = fetchedRecipies[i].strMeal;
                        const dish = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${dishname}`);
                        if (dish) {

                            const moreinfo = dish.data.meals[0].strSource;
                            this.recipies.push({
                                img: fetchedRecipies[i].strMealThumb,
                                name: fetchedRecipies[i].strMeal,
                                src: moreinfo,
                            });
                        }


                    }
                    console.log(this.recipies)


                }

            } catch (err) {
                console.log("here's the error", err)
            }
        }


    }
}
</script>

<style lang="css" scoped>
.container_recipie {
    width: 90%;
    margin: auto;
}


.card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
}

.card {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    width: calc(33.333% - 20px);
    box-sizing: border-box;
    text-align: center;
    transition: transform 0.3s, box-shadow 0.3s;

}

.card:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.card img {
    width: 100%;
    height: auto;
}

.card p {
    font-size: 1em;
    margin: 16px;
    color: #555;
}

p.title-sec-section {
    display: flex;
    ;
    font-family: "Roboto", sans-serif;
    font-size: 28px;
    font-weight: bold;
    align-items: center;
    justify-content: center;
}

.container-txt {
    text-align: left;
    padding: 20px 0px;
}

.container-txt .title {
    font-family: 'open sans';
    font-size: 36px;
    color: black;
    margin: 0%
}

.container-txt .txt {
    font-family: 'roboto';
    font-size: 16px;
    color: #555;

}
</style>