<template>

        <div class="container">

            <div class="container-sec1-footer">
                <div class="container-content-sec1">
                    <div class="logo">
                        <img src="../../assets/logo.png" alt="logo">
                        <p>MyNutriGuide</p>
                    </div>

                    <p class="txt-sec1">Commencez dès aujourd'hui et transformez votre alimentation</p>
                
                </div>

            </div>

            <div class="container-sec2-footer">

                <div class="content-sec2">

                    <p class="rights-reserved">© 2024 ABAKARIM Oussama. All rights reserved.</p>
                    <div class="service-policy">
                        <p>Terms of Service</p>
                        <p>Privacy Policy</p>
                    </div>
                </div>

            </div>

        </div>


</template>

<script>
export default {
    data() {


        return {

        }
    }
}
</script>

<style lang="css" scoped>

.container{

    bottom: 0;
    width: 100%;
}
.container-sec1-footer{
    background-color:#FFB703;   
    color: white;
    padding:40px;
}

.container-sec2-footer{
    background-color: #FB8500;
    padding: 10px;

}



.logo {
    display: flex;
    align-items: center;
    justify-items: center;
    font-size:28px;
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    font-style: normal;

}

.txt-sec1{
font-size: 18px;
font-family: "Roboto", sans-serif;
width: 300px;

}

p{
margin: 0%;
}




.content-sec2{
display:grid ;
grid-template-columns: auto auto;
align-items: center;
}
.service-policy{
margin-left: auto;
display: flex;
}
.service-policy p{
    margin: 10px;
}

.rights-reserved{
    margin-left: 20px;
}
</style>