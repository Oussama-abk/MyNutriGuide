<template>
    <div v-if="show" class="container">
        <div>
            <p>Veuillez saisir le plats que vous souhaitez</p>
            <searchbar/>
        </div>

    </div>
</template>

<script>
import searchbar from '../searchbar.vue';
// import { default as eventBus } from '@/plugins/eventBus.js'; // Adjust the path if necessary




export default {
    name:'explore-popup',
    data () {
        

        return {
            show: false,
        }
    },

    mounted(){
        // eventBus.$on('openExplorePopup', ()=>{
        //     this.show = true;
        // })
    },

    methods:{

    },

    components:{
        searchbar,
    }
}

</script>

<style lang="css" scoped>
.container{
    position:fixed;
    background-color: rgb(161, 161, 161);
    margin: auto;

}

</style>