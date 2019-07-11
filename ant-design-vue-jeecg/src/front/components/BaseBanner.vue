<template>
    <div class="base-banner">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide"><img class="base-banner--img" src="@/assets/banner-home.png"/></div>
                <div class="swiper-slide"><img class="base-banner--img" src="@/assets/banner-product.png"/></div>
            </div>
            <!-- 如果需要分页器 -->
            <!--<div class="swiper-pagination"></div>-->
            <!-- 如果需要导航按钮 -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
            <!-- 如果需要滚动条 -->
            <!--<div class="swiper-scrollbar"></div>-->
        </div>
        <!--<img v-if="baseBannerImg" class="base-banner&#45;&#45;img" src="@/assets/banner-home.png"/>-->
        <!--<img v-else class="base-banner&#45;&#45;img" src="@/assets/banner-product.png"/>-->
    </div>
</template>

<script>
    import Swiper from 'swiper';
    export default {
        name: "BaseBanner",
        mounted(){
            new Swiper ('.swiper-container', {
                loop: true,
                autoplay: {
                    disableOnInteraction: false,    // 用户操作swiper之后，是否禁止autoplay
                },
                speed:1000,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                },
            })
        },
        props: {
            baseBannerImg: {
                type: Boolean,
                require: false,
                default: true
            }
        },
        data () {
            return {}
        }
    }
</script>

<style scoped>
    .base-banner {
        width: 100%;
    }

    .base-banner--img {
        display: block;
        width: 100%;
    }

</style>
