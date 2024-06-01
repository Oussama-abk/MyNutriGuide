<template>
    <div>
        <Header></Header>
        <home></home>
        <Footer></Footer>
    </div>
</template>

<script >
import Header from '../components/sections/Header.vue';
import Footer from '../components/sections/Footer.vue';
import home from '../components/home.vue';
export default{

    name:'Home-page',
    data(){
        return{

        }
    },

    components:{
        Header,
        Footer,
        home,
    }

}
</script>

<style lang="scss" scoped>

</style>