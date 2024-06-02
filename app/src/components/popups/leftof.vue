<template>
    <div class="container">
        <div>
            <p>Veuillez saisir le plats que vous souhaitez</p>
            <searchbar/>
        </div>

    </div>
</template>

<script>
import searchbar from '../searchbar.vue';
export default {
    data () {
        

        return {}
    },

    components:{
        searchbar,
    }
}

</script>

<style lang="css" scoped>

</style>