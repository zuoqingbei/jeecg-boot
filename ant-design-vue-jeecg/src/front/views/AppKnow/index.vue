<template>
    <div class="app-know">
        <BaseBanner :bannerObj="bannerObj"/>
        <div class="news margin">
            <div class="news-title">新闻动态</div>
            <div class="news-item" v-for="item, index in newsArr" :key="index">
                <div class="news-l">
                    <span class="news-day">{{ item.day }}</span>
                    <span class="news-month">{{ item.month }}</span>
                </div>
                <div class="news-r">
                    <div class="news-text">
                        <h3 class="ellipsis">{{ item.title }}</h3>
                        <p>{{ item.content }}</p>
                    </div>
                    <div class="news-img">
                        <img :src="item.imgSrc" alt="">
                    </div>
                </div>
            </div>
            <div class="news-more">加载更多</div>
        </div>
    </div>
</template>

<script>
    import BaseBanner from "@/front/components/BaseBanner";
    export default {
        name: 'AppKnow',
        components: {BaseBanner},
        data () {
            return {
                bannerObj: {
                    title: '',
                    content: '',
                    imgSrc: ''
                },
                newsArr: [
                    {
                        month: '8月',
                        day: '01',
                        title: '骄傲的法式烘焙，除了精工细作的“慢”，还有新一代商业智能带来除了精工细作的“慢”，还有新一代商业智能带来商业智能带来',
                        content: '骄傲的法式烘焙，除了精工细作的“慢”，还有新一代商业智能带来骄傲的法式烘焙，除了精工细作的“慢”，还有新一代商业智能带来骄傲的法式烘焙，除了精工细作的“慢”，还有新一代商业智能带来',
                        imgSrc: ''
                    },
                    {
                        month: '8月',
                        day: '01',
                        title: '骄傲的法式烘焙，除了精工细作的“慢”，还有新一代商业智能带来',
                        content: '骄傲的法式烘焙，除了精工细作的“慢”，还有新一代商业智能带来骄傲的法式烘焙，除了精工细作的“慢”，还有新一代商业智能带来骄傲的法式烘焙，除了精工细作的“慢”，还有新一代商业智能带来',
                        imgSrc: ''
                    },
                    {
                        month: '8月',
                        day: '01',
                        title: '骄傲的法式烘焙，除了精工细作的“慢”，还有新一代商业智能带来',
                        content: '骄傲的法式烘焙，除了精工细作的“慢”，还有新一代商业智能带来骄傲的法式烘焙，除了精工细作的“慢”，还有新一代商业智能带来骄傲的法式烘焙，除了精工细作的“慢”，还有新一代商业智能带来',
                        imgSrc: ''
                    },
                    {
                        month: '8月',
                        day: '01',
                        title: '骄傲的法式烘焙，除了精工细作的“慢”，还有新一代商业智能带来',
                        content: '骄傲的法式烘焙，除了精工细作的“慢”，还有新一代商业智能带来骄傲的法式烘焙，除了精工细作的“慢”，还有新一代商业智能带来骄傲的法式烘焙，除了精工细作的“慢”，还有新一代商业智能带来',
                        imgSrc: ''
                    },
                    {
                        month: '8月',
                        day: '01',
                        title: '骄傲的法式烘焙，除了精工细作的“慢”，还有新一代商业智能带来',
                        content: '骄傲的法式烘焙，除了精工细作的“慢”，还有新一代商业智能带来骄傲的法式烘焙，除了精工细作的“慢”，还有新一代商业智能带来骄傲的法式烘焙，除了精工细作的“慢”，还有新一代商业智能带来',
                        imgSrc: ''
                    },
                    {
                        month: '8月',
                        day: '01',
                        title: '骄傲的法式烘焙，除了精工细作的“慢”，还有新一代商业智能带来',
                        content: '骄傲的法式烘焙，除了精工细作的“慢”，还有新一代商业智能带来骄傲的法式烘焙，除了精工细作的“慢”，还有新一代商业智能带来骄傲的法式烘焙，除了精工细作的“慢”，还有新一代商业智能带来',
                        imgSrc: ''
                    },
                    {
                        month: '8月',
                        day: '01',
                        title: '骄傲的法式烘焙，除了精工细作的“慢”，还有新一代商业智能带来',
                        content: '骄傲的法式烘焙，除了精工细作的“慢”，还有新一代商业智能带来骄傲的法式烘焙，除了精工细作的“慢”，还有新一代商业智能带来骄傲的法式烘焙，除了精工细作的“慢”，还有新一代商业智能带来',
                        imgSrc: ''
                    },
                    {
                        month: '8月',
                        day: '01',
                        title: '骄傲的法式烘焙，除了精工细作的“慢”，还有新一代商业智能带来',
                        content: '骄傲的法式烘焙，除了精工细作的“慢”，还有新一代商业智能带来骄傲的法式烘焙，除了精工细作的“慢”，还有新一代商业智能带来骄傲的法式烘焙，除了精工细作的“慢”，还有新一代商业智能带来',
                        imgSrc: ''
                    },
                    {
                        month: '8月',
                        day: '01',
                        title: '骄傲的法式烘焙，除了精工细作的“慢”，还有新一代商业智能带来',
                        content: '骄傲的法式烘焙，除了精工细作的“慢”，还有新一代商业智能带来骄傲的法式烘焙，除了精工细作的“慢”，还有新一代商业智能带来骄傲的法式烘焙，除了精工细作的“慢”，还有新一代商业智能带来',
                        imgSrc: ''
                    },
                    {
                        month: '8月',
                        day: '01',
                        title: '骄傲的法式烘焙，除了精工细作的“慢”，还有新一代商业智能带来',
                        content: '骄傲的法式烘焙，除了精工细作的“慢”，还有新一代商业智能带来骄傲的法式烘焙，除了精工细作的“慢”，还有新一代商业智能带来骄傲的法式烘焙，除了精工细作的“慢”，还有新一代商业智能带来',
                        imgSrc: ''
                    },
                ]
            }
        },
        component: {}
    }
</script>

<style lang="scss" scoped>
    .news {
        margin-top: -5.84rem;
        background: #fff;
        padding: 0 1rem;
        margin-bottom: 1rem;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,.1), 0 6px 18px 0 rgba(0,0,0,.12);
        .news-title {
            line-height: 2rem;
            color: #042259;
            font-size: 40px;
            text-align: center;
        }
        .news-item {
            display: flex;
            height: 2rem;
            .news-l {
                display: flex;
                width: 1.5rem;
                padding: .5rem 0;
                color: #042259;
                .news-day {
                    line-height: 1rem;
                    font-size: .6rem;
                }
                .news-month {
                    line-height: 1.7rem;
                    margin-left: -.1rem;
                    font-size: .24rem;
                }
            }
            .news-r {
                display: flex;
                width: calc(100% - 1rem);
                padding: .5rem 0;
                border-bottom: 1px solid rgba(0,0,0,.1);
                .news-text {
                    width: calc(100% - 1.5rem);
                    padding-right: .5rem;
                    h3 {
                        width: 100%;
                        height: 24px;
                        margin-bottom: .2rem;
                        font-size: 24px;
                        line-height: 24px;
                        color: #042259
                    }
                    p {
                        font-size: 16px;
                        line-height: .2rem;
                        color: #2d3c59
                    }
                }
                .news-img {
                    width: 1.5rem;
                    background: #99f;
                }
            }
        }
        .news-more {
            line-height: 1rem;
            color: #042259;
            font-size: 18px;
            text-align: center;
        }
    }
</style>
