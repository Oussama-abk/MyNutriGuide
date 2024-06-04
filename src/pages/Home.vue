<template>
    <div>
        <Header></Header>
        <intro></intro>
        <ExploreRecipies></ExploreRecipies>
        <Footer></Footer>
        <explore></explore>
        <leftof></leftof>

    </div>
</template>

<script >
import Header from '../components/sections/Header.vue';
import Footer from '../components/sections/Footer.vue';
import intro from '../components/intro.vue';
import ExploreRecipies from '../components/ExploreRecipies.vue';
import explore from '../components/popups/explore.vue';
import leftof from '../components/popups/leftof.vue';
export default{

    name:'Home-page',
    data(){
        return{

        }
    },

    components:{
        Header,
        Footer,
        intro,
        ExploreRecipies,
        explore,
        leftof,
    }

}
</script>

<style lang="scss" scoped>

</style>