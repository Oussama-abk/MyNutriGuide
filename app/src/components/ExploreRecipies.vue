<template>
    <div >

        <div class="second-section">
            <p class="title-sec-section"> Découvrire nos recettes </p>

        </div>
        <div class="card-container">
            <div v-for="(recipie, index) in recipies" :key="index" class="card">
                <img :src="recipie.img" alt="Recipe Image" @click.prevent="redirect(index)">
                <p>{{ recipie.name }}</p>
            </div>
        </div>

        <p class="delicious">Delicious right ?</p>


    </div>
</template>

<script>
import axios from 'axios';
export default {

    name: 'explore-recipies',
    data() {
        return {
            recipies: [],
        }
    },
    mounted() {
        this.getAllrecipie();
    },

    methods: {


        redirect(index){
            window.location.replace(this.recipies[index].moreinfo)
        },
        async getAllrecipie() {
            try {
                const results = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=r')
                const fetchedRecipies = results.data.meals;

                if (results) {

                    for (let i = 0; i < 8; i++) {
                        this.recipies.push({
                            img: fetchedRecipies[i].strMealThumb,
                            name: fetchedRecipies[i].strMeal,
                            moreinfo: fetchedRecipies[i].strSource,

                        });
                    }
                }

            } catch (err) {
                console.log("here's the error", err)
            }
        }


    }
}

</script>


<style lang="css" scoped>
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
    width: calc(100% - 20px);
    max-width: 300px;
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

.title-sec-section {
    display: flex;
    font-family: "Roboto", sans-serif;
    font-size: 28px;
    font-weight: bold;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
}

.delicious {
    display: flex;
    justify-content: center;
    font-family: 'Courier New', Courier, monospace;
    font-size: 28px;
    margin-top: 20px;
}

@media (min-width: 600px) {
    .card {
        width: calc(50% - 20px);
    }
}

@media (min-width: 900px) {
    .card {
        width: calc(33.333% - 20px);
    }
}
</style>
