<template>
    <header class="base-header">
        <div class="fl base-header--logo">
            <img src="@/assets/logo.png" alt="青岛海联软件科技有限公司">
        </div>
        <div class="fl base-header--nav">
            <ul>
                <li
                    v-for="(item, index) in navArr"
                    @click="goView(item.name, index)"
                    :key="index"
                    class="fl">
                    <span :class="[activeIndex===item.name ? 'active' : '', 'line-bottom']">{{ item.label }}</span>
                    <div class="header-nav-list" v-if="item.list">
                        <span v-for="(item2, index2) in item.list" :key="index2">{{ item2 }}</span>
                    </div>
                </li>
            </ul>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'BaseHeader',
        data() {
            return {
                showList: 0,
                navArr: [
                    {name: "home", label: "首页"},
                    {name: "product", label: "产品介绍", list: ["产品1", "产品2", "产品3"]},
                    {name: "solution", label: "解决方案"},
                    {name: "cases", label: "行业案例", list: ["产品1", "产品2", "产品3"]},
                    {name: "know", label: "了解海联"},
                    {name: "about", label: "关于我们"}
                ]
            }
        },
        computed: {
            activeIndex () {
                return this.$route.name
            }
        },
        methods: {
            goView (name, index) {
                this.$router.push({
                    name: name
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .base-header {
        position: absolute;
        top: 0;
        z-index: 99;
        width: 100%;
        height: 100px;
        line-height: 100px;
        font-size: 16px;

        .base-header--logo {
            display: flex;
            width: 173px;
            height: 100%;
            margin: 30px 0 0 118px;
            justify-content: center;
            align-items: center;

            img {
                width: 100%;
            }
        }

        .base-header--nav {
            width: 80%;
            color: #fff;

            li {
                position: relative;
                width: 16%;
                text-align: center;

                .line-bottom {
                    display: inline-block;
                    border: 0;
                    transition: .3s all;
                }

                .line-bottom.active {
                    border-top: 5px solid #fff
                }

                .header-nav-list {
                    position: absolute;
                    display: none;
                    top: 100%;
                    left: 0;
                    width: 100%;

                    span {
                        display: block;
                        width: 100%;
                        line-height: 3rem;
                    }
                }

                &:hover .header-nav-list {
                    display: block;
                }
            }
        }
    }

</style>
