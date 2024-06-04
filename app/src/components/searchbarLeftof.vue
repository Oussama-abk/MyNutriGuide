<template>

    <div class="search-container">
        <input type="text" class="search-input" v-model="search" @keydown.enter="recipiePage" placeholder="What are you looking for?">
        <button class="search-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search"
                viewBox="0 0 16 16">
                <path
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.415l-3.85-3.85a1.007 1.007 0 0 0-.115-.098zm-5.403 1.407a5.5 5.5 0 1 1 7.778-7.778 5.5 5.5 0 0 1-7.778 7.778z" />
            </svg>
        </button>
    </div>

</template>

<script>
export default {

name: 'search-bar',

data () {
    

    return {
        search: '',

    }
},

methods:{
    recipiePage (){   
        this.$router.push({ path: `/leftofRecipie/${this.search}`})
    }
}
}
</script>

<style lang="css" scoped>


.search-container {
display: flex;
align-items: center;
background-color: #fff;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
padding: 0px 20px;
width: 500px;
margin: auto;
}

.search-input {
border: none;
outline: none;
padding: 10px;
font-size: 16px;
flex-grow: 1;
}

.search-input::placeholder {
color: #aaa;
}

.search-button {
background: none;
border: none;
cursor: pointer;
outline: none;
padding: 0;
margin-left: 10px;
color: #aaa;
}

.search-button svg {
width: 20px;
height: 20px;
}

</style>




