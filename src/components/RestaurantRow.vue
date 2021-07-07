<template>
    <div class="restaurant-row">
        <h2 class="title">Nos restaurants</h2>
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
            Slider
        },
        props: {
            restaurantsRowArray: Array
        }
    }
</script>