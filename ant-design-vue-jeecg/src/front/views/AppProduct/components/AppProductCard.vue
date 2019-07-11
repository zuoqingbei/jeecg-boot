<template>
    <div class="app-product-card">
        <div class="product-card--title">
            <img src="@/assets/产品icon.png" >
            <span>{{ productData.title }}</span>
        </div>
        <div class="product-card--content">
            <div class="product-block" v-for="(item, index) in productData.content" :key="index">
                <div class="product-block--title">产品名称</div>
                <div class="product-block--content">{{ item }}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AppProductCard",
        props: {
            productData: {
                type: Object,
                required: true,
                default: {
                    title: "--",
                    content: ["--"]
                }
            }
        },
        data() {
            return {}
        }
    }
</script>

<style lang="scss" scoped>
    .app-product-card {

        .product-card--title {
            border-bottom: 1px solid #D8D8D8;

            img {
                display: inline-block;
                width: 48px;
                margin-bottom: 17px;
                vertical-align: bottom;
            }

            span {
                font-size: 22px;
                line-height: 70px;
            }
        }

        .product-card--content {
            display: flex;
            margin-bottom: 64px;
            flex-wrap: wrap;

            .product-block {
                width: 374px;
                margin: 20px 76px 20px 0;

                .product-block--title {
                    font-size: 22px;
                    color: #2C8EFF;
                }

                .product-block--content {
                    font-size: 18px;
                    color: #4A4A4A;
                }
            }
        }
    }
</style>
