<template>
    <div class="container">
        <div class="container-header">
            <img @click.prevent="home" src="../../assets/logo.png" alt="logo">
        </div>
    </div>
</template>

<script>

export default{
    data(){
        return {

        }
    },

    methods:{
        home(){
            this.$router.push("/");
        }
    }
}

</script>

<style lang="css" scoped>

    .container-header{
        background-color: #FB8500;
    }

    .container-header img{
        margin-left: 1%;
    }

</style>