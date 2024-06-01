<template>
    <div>
        <Header></Header>
        <Recipies></Recipies>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from '../components/sections/Header.vue';
import Footer from '../components/sections/Footer.vue';
import Recipies from '../components/recipies.vue';

export default {

    name: 'recipie-page',

    components:{
        Header,
        Footer,
        Recipies,
    }

}
</script>

<style lang="css" scoped></style>