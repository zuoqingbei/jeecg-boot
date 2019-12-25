<template>
    <div class="app-product">
        <BaseBanner :bannerObj="bannerObj"/>
        <BaseBlock :baseBlockTitle="titleArr[0]" class="margin">
            <div class="product-top">
                <div class="product-top-item" v-for="item, index in productTArr" :key="index">
                    <img class="product-top-img" :src="item.imgSrc" alt="">
                    <div class="product-top-text">
                        <h3>{{ item.title }}</h3>
                        <div class="text-t">
                            <div class="text-title"><i></i>场景描述</div>
                            <div class="text-content">{{ item.content }}</div>
                        </div>
                        <div class="text-c">
                            <div class="text-title"><i></i>解决痛点</div>
                            <ul class="text-content">
                                <li v-for="item2, index2 in item.cList">{{ item2 }}</li>
                            </ul>
                        </div>
                        <div class="text-b">
                            <div class="text-title"><i></i>适用行业</div>
                            <ul class="text-content">
                                <li class="text-b-item" v-for="item2, index2 in item.bList">
                                    <img :src="item2.imgSrc" alt="">
                                    <span>{{ item2.name }}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </BaseBlock>
        <BaseBlock :baseBlockTitle="titleArr[1]" class="margin">
            <div class="product-center">
                <div class="product-center-item" v-for="item, index in productCArr" :key="index">
                    <img :src="item.imgSrc" alt="">
                    <div class="product-center-text">
                        <h3>{{ item.title }}</h3>
                        <p>{{ item.content }}</p>
                    </div>
                </div>
            </div>
        </BaseBlock>
        <BaseBlock :baseBlockTitle="titleArr[2]" class="margin">
            <div class="product-b-top" >海尔、海信、恒大、万科等大型企业数字化转型实施经验</div>
            <div class="swiper-container product-swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="item, index in productBArr" :key="index">
                        <div class="product-bottom">
                            <div class="product-bottom-item" v-for="item2, index2 in item" :key="index2">
                                <img :src="item2.imgSrc" alt="">
                                <div class="product-bottom-text">
                                    <h3>{{ item2.title }}</h3>
                                    <p>{{ item2.content }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
        </BaseBlock>
    </div>
</template>

<script>
    import BaseBanner from '@/front/components/BaseBanner'
    import AppProductCard from './components/AppProductCard'
    import BaseBlock from '../../components/BaseBlock'
    import Swiper from 'swiper'

    export default {
        name: 'ProductDetail',
        components: { BaseBlock, AppProductCard, BaseBanner },
        mounted() {
            var solutionSwiper = new Swiper('.product-swiper-container', {
                speed: 1000,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            })
        },
        data() {
            return {
                bannerObj: {
                    title: '企业统一大数据管理平台解决方案',
                    content: '基于海联大数据技术，协助企业构建数据仓库和数据分析应用平台，为决策者提供数据支持服务。并且通过整合各业务数据，构建经逻辑整合的、面向业务主题的综合应用数据仓库，支持高扩展性的辅助决策支持体系',
                    imgSrc: require('@/assets/home/banner1.png')
                },
                titleArr: [
                    { title: '业务场景', titleEN: 'ywcj' },
                    { title: '产品概览', titleEN: 'cpgl' },
                    { title: '业务场景', titleEN: 'ywcj' }
                ],
                productTArr: [
                    {
                        imgSrc: '',
                        title: '业务场景',
                        content: '业务场景业务场景业务场景业务场景业务场景业务场景',
                        cList: ['1.业务场景业务场景业务场景业务场景业务场景业务场景', '2.业务场景业务场景业务场景业务场景业务场景业务场景', '3.业务场景业务场景业务场景业务场景业务场景业务场景'],
                        bList: [
                            { imgSrc: '', name: '购物中心' },
                            { imgSrc: '', name: '购物中心' }
                        ]
                    },
                    {
                        imgSrc: '',
                        title: '业务场景',
                        content: '业务场景业务场景业务场景业务场景业务场景业务场景',
                        cList: ['1.业务场景业务场景业务场景业务场景业务场景业务场景', '2.业务场景业务场景业务场景业务场景业务场景业务场景', '3.业务场景业务场景业务场景业务场景业务场景业务场景'],
                        bList: [
                            { imgSrc: '', name: '购物中心' },
                            { imgSrc: '', name: '购物中心' }
                        ]
                    },
                    {
                        imgSrc: '',
                        title: '业务场景',
                        content: '业务场景业务场景业务场景业务场景业务场景业务场景',
                        cList: ['1.业务场景业务场景业务场景业务场景业务场景业务场景', '2.业务场景业务场景业务场景业务场景业务场景业务场景', '3.业务场景业务场景业务场景业务场景业务场景业务场景'],
                        bList: [
                            { imgSrc: '', name: '购物中心' },
                            { imgSrc: '', name: '购物中心' }
                        ]
                    },
                    {
                        imgSrc: '',
                        title: '业务场景',
                        content: '业务场景业务场景业务场景业务场景业务场景业务场景',
                        cList: ['1.业务场景业务场景业务场景业务场景业务场景业务场景', '2.业务场景业务场景业务场景业务场景业务场景业务场景', '3.业务场景业务场景业务场景业务场景业务场景业务场景'],
                        bList: [
                            { imgSrc: '', name: '购物中心' },
                            { imgSrc: '', name: '购物中心' }
                        ]
                    }
                ],
                productCArr: [
                    {
                        title: '产品概览',
                        content: '产品概览产品概览产品概览产品概览产品概览产品概览',
                        imgSrc: ''
                    },
                    {
                        title: '产品概览',
                        content: '产品概览产品概览产品概览产品概览产品概览产品概览',
                        imgSrc: ''
                    },
                    {
                        title: '产品概览',
                        content: '产品概览产品概览产品概览产品概览产品概览产品概览',
                        imgSrc: ''
                    },
                    {
                        title: '业务场景',
                        content: '产品概览产品概览产品概览产品概览产品概览产品概览',
                        imgSrc: ''
                    }
                ],
                productBArr: [
                    [
                        {
                            title: '实践案例',
                            content: '实践案例实践案例实践案例实践案例',
                            imgSrc: ''
                        },
                        {
                            title: '实践案例',
                            content: '实践案例实践案例实践案例实践案例实践案例',
                            imgSrc: ''
                        },
                        {
                            title: '实践案例',
                            content: '实践案例实践案例实践案例实践案例实践案例实践案例',
                            imgSrc: ''
                        }
                    ],
                    [
                        {
                            title: '实践案例',
                            content: '实践案例实践案例实践案例实践案例',
                            imgSrc: ''
                        },
                        {
                            title: '实践案例',
                            content: '实践案例实践案例实践案例实践案例实践案例',
                            imgSrc: ''
                        },
                        {
                            title: '实践案例',
                            content: '实践案例实践案例实践案例实践案例实践案例实践案例',
                            imgSrc: ''
                        }
                    ]
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .product-top {
        display: flex;
        justify-content: space-between;
        .product-top-item {
            width: 23%;
            .product-top-img {
                width: 100%;
                height: 1.2rem;
                background: #f99;
            }
            .product-top-text {
                height: 6rem;
                padding: 0 .2rem;
                background: #f9fafe;
                h3 {
                    line-height: .56rem;
                    font-size: 18px;
                    color: #042259;
                    text-align: center;
                }
                .text-title {
                    display: flex;
                    color: #042259;
                    font-size: 18px;
                    line-height: 18px;
                    margin-top: .24rem;
                    margin-bottom: .08rem;
                    i {
                        width: .16rem;
                        height: .16rem;
                        background: #99f;
                        margin-right: .05rem;
                    }
                }
                .text-content {
                    height: 1.5rem;
                    color: #2d3c59;
                    font-size: 16px;
                    line-height: .2rem;
                }
                .text-c {
                    .text-content {
                        li {
                            margin-top: .05rem;
                        }
                    }
                }
                .text-b {
                    .text-content {
                        display: flex;
                        height: auto;
                        li {
                            text-align: center;
                            font-size: 14px;
                            padding: 0 .2rem;
                            img {
                                display: block;
                                margin: .1rem auto;
                                width: .4rem;
                                height: .4rem;
                                background: #99f;
                            }
                        }
                    }
                }
            }
        }
    }

    .product-center {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .product-center-item {
            position: relative;
            width: 48%;
            margin-bottom: .5rem;
            img {
                width: 100%;
                height: 4.5rem;
                background: #f99;
            }
            .product-center-text {
                position: absolute;
                width: 100%;
                height: 2.5rem;
                padding: .8rem 1.5rem;
                bottom: 0;
                background: linear-gradient(180deg, rgba(9, 71, 166, 0), rgba(66, 82, 110, .89));
                h3 {
                    font-size: 18px;
                    font-weight: 700;
                    color: #fff;
                    text-align: center;
                    margin-bottom: .1rem;
                }
                p {
                    height: .6rem;
                    font-size: 16px;
                    line-height: .3rem;
                    color: #fff;
                }
            }
        }
    }

    .product-b-top {
        margin: -.3rem 0 .5rem;
        text-align: center;
        font-size: 16px;
        line-height: 16px;
        color: #2d3c59;
    }
    .product-bottom {
        display: flex;
        justify-content: space-around;
        .product-bottom-item {
            width: 25%;
            img {
                width: 100%;
                height: 1.5rem;
                background: #f99;
            }
            .product-bottom-text {
                height: 1.5rem;
                padding: .2rem;
                background: #f9fafe;
                h3 {
                    font-size: 18px;
                    line-height: .3rem;
                    color: #042259;
                    text-align: center;
                }
                p {
                    height: 1.2rem;
                    color: #2d3c59;
                    font-size: 16px;
                    line-height: .2rem;
                }
            }
        }
    }
</style>
