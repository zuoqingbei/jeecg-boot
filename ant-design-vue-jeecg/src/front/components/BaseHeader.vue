<template>
    <header class="base-header">
        <div class="fl base-header--logo">
            <img src="@/assets/logo.png" alt="青岛海联软件科技有限公司">
        </div>
        <div class="fl base-header--nav">
            <ul>
                <li
                    v-for="(item, index) in navArr"
                    :key="index">
                    <span :class="[activeIndex===item.name ? 'active' : '']" @click="goPage(item.name, index)">{{ item.label }}</span>
                    <div class="header-nav-list" v-if="item.list">
                        <dl v-for="(item2, index2) in item.list" :key="index2">
                            <dt>{{ item2.title }}</dt>
                            <dd v-for="(item3, index3) in item2.itemList" @click="goPage(item.path, item3.query)">{{ item3.name }}</dd>
                        </dl>
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
                    { name: 'home', label: '首页' },
                    {
                        name: 'product',
                        label: '产品介绍',
                        path: 'productDetail',
                        list: [
                            {
                                title: '数据采集',
                                itemList: [
                                    { name: '数据填报平台', query: '' },
                                    { name: '数据补录平台', query: '' },
                                    { name: '智慧采集平台', query: '' }
                                ]
                            },
                            {
                                title: '数据处理',
                                itemList: [
                                    { name: '一站式数据处理平台', query: '' },
                                    { name: 'ETS调度管理平台', query: '' }
                                ]
                            },
                            {
                                title: '数据治理',
                                itemList: [
                                    { name: '智能数据治理平台', query: '' },
                                    { name: '元数据管理平台', query: '' },
                                    { name: '数据质量管理平台', query: '' },
                                    { name: '主数据管理平台', query: '' },
                                    { name: '数据共享交换平台', query: '' }
                                ]
                            },
                            {
                                title: '数据分析',
                                itemList: [
                                    { name: '一站式数据分析平台-帆软BI', query: '' },
                                    { name: '数据分析展示平台-永洪BI', query: '' },
                                    { name: '自助式数据分析平台-豌豆BI', query: '' },
                                    { name: '数据可视化平台-HL智屏', query: '' },
                                    { name: '数据挖掘平台-HLDM', query: '' }
                                ]
                            },
                        ]
                    },
                    {
                        name: 'solution',
                        label: '解决方案' ,
                        list: [
                            { title: '通用方案', itemList: [] },
                            { title: '智慧航空', itemList: [] },
                            { title: '智慧交通', itemList: [] },
                            { title: '智慧金融', itemList: [] },
                            { title: '智慧高校', itemList: [] },
                            { title: '智能制造', itemList: [] },
                            { title: '智慧客服', itemList: [] },
                            { title: '智慧物联', itemList: [] },
                        ]
                    },
                    {
                        name: 'cases',
                        label: '行业案例',
                        list: [
                            { title: '航空', itemList: [] },
                            { title: '物流', itemList: [] },
                            { title: '制造', itemList: [] },
                            { title: '金融', itemList: [] },
                            { title: '高校', itemList: [] },
                            { title: '呼叫中心', itemList: [] },
                            { title: '新能源', itemList: [] },
                            { title: '电商', itemList: [] }
                        ]
                    },
                    { name: 'know', label: '了解海联' },
                    { name: 'about', label: '关于我们' }
                ]
            }
        },
        computed: {
            activeIndex() {
                return this.$route.name
            }
        },
        methods: {
            //跳转
            goPage(name, query) {
                this.$router.push({
                    name: name,
                    query: query
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
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: .67rem;
        padding: 0 .96rem;
        line-height: .8rem;
        font-size: 18px;
        .base-header--logo {
            display: flex;
            height: .36rem;
            justify-content: center;
            align-items: center;
            img {
                height: 100%;
            }
        }
        .base-header--nav {
            height: 100%;
            color: #91a7d0;
            ul {
                display: flex;
                li {
                    margin: 0 .3rem;
                    text-align: center;
                    cursor: pointer;
                    span.active {
                        color: #073c9f
                    }
                    .header-nav-list {
                        position: absolute;
                        display: none;
                        justify-content: flex-end;
                        top: .67rem;
                        left: 0;
                        width: 100%;
                        padding-right: 2rem;
                        background: #fdfdfd;
                        border-top: 1px solid #e4e4ea;
                        dl {
                            width: 1.76rem;
                            padding: .17rem 0 .27rem .2rem;
                            text-align: left;
                            border-left: 1px solid #e4e4ea;
                            &:last-child {
                                border-right: 1px solid #e4e4ea;
                            }
                            dt {
                                font-size: 18px;
                                line-height: .56rem;
                                color: #042259;
                            }
                            dd {
                                font-size: 16px;
                                line-height: .4rem;
                                color: #2d3c59;
                                cursor: pointer;
                            }
                        }
                    }
                    &:hover .header-nav-list {
                        display: flex;
                    }
                }
            }

        }
    }
</style>
