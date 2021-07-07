<template>
    <div class="header">
        <div class="title">
            <span class="titleStart">Rest ' </span>
            <span class="titleEnd">Otop</span>
        </div>
        <div class="wrapperInput">
            <input  v-bind:value="inputSearchRestaurant" v-on:input="inputSearchRestaurant= $event.target.value" type="text" placeholder="De quoi avez-vous envie ?">
            <ul class="searchResults">
                
                <li v-for="(restaurant, index) in searchRestaurantsArray" :key="index" class="containerRestaurantSearch">
                    <router-link :to="{ name: 'detail', params: { title: restaurant.name }}" >
                        <div class="wrapperImg">
                            <img :src="restaurant.img" alt="Logo du restaurant">
                        </div>
                        <p>{{ restaurant.name }}</p>
                    </router-link>
                </li>
            </ul>
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
                searchRestaurantsArray,
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
                z-index: 1000;
                top: 100%;
                width: 238px;
                background-color: $white;
                box-shadow: 0px 0px 10px rgb(0 0 0 / 10%);
                border-width: 0 1px 1px 1px;
                border-style: solid;
                border-color: #e2e2e2;
                list-style: none;
                margin: 0;
                padding: 0;

                .containerRestaurantSearch {

                    a {
                        text-decoration: none;
                        color: rgb(27, 26, 26);
                        display: flex;
                        align-items: center;
                        padding: 10px;

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

                    &:hover {
                        background-color: $light-grey1;
                    }
                    
                }
                
            }
        }
    }
    .banner {
        height: 200px;
        width: 100%;
        // background-image: url("https://www.ubereats.com/restaurant/_static/7b308f7cbbf8e335ceda0447a8bd7c63.png");
        // background-image: url("https://www.sbs.com.au/food/sites/sbs.com.au.food/files/styles/full/public/capture_9.png?itok=z-utSjDl&mtime=1471218264");
        // background-image: url("https://therantingpanda.files.wordpress.com/2016/10/ubereats-use-data.jpg?w=940&h=400&crop=1");
        background-image: url("../assets/img/banner.webp");


        background-size: cover;
        background-position: center center;
        margin-bottom: 60px;
    }

    $breakpoint-tablet: 600px;
    @media (max-width: $breakpoint-tablet) {
        .header {
            display: block;

            .title {
                margin-bottom: 20px;
            }
        }
        .banner {
            margin-top: 20px;
        }
    }
</style>