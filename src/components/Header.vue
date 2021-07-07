<template>
    <div class="header">
        <div class="title">
            <span class="titleStart">Rest ' </span>
            <span class="titleEnd">Otop</span>
        </div>
        <div class="wrapperInput">
            <input v-model="inputSearchRestaurant" type="text" placeholder="De quoi avez-vous envie ?">
            <div class="searchResults">
                <router-link to="/restaurant">
                    <div v-for="(restaurant, index) in searchRestaurantsArray" :key="index" class="containerRestaurantSearch">
                    <div class="wrapperImg">
                        <img :src="restaurant.img" alt="Logo du restaurant">
                    </div>
                    <p>{{ restaurant.name }}</p>
                </div>
                </router-link>
            </div>
        </div>
    </div>
    <div class="banner"></div>
</template>

<script>
// Dependencies
    import { ref, watch } from 'vue'

    export default {
        name: 'Header',
        props: {
            all_restaurants: Array
        },
        setup(props) {
            // Input search
            let inputSearchRestaurant = ref('')
            let searchRestaurantsArray = ref([])

            watch(inputSearchRestaurant, value => {
                let regex = RegExp(value.toLowerCase())    
                value === '' ? searchRestaurantsArray.value = [] : searchRestaurantsArray.value = props.all_restaurants.filter(restaurant => regex.test(restaurant.name.toLowerCase()))       
            })

            return {
                inputSearchRestaurant,
                searchRestaurantsArray
            }
        }
    }
</script>

<style lang="scss">
    @import "../css/_variables.scss";
    
    .header {
        height: 120px;
        widows: 120%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .img {
            width: 200px;
        }
        .title {
            font-size: 2.1rem;

            .titleStart {
                letter-spacing: -1px;
            }
            .titleEnd {
                font-weight: bold;
                color: #5ed08c;
            }
        }
        .wrapperInput {
            position: relative;

            input {
                background-color: $light-grey1;
                border: none;
                border-bottom: 1px solid $light-grey2;
                height: 60px;
                width: 200px;
                outline: none;
                padding: 0 20px;
            }
            .searchResults {
                position: absolute;
                top: 100%;
                width: 100%;
                background-color: $white;
                box-shadow: 0px 0px 10px rgb(0 0 0 / 10%);
                border-width: 0 1px 1px 1px;
                border-style: solid;
                border-color: #e2e2e2;

                a {
                    text-decoration: none;
                    color: rgb(27, 26, 26);

                    .containerRestaurantSearch {
                        display: flex;
                        align-items: center;
                        padding: 10px;

                        &:hover {
                            background-color: $light-grey1;
                        }

                        .wrapperImg {
                            height: 60px;
                            width: 60px;
                            margin-right: 25px;
                            border-radius: 50%;
                            overflow: hidden;

                            img {
                                height: 100%;
                                width: auto;
                            }
                        }
                    }
                }
            }
        }
    }
    .banner {
        height: 200px;
        width: 100%;
        background-image: url("https://www.ubereats.com/restaurant/_static/7b308f7cbbf8e335ceda0447a8bd7c63.png");
        background-size: cover;
        background-position: center center;
    }

    $breakpoint-tablet: 600px;
    @media (max-width: $breakpoint-tablet) {
        .header {
            display: block;

            .title {
                margin-bottom: 20px;
            }

            .wrapperInput {
                .searchResults {
                    width: 238px;
                }
            }
        }

        .banner {
            margin-top: 20px;
        }
    }
</style>