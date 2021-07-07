<template>
    <carousel :settings="settings" :breakpoints="breakpoints">
		<slide v-for="(card, index) in restaurantsRowArray" :key="index">
			<restaurant-card :infoRestaurant="card" />
		</slide>
		<template #addons>
			<navigation />
		</template>
	</carousel>
</template>

<script>
    import RestaurantCard from './RestaurantCard.vue'
    // If you are using PurgeCSS, make sure to whitelist the carousel CSS classes

    import 'vue3-carousel/dist/carousel.css'
    import { Carousel, Slide, Navigation } from 'vue3-carousel'

    export default {
        props: {
            restaurantsRowArray: Array
            },
            components: {
            Carousel,
            Navigation,
            Slide,
            RestaurantCard
        },
        setup() {
            return {
                // carousel settings
                settings: {
                    itemsToShow: 1,
                    snapAlign: "center"
                },
                // breakpoints are mobile first
                // any settings not specified will fallback to the carousel settings
                breakpoints: {
                    // 700px and up
                    0: {
                        itemsToShow: 1,
                        itemsToScroll: 1,
                        snapAlign: "center"
                    },
                    700: {
                        itemsToShow: 3,
                        itemsToScroll: 3,
                        snapAlign: "center"
                    },
                    // 1024 and up
                    1024: {
                        itemsToShow: 4,
                        itemsToScroll: 4,
                        snapAlign: "start"
                    }
                }
            }
        }
    }
</script>

<style lang="scss">
    @import "../css/_variables.scss";
    .carousel__slide {
        padding: 10px;
    }

    .carousel__prev,
    .carousel__next {
        box-sizing: content-box;
        border: 5px solid white;
        background-color: $black;
    }
</style>