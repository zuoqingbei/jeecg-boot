<template>
    <div class="base-banner">
        <div class="swiper-container banner-swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="item, index in bannerList" :key="index">
                    <div :class="[index == 0 ? 'banner-bg-0' : '', 'banner-item-bg']">
                        <div class="banner-item-content">
                            <h2>{{ item.title }}</h2>
                            <p>{{ item.content }}</p>
                            <span>了解更多</span>
                        </div>
                        <template v-if="index != 0">
                            <img :src="item.imgSrc" class="banner-item-img">
                        </template>
                    </div>
                </div>
            </div>
            <div class="swiper-pagination"></div>
            <!-- 如果需要导航按钮 -->
            <!--<div class="swiper-button-prev"></div>-->
            <!--<div class="swiper-button-next"></div>-->
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
            var bannerSwiper = new Swiper ('.banner-swiper-container', {
                loop: true,
                // autoplay: {
                //     disableOnInteraction: false,    // 用户操作swiper之后，是否禁止autoplay
                // },
                pagination: {
                    el: '.swiper-pagination',
                    bulletClass : 'my-bullet',
                    bulletActiveClass: 'my-bullet-active',
                },
                speed:1000,
                // navigation: {
                //     nextEl: ".swiper-button-next",
                //     prevEl: ".swiper-button-prev"
                // },
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
            return {
                bannerList: [
                    {
                        title: '企业介绍',
                        content: '海联科技\n' +
                            '一站式数据全生命周期产品与服务提供商\n' +
                            '提供数据采集、数据处理、数据治理、数据分析、运营监控产品与服务',
                        name: '',
                        imgSrc: ''
                    },
                    {
                        title: '企业统一大数据管理平台解决方案',
                        content: '基于海联大数据技术，协助企业构建数据仓库和数据分析应用平台，为决策者提供数据支持服务。并且通过整合各业务数据，构建经逻辑整合的、面向业务主题的综合应用数据仓库，支持高扩展性的辅助决策支持体系',
                        name: '',
                        imgSrc: require('@/assets/home/banner1.png')
                    },
                    {
                        title: '智慧客服解决方案',
                        content: '海联科技充分运用现代通信、大数据和人工智能技术，将自助语音、人工、知识信息资源紧密连接在一起，对资源进行统一协作和共享应用，进而优化服务流程，提高服务水平和效率，真正做到实时、便捷、智能、高效、可控。',
                        name: '',
                        imgSrc: require('@/assets/home/banner1.png')
                    },
                    {
                        title: '金融风险全面管控解决方案',
                        content: '海联科技充分运用大数据和人工智能技术手段，结合丰富的银行、保险以及其他金融机构的项目经验，构建风险数据模型和风险应用平台，全面提升金融机构风险管控能力。',
                        name: '',
                        imgSrc: require('@/assets/home/banner1.png')
                    },
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .base-banner {
        width: 100%;
        height: 8.4rem;
        .banner-swiper-container {
            height: 100%;
            .banner-item-bg {
                display: flex;
                justify-content: space-between;
                height: 100%;
                padding-top: .8rem;
                padding-left: .96rem;
                background: url("../../assets/home/banner-bg.jpg") center no-repeat;
                &.banner-bg-0 {
                    background: url("../../assets/home/banner.jpg") center no-repeat;
                }
                .banner-item-content {
                    width: 7.8rem;
                    height: 100%;
                    padding-top: 1.35rem;
                    color: #042259;
                    h2 {
                        font-size: 40px;
                        color: #042259;
                        line-height: 1.4rem;
                    }
                    p {
                        font-size: 16px;
                        line-height: .34rem;
                        margin-bottom: 1.04rem
                    }
                    span {
                        display: block;
                        width: 1.82rem;
                        height: .5rem;
                        color: #073c9f;
                        text-align: center;
                        line-height: .5rem;
                        border: 2px solid #073c9f;
                        border-radius: 6px;
                        cursor: pointer;
                    }
                }
                .banner-item-img {

                }
            }
        }
    }
</style>
<style>
    .my-bullet {
        margin: 0 .13rem;
        background: #073c9f;
        width: .12rem;
        height: .12rem;
        display: inline-block;
        border-radius: 100%;
        opacity: .16;
    }
    .my-bullet-active {
        opacity: 1;
    }
    .base-banner .swiper-pagination-fraction,.base-banner .swiper-pagination-custom,.base-banner .swiper-container-horizontal > .swiper-pagination-bullets {
        bottom: .6rem;
    }
</style>
