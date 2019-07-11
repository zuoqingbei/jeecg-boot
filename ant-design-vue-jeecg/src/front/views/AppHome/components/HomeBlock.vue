<template>
    <div class="home-block">
        <div class="home-block--title">
            <h2>{{ homeBlockTitle }}</h2>
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
                type: String,
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
        padding: 42px 0 0;

        .home-block--title {
            width: 100%;
            height: 130px;
            text-align:center;

            h2 {
                line-height: 126px;
                font-size: 36px;
                font-weight: 300
            }

            .line-bottom {
                display:block;
                width: 120px;
                height: 4px;
                margin: 0 auto;
                background: -webkit-linear-gradient(left, #2484F2 , #00C1B8);
                background: -o-linear-gradient(right, #2484F2 , #00C1B8);
                background: -moz-linear-gradient(right, #2484F2 , #00C1B8);
                background: linear-gradient(to right, #2484F2 , #00C1B8);
            }
        }

        .home-block-content {
            display: flex;
            padding: 120px 0 0;
            justify-content: space-around;
            flex-wrap: wrap;
        }
    }
</style>
