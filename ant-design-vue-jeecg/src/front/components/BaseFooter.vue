<template>
    <div class="base-footer">
        <div class="base-footer--top">
            <div class="footer-logo">
                <img src="../../assets/logoicon.png" alt="">
            </div>
            <div class="footer-top-item">
                <ul>
                    <li class="footer-title">明星产品</li>
                    <li>一站式数据分析平台-ABI</li>
                    <li>自助式数据分析平台-豌豆BI</li>
                    <li>智能数据问答平台-智问</li>
                    <li>智能数据治理平台-睿治</li>
                </ul>
            </div>
            <div class="footer-top-item">
                <ul>
                    <li class="footer-title">行业资讯</li>
                    <li>商业智能</li>
                    <li>数据分析</li>
                    <li>报表工具</li>
                    <li>数据治理</li>
                    <li>数据可视化</li>
                </ul>
            </div>
            <div class="fl footer-top-item">
                <ul>
                    <li class="footer-title">服务方式</li>
                    <li>渠道咨询：137-0121-6790</li>
                    <li>直销咨询：137-0121-6791</li>
                    <li>
                        技术支持QQ：400-0011-866
                        <br/>
                        （工作日9:00-18:00）
                    </li>
                    <li>
                        数据产品建议邮箱
                        <br/>
                        service@hlsofttech.com
                    </li>
                </ul>
            </div>
        </div>
        <div class="base-footer--bottom">
            Copyright <span>&copy;</span> 2018 青岛海联软件科技有限公司 版权所有 鲁ICP备17043642号
        </div>
    </div>
</template>

<script>
    export default {
        name: 'BaseFooter',
        data() {
            return {}
        },
        component: {}
    }
</script>

<style lang="scss" scoped>
    .base-footer {
        height: 6.28rem;
        color: #7f889e;
        font-size: 16px;
        line-height: .26rem;
        background: #f9fafe;
        .base-footer--top {
            display: flex;
            height: 4.95rem;
            padding: .88rem .96rem 0;
            border-bottom: 1px solid #d7ddef;
            li {
                margin-bottom: .25rem;
                &.footer-title {
                    color: #000;
                    font-weight: 600;
                }
            }
            .footer-logo {
                margin: .35rem 3.45rem 0 2.5rem;
            }
            .footer-top-item {
                flex: 1;
            }
        }
        .base-footer--bottom {
            text-align: center;
            line-height: 1.32rem;
            span {
                font-size: 20px;
                color: #000;
            }
        }
    }
</style>
