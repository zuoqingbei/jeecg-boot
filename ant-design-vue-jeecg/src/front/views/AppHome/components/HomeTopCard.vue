<template>
    <div class="home-top-card">
        <div class="home-top-card--img">
            <img :src="productObj.imgSrc" />
        </div>
        <div class="home-top-card--title">{{ productObj.title }}</div>
        <ul class="home-top-card--content">
            <li v-for="item, index in productObj.list" :key="index">{{ item.name }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "HomeTopCard",
        props: {
            productObj: {
                type: Object,
                required: true,
            }
        },
        data() {
            return {}
        },
        methods: {
            Trim(str) {
                return str.replace(/\n|\r\n/g,"<br/>");
            }
        }
    }
</script>

<style lang="scss" scoped>
    .home-top-card:hover {
        box-shadow: 0 0 .3rem #e3edff;
    }
    .home-top-card {
        padding-top: .34rem;
        text-align: center;
        color: #042259;
        border-radius: 6px;
        .home-top-card--img {
            display: flex;
            width: 100%;
            height: 1.12rem;
            justify-content: center;
            align-items: center;
            img {
                max-height: 1.12rem;
            }
        }
        .home-top-card--title {
            margin-bottom: .09rem;
            font-size: 24px;
            line-height: .7rem;
            color: #042259;
        }
        .home-top-card--content {
            padding: 0 .44rem;
            font-size: 18px;
            line-height: .18rem;
            color: #8caeed;
            li {
                margin-bottom: .4rem;
                cursor: pointer;
            }
        }

    }

    @keyframes bgMove {
        from { top: 0; }
        to { top: 15px }
    }

</style>
