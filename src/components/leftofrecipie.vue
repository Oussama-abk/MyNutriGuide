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
    padding: 20px 0;
}

.container-txt {
    text-align: center;
    padding: 20px 0;
}

.container-txt .title {
    font-family: 'Open Sans', sans-serif;
    font-size: 2rem;
    color: black;
    margin: 0;
}

.container-txt .txt {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    color: #555;
    margin: 10px 0;
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
    cursor: pointer;
}

.card p {
    font-size: 1em;
    margin: 16px;
    color: #555;
}

@media (max-width: 768px) {
    .card {
        width: calc(50% - 20px);
    }
}

@media (max-width: 480px) {
    .card {
        width: calc(100% - 20px);
    }
    .container-txt .title {
        font-size: 1.5rem;
    }
    .container-txt .txt {
        font-size: 0.9rem;
    }
}
</style>
