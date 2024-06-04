<template>
    <div>
      <div v-show="show" class="background-overlay"></div>
      <div v-show="show" class="popup-container">
        <div class="popup-header">
          <p class="popup-title">Veuillez saisir le plat que vous souhaitez :</p>
          <svg class="close-button" @click="closePopup" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"/></svg>
        </div>
        <div class="popup-content">

          <searchbar></searchbar>
        </div>
      </div>
    </div>
  </template>

<script>
import searchbar from '../searchbar.vue';

import bus from 'vue3-eventbus'





export default {
    name:'explore-popup',
    data () {
        

        return {
            show: false,
        }
    },

    mounted(){
        bus.on('openExplorePopup', ()=>{
            this.show = true;

        })
    },

    methods:{
        closePopup(){
            this.show = false
        }
    },

    components:{
        searchbar,
    }
}

</script>

<style lang="css" scoped>
.background-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Fond sombre semi-transparent */
  z-index: 998; /* Doit être inférieur à z-index du popup */
}

.popup-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  border: 1px solid #cccccc;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  z-index: 999;
  width: 90%; /* Full width on small screens */
  max-width: 500px; /* Max width for larger screens */
  box-sizing: border-box;
}

.popup-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.popup-title {
  font-size: 20px; /* Taille du titre */
  font-weight: bold; /* Gras */
  font-family: 'Open Sans', sans-serif;
  margin: auto;
}

.close-button {
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
}

.popup-content {
  padding: 50px 0 10px 0;
}

/* Media Queries */
@media (min-width: 600px) {
  .popup-container {
    width: 80%;
  }
}

@media (min-width: 900px) {
  .popup-container {
    width: 60%;
  }
}
</style>
