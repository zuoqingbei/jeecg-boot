<template>
    <div class="app-product">
        <BaseBanner :bannerObj="bannerObj"/>
        <ul class="product-nav">
            <li v-for="item, index in produceNav" :key="index">{{ item }}</li>
        </ul>
        <div class="margin-product">
            <div class="app-product--title">
                大数据产品总览
            </div>
            <AppProductCard :product-data="productArr[0]" />
            <AppProductCard :product-data="productArr[1]" />
        </div>
        <div class="app-product--info">
            <div class="margin-product">
                与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元与现实
                的位置等与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、
                元素的位置与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；在界面中一致：所有的元素和结构需保持一致，比如：设计样元素的位置等与
                现实生活。
            </div>
            <div class="arrow"></div>
        </div>
        <div class="margin-product">
            <AppProductCard :product-data="productArr[2]" />
        </div>
    </div>
</template>

<script>
    import BaseBanner from "@/front/components/BaseBanner";
    import AppProductCard from "./components/AppProductCard";
    export default {
        name: 'AppProduct',
        components: {AppProductCard, BaseBanner},
        data () {
            return {
                bannerObj: {
                    title: '企业统一大数据管理平台解决方案',
                    content: '基于海联大数据技术，协助企业构建数据仓库和数据分析应用平台，为决策者提供数据支持服务。并且通过整合各业务数据，构建经逻辑整合的、面向业务主题的综合应用数据仓库，支持高扩展性的辅助决策支持体系',
                    imgSrc: require('@/assets/home/banner1.png')
                },
                produceNav: ["产品1", "产品1", "产品1", "产品1", "产品1", "产品1", "产品1", "产品1"],
                productArr: [
                    {
                        title: "产品分类一",
                        content: [
                            "安全、易用、低成本的密钥管理服务",
                            "安全、易用、低成本的密钥管理服务安全、易用低成本的密钥管理服务",
                            "安全、易用、低成本的密钥管理安全、易用成本的密钥管理服务服务",
                            "安全、易用、低成本的密钥管理服务安全、易用低成本的密钥务",
                            "安全、易用、低成本的密钥管理安全、易用、低成本的密钥管理服务服务"
                        ]
                    },
                    {
                        title: "产品分类二",
                        content: [
                            "安全、易用、低成本的密钥管理服务安全、易用成本的密钥管理服务",
                            "安全、易用、低成、低成本的密钥管理安全、易用低成本的密钥管理服务服务",
                            "安全、易用、低成本的密钥管理服务",
                            "安全、易用、低成本的密钥"
                        ]
                    },
                    {
                        title: "产品分类三",
                        content: [
                            "安全、易用、低成本的密钥管理服务安全、易用成本的密钥管理服务",
                            "安全、易用、低成、低成本的密钥管理安全、易用低成本的密钥管理服务服务"
                        ]
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .margin-product {
        width: 1350px;
        margin: 0 auto;
    }

    .app-product--title {
        line-height: 204px;
        font-size: 36px;
        text-align: center;
    }

    .product-nav {
        display: flex;
        width: 100%;
        li {
            flex: 1;
            line-height: 6rem;
            text-align: center;
        }
    }

    .app-product--info {
        position: relative;
        padding: 64px 0;
        margin: -34px 0 44px;
        background: #F5F5F6;
        font-size: 18px;
        color: #4A4A4A;

        .arrow {
            position: absolute;
            border-bottom: 10px solid #F5F5F6;
            border-right: 11px solid #fff;
            border-left: 11px solid #fff;
            top: -10px;
            left: 315px;
        }
    }
</style>
