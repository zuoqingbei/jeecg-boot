<template>
    <div class="home-top-card">
        <div class="home-top-card--img">
            <div class="bg"></div>
            <div :class="['icon', imgClass]"></div>
        </div>
        <div class="home-top-card--title">{{ title }}</div>
        <div class="home-top-card--content">{{ content }}</div>
    </div>
</template>

<script>
    export default {
        name: "HomeTopCard",
        props: {
            imgClass: {
                type: String,
                required: true,
                default: "icon1"
            },
            title: {
                type: String,
                required: false,
                default: "--"
            },
            content: {
                type: String,
                required: false,
                default: "--"
            }
        },
        data() {
            return {}
        }
    }
</script>

<style lang="scss" scoped>
    .home-top-card:hover .home-top-card--img .icon {
        top: 0;
    }
    .home-top-card {
        width: 288px;
        text-align: center;

        .home-top-card--img {
            position: relative;
            width: 256px;
            height: 271px;
            margin: 0 auto;

            div {
                position: absolute;
                top: 0;
                width: 100%;
                height: 100%;
                background-size: 100%;
            }

            .bg {
                width: 249px;
                height: 239px;
                background-image: url("../../../../assets/元素.png");
                animation: bgMove 3s linear 0s alternate infinite;
            }

            .icon {
                z-index: 10;
                width: 256px;
                height: 256px;
                top: 15px;
                transition: .3s all;
            }

            .icon1 {
                background-image: url("../../../../assets/icon1.png");
            }

            .icon2 {
                background-image: url("../../../../assets/icon2.png");
            }

            .icon3 {
                background-image: url("../../../../assets/icon3.png");
            }
        }

        .home-top-card--title {
            font-size: 24px;
            line-height: 64px;
        }

        .home-top-card--content {
            font-size: 16px;
            color: #647382;
        }

    }

    @keyframes bgMove {
        from { top: 0; }
        to { top: 15px }
    }

</style>
