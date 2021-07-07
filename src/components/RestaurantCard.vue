<template>
    <div class="restaurant-card-wrapper">
        <div class="restaurant-card">
            <div :style="{backgroundImage: `url(${infoRestaurant.img})`}" class="restaurant-img"></div>
            <div class="restaurant-info">
                <div class="top">
                    <p class="name">{{ infoRestaurant.name }}</p>
                    <div class="note">
                        <span>{{ infoRestaurant.note }}</span>
                    </div>
                </div>
                <p class="time">{{ infoRestaurant.driveTime }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'RestaurantCard',
        props: {
            infoRestaurant: Object
        }
    }
</script>

<style lang="scss">
    @import "../css/_variables.scss";
    .restaurant-card-wrapper {
        width: 100%;
        
        .restaurant-card {

            box-sizing: content-box;

            p {
                margin: 0;
            }
            
            .restaurant-img {
                background-image: url('https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8zNzg4MDJiMC1jNTI4LTQ4MjktYjBiNS0wY2M2NDBkZjYzY2QuanBlZw==');
                height: 128px;
                background-size: cover;
                background-position: center;
            }
            .restaurant-info {
                .top {
                    margin: 10px 0;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    font-weight: bold;
                    font-size: 1.2rem;
                    .note {
                        background-color: $light-grey3;
                        height: 30px;
                        width: 30px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-size: 0.8rem;
                        border-radius: 50%;
                    }
                }
                .time {
                    font-size: 0.9rem;
                    text-align: left;
                }
            }
        }
    }
</style>