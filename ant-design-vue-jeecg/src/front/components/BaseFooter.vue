<template>
    <div class="base-footer">
        <div class="base-footer--top">
            <div class="fl footer-about">
                <div class="footer-title">关于我们</div>
                <div class="footer-content">
                    青岛海联软件科技有限公司是一家致力于提供大数据实施、移动互联网技术解决方案和IT服务的技术型企业。海联科技在大中型互联网系统集群建设与服务方面积累了丰富的经验，并在商务智能与数据处理等领域形成了独特的技术优势。
                </div>
            </div>
            <div class="fl footer-solution">
                <div class="footer-title">解决方案</div>
                <div class="footer-content">
                    <div>企业大数据</div>
                    <div>数据仓库</div>
                    <div>数据挖掘</div>
                    <div>数据可视化</div>
                    <div>日俄人工智能</div>
                </div>
            </div>
            <div class="fl footer-contact">
                <div class="footer-title">联系我们</div>
                <div class="content">
                    <div>QQ群：650596829</div>
                    <div>销售邮箱：sales@hlsofttech.com</div>
                    <div>联系电话：陈先生 19853229926</div>
                    <div>办公地址：青岛市市北区山东路万科中心15F</div>
                </div>
            </div>
            <div class="fl footer-weixin">
                <div class="footer-title">微信扫码关注我们</div>
                <div class="footer-contetn">
                    <img src="@/assets/weixin.png">
                </div>
            </div>
        </div>
        <div class="base-footer--bottom">
            Copyright&copy;2018 青岛海联软件科技有限公司 版权所有 鲁ICP备17043642号
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
        height: 532px;
        color: #fff;
        background: #0D1726;

        .base-footer--top {
            height: 422px;
            padding: 0 290px;
            font-size: 14px;
            line-height: 32px;
            border-bottom: 1px solid #262E3B;

            .footer-title {
                line-height: 136px;
            }

            .footer-about {
                width: 266px;
                margin-right: 200px;
            }

            .footer-solution {
                width: 85px;
                margin-right: 175px;
            }

            .footer-contact {
                width: 285px;
                margin-right: 200px;
            }

            .footer-weixin {
                img {
                    width: 109px;
                }
            }
        }

        .base-footer--bottom {
            padding: 0 290px;
            font-size: 16px;
            color: #848892;
            text-align: center;
            line-height: 110px;
        }
    }
</style>
