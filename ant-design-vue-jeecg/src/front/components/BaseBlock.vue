<template>
    <div class="base-block">
        <div class="base-block--title">
            <span class="english">{{ baseBlockTitle.titleEN }}</span>
            <h2>{{ baseBlockTitle.title }}</h2>
            <span class="line-bottom"></span>
        </div>
        <div class="base-block-content">
            <slot/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BaseBlock",
        props: {
            baseBlockTitle: {
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
    .base-block {
        .base-block--title {
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
        .base-block-content {
            padding-bottom: 1rem;
        }
    }
</style>
