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


.container {
    bottom: 0;
    width: 100%;
}

.container-sec1-footer {
    background-color: #FFB703;
    color: white;
    padding: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
}

.container-content-sec1 {
    max-width: 100%;
}

.container-sec2-footer {
    background-color: #FB8500;
    padding: 10px;
}

.logo {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    font-style: normal;
    margin-bottom: 20px;
}

.logo img {
    margin-right: 10px;
}

.txt-sec1 {
    font-size: 18px;
    font-family: "Roboto", sans-serif;
    width: 100%;
    max-width: 300px;
}

p {
    margin: 0;
}

.content-sec2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.service-policy {
    margin-top: 10px;
    display: flex;
    justify-content: center;
}

.service-policy p {
    margin: 10px;
}

.rights-reserved {
    margin: 0;
}

/* Media Queries */
@media (min-width: 600px) {
    .container-sec1-footer {
        flex-direction: row;
        justify-content: space-between;
    }

    .logo {
        margin-bottom: 0;
    }

    .content-sec2 {
        flex-direction: row;
        justify-content: space-between;
    }

    .service-policy {
        margin-top: 0;
    }

    .rights-reserved {
        margin-left: 20px;
    }
}
</style>

