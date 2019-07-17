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
        beforeMount() {
            let html = document.getElementsByTagName("html")[0];
            let oWidth = document.body.clientWidth || document.documentElement.clientWidth;
            html.style.fontSize = oWidth / 1920 * 100 + "px";
        },
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
