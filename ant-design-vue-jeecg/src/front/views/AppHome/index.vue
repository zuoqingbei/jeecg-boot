<template>
    <div class="app-home">
        <BaseBanner />
        <div class="home-product">
            <HomeBlock :homeBlockTitle="titleArr[0]" class="margin">
                <span v-for="(item, index) in productArr" :key="index">{{ item }}</span>
            </HomeBlock>
        </div>
        <div class="home-solution">
            <HomeBlock :homeBlockTitle="titleArr[1]" class="margin">
                <div v-for="(item, index) in solutionArr" :key="index" class="home--card">
                    <div>{{ item }}</div>
                    <div>解决方案</div>
                </div>
            </HomeBlock>
        </div>
        <div class="home-cases margin">
            <HomeBlock :homeBlockTitle="titleArr[2]">
                <div v-for="(item, index) in solutionArr" :key="index" class="home--card">
                    <div>{{ item }}</div>
                    <div>案例</div>
                </div>
            </HomeBlock>
        </div>
        <div class="home-partner margin">
            <HomeBlock :homeBlockTitle="titleArr[3]">
                <div class="home-partner--content">
                    <div v-for="(item, index) in partnerArr" :key="index" class="home-partner--card">
                        <img class="dark" :src="item.dark" :alt="item.name">
                        <img class="light" :src="item.light" :alt="item.name">
                    </div>
                </div>
            </HomeBlock>
        </div>
    </div>
</template>

<script>

    import HomeBlock from "./components/HomeBlock";
    import HomeTopCard from "./components/HomeTopCard";
    import BaseBanner from "@/front/components/BaseBanner";

    export default {
        name: 'AppHome',
        components: {BaseBanner, HomeTopCard, HomeBlock},
        data() {
            return {
                titleArr: [
                    "公司产品",
                    "解决方案",
                    "成功案例",
                    "合作品牌"
                ],
                topCardArr: [
                    {
                        imgClass: "icon1",
                        title: "大数据实施",
                        content: "为企业的大数据实施、存储、计算环节提供完整的解决方案，让企业能聚焦于挖掘自身大数据资产的商业价值"
                    },
                    {
                        imgClass: "icon2",
                        title: "数据分析",
                        content: "多维分析、可视化报表开发，为用户提供简便、易用、高性能的数据分析与可视化"
                    },
                    {
                        imgClass: "icon3",
                        title: "数据治理",
                        content: "面向企业数据治理需求，提供完善的数据元信息管理、主数据管理功能"
                    }
                ],
                productArr: ["大数据平台", "企业数据仓库", "数据挖掘", "人工智能"],
                solutionArr: ["交通大数据", "服务业大数据", "金融风险大数据", "供应商绩效评价", "NLP自然语言处理", "人脸闸机", "人脸考勤", "无人机盘库"],
                partnerArr: [
                    {name: "海尔", dark: require("@/assets/partner/partner1.png"), light: require("@/assets/partner/partner1l.png")},
                    {name: "海信", dark: require("@/assets/partner/partner2.png"), light: require("@/assets/partner/partner2l.png")},
                    {name: "电建", dark: require("@/assets/partner/partner3.png"), light: require("@/assets/partner/partner3l.png")},
                    {name: "好品", dark: require("@/assets/partner/partner4.png"), light: require("@/assets/partner/partner4l.png")},
                    {name: "联信", dark: require("@/assets/partner/partner5.png"), light: require("@/assets/partner/partner5l.png")},
                    {name: "清算", dark: require("@/assets/partner/partner6.png"), light: require("@/assets/partner/partner6l.png")},
                    {name: "日日顺", dark: require("@/assets/partner/partner7.png"), light: require("@/assets/partner/partner7l.png")},
                    {name: "航空", dark: require("@/assets/partner/partner8.png"), light: require("@/assets/partner/partner8l.png")},
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .home-top {
        padding-bottom: 148px;
    }

    .home-product{
        height: 565px;
        padding: 54px 0 137px;
        font-size: 24px;
    }

    .home-solution,.home-cases {
        padding: 89px 0 80px;
        background: #F3F5F6;

        .home--card {
            width: 380px;
            height: 380px;
            margin-bottom: 100px;
            padding: 10rem 0;
            text-align: center;
            font-size: 1.5rem;
            background: #fff;
        }
    }

    .home-cases {
        padding: 122px 0 406px;
        background: #fff;
    }

    .home-partner--content {
        display: flex;
        margin: -120px 0 120px;
        justify-content: space-around;
        flex-wrap: wrap;

        .home-partner--card{
            display: flex;
            width: 230px;
            margin: 0 87px;
            justify-content: center;
            align-items: center;

            img {
                transform: scale(.5, .5);
            }

            .light {
                display: none;
            }

            &:hover .dark {
                display: none;
            }

            &:hover .light {
                display: block;
            }
        }
    }
</style>
