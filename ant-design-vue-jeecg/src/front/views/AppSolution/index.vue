<template>
    <div class="app-solution">
        <BaseBanner/>
        <div class="solution-main">
            <div class="solution-main--item" v-for="item, index in solutionList" :key="index">{{ item }}</div>
        </div>
    </div>
</template>

<script>
    import BaseBanner from "@/front/components/BaseBanner";
    export default {
        name: 'AppSolution',
        components: {BaseBanner},
        data () {
            return {
                solutionList: ["产品1", "产品1", "产品1", "产品1", "产品1", "产品1"]
            }
        },
        component: {}
    }
</script>

<style lang="scss" scoped>
    .solution-main {
        display: flex;
        width: 80%;
        margin: 0 auto;
        flex-wrap: wrap;
        .solution-main--item {
            width: 30%;
            line-height: 20rem;
            text-align: center;
            margin-bottom: 1rem;
        }
    }
</style>
