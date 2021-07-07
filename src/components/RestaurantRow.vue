<template>
    <div class="restaurant-row">
        <h2 class="title">{{ titleRow }}</h2>
        <div class="wrapper-card">
            <Slider :restaurantsRowArray="restaurantsRowArray" />
        </div>
    </div>
</template>

<script>
    import Slider from './Slider'
    export default {
        name: 'RestaurantRow',
        components: {
            Slider,
        },
        props: {
            restaurantsRowArray: Array,
            titleRow: String
        }
    }
</script>

<style lang="scss">
    h2 {
        margin-bottom: 0.5rem;
    }
</style>