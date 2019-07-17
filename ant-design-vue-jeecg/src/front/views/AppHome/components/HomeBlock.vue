<template>
    <div class="home-block">
        <div class="home-block--title">
            <span class="english">{{ homeBlockTitle.titleEN }}</span>
            <h2>{{ homeBlockTitle.title }}</h2>
            <span class="line-bottom"></span>
        </div>
        <div class="home-block-content">
            <slot/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeBlock",
        props: {
            homeBlockTitle: {
                type: Object,
                required: true
            }
        },
        data() {
            return {}
        }
    }
</script>

<style lang="scss" scoped>
    .home-block {
        .home-block--title {
            width: 100%;
            height: 2.02rem;
            padding-top: .6rem;
            text-align:center;
            color: #042259;
            .english {
                font-size: 16px;
            }
            h2 {
                margin-bottom: .05rem;
                line-height: .6rem;
                font-size: 32px;
                font-weight: 300;
                color: #042259;
            }
            .line-bottom {
                display:block;
                width: .38rem;
                height: .04rem;
                margin: 0 auto;
                border-radius: 2px;
                background: #073c9f;
            }
        }
        .home-block-content {
            padding-bottom: 1rem;
        }
    }
</style>
