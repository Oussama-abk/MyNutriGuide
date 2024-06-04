<template>
    <div>
        <Header></Header>
        <leftofrecipie></leftofrecipie>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from '../components/sections/Header.vue';
import Footer from '../components/sections/Footer.vue';
import leftofrecipie from '../components/leftofrecipie.vue';

export default {

    name: 'recipie-page',

    components:{
        Header,
        Footer,
        leftofrecipie,
    }

}
</script>

<style lang="css" scoped></style>