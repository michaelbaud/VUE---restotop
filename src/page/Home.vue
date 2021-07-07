<template>
    <div class="home">
        <Header :all_restaurants="all_restaurants" />
        <RestaurantRow v-for="(restaurantsRowArray, index) in restaurantsRowsArray" :key="index" :restaurantsRowArray="restaurantsRowArray" />
    </div>
</template>

<script>
    // Dependencies
    import { onMounted, ref } from 'vue'

    // BDD
    import bdd from '../bdd/restaurants'

    // Components
    import Header from '../components/Header'
    import RestaurantRow from '../components/RestaurantRow'

    export default {
        name: 'Home',
        components: {
            Header,
            RestaurantRow,
        },
        setup() {

            class Restaurant {
                constructor(name, note, img, driveTime) {
                    this.name = name,
                    this.note = note,
                    this.img = img,
                    this.driveTime = driveTime
                }
            }

            let restaurantsRowsArray = ref([])
            let all_restaurants = ref([])

            const makeRowsRestaurants = () => {
                let rowRestaurants = []

                for (let restaurant of bdd) {
                    const newRestaurant = new Restaurant(restaurant.name, restaurant.note, restaurant.image, restaurant.drive_time)
                    all_restaurants.value.push(newRestaurant)


                    if(rowRestaurants.length === 7) {
                        rowRestaurants.push(newRestaurant)
                        restaurantsRowsArray.value.push(rowRestaurants)
                        rowRestaurants = []
                    } else {
                        rowRestaurants.push(newRestaurant)
                    }
                }
            }

            onMounted(makeRowsRestaurants)

            return {
                restaurantsRowsArray,
                all_restaurants
            }
        }
    }
</script>

<style lang="scss">
    
</style>