<template>
    <div id="app">
        <BaseHeader />
        <router-view class="app-main"/>
        <BaseFooter />
    </div>
</template>

<script>
    import '@/assets/css/common.css'
    import 'swiper/dist/css/swiper.css'
    import BaseHeader from "./components/BaseHeader";
    import BaseFooter from "./components/BaseFooter";
    export default {
        components: {BaseFooter, BaseHeader},
        data () {
            return {
            }
        },
        methods: {
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .app-main {
        min-height: 10rem;
    }
</style>
