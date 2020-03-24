<template>
    <div class="page-body">
        <div class="page-nav">
            <BUTabnav useFlex customBarWidth="1rem" >
                <BUTabNavItem
                        v-for="(item, index) in tabNavList.list"
                        :key="index"
                >{{ item }}
                    <BUBadge v-if="index === 1" text="9"></BUBadge>
                </BUTabNavItem>
            </BUTabnav>
        </div>
        <div class="page-content">
            <BUCard title="专题 | 避坑指南☝️：那些年我们踩过的技术坑" value="外显" isLink class="content-list" @click="toDetailPage">
                <div slot="value">
                    <BUAvatar :src="desc1" shape="square"></BUAvatar>
                </div>
                <div slot="desc">最近不少掘友们都分享了在工作中遇见的坑和解决方案，掘金酱一次性帮大家整理好了。</div>
            </BUCard>
            <BUCard title="忍法，scroll 翻滚之术!" value="外显" isLink class="content-list">
                <div slot="value">
                    <BUAvatar :src="desc2" shape="square"></BUAvatar>
                </div>
                <div slot="desc"></div>
            </BUCard>
            <BUCard title="详解 requestIdleCallback" value="外显" isLink class="content-list">
                <div slot="value">
                </div>
            </BUCard>
            <BUCard title="专题 | 避坑指南☝️：那些年我们踩过的技术坑" value="外显" isLink class="content-list">
                <div slot="value">
                    <BUAvatar :src="desc1" shape="square"></BUAvatar>
                </div>
                <div slot="desc">最近不少掘友们都分享了在工作中遇见的坑和解决方案，掘金酱一次性帮大家整理好了。</div>
            </BUCard>
            <BUCard title="忍法，scroll 翻滚之术!" value="外显" isLink class="content-list">
                <div slot="value">
                    <BUAvatar :src="desc2" shape="square"></BUAvatar>
                </div>
                <div slot="desc"></div>
            </BUCard>
            <BUCard title="详解 requestIdleCallback" value="外显" isLink class="content-list">
                <div slot="value">
                </div>
            </BUCard>
            <BUCard title="专题 | 避坑指南☝️：那些年我们踩过的技术坑" value="外显" isLink class="content-list">
                <div slot="value">
                    <BUAvatar :src="desc1" shape="square"></BUAvatar>
                </div>
                <div slot="desc">最近不少掘友们都分享了在工作中遇见的坑和解决方案，掘金酱一次性帮大家整理好了。</div>
            </BUCard>
            <BUCard title="忍法，scroll 翻滚之术!" value="外显" isLink class="content-list">
                <div slot="value">
                    <BUAvatar :src="desc2" shape="square"></BUAvatar>
                </div>
                <div slot="desc"></div>
            </BUCard>
            <BUCard title="详解 requestIdleCallback" value="外显" isLink class="content-list">
                <div slot="value">
                </div>
            </BUCard>
            <BUCard title="专题 | 避坑指南☝️：那些年我们踩过的技术坑" value="外显" isLink class="content-list">
                <div slot="value">
                    <BUAvatar :src="desc1" shape="square"></BUAvatar>
                </div>
                <div slot="desc">最近不少掘友们都分享了在工作中遇见的坑和解决方案，掘金酱一次性帮大家整理好了。</div>
            </BUCard>
            <BUCard title="忍法，scroll 翻滚之术!" value="外显" isLink class="content-list">
                <div slot="value">
                    <BUAvatar :src="desc2" shape="square"></BUAvatar>
                </div>
                <div slot="desc"></div>
            </BUCard>
            <BUCard title="详解 requestIdleCallback" value="外显" isLink class="content-list">
                <div slot="value">
                </div>
            </BUCard>
        </div>
    </div>
</template>

<script>
  import desc1 from "../assets/image/des1.png"
  import desc2 from "../assets/image/des2.png"

  export default {
    name: "Main",
    data() {
      return {
        desc1,
        desc2,
        tabNavList:{
          list:[
            '推荐',
            '关注',
            '前端',
            '算法',
            '代码人生',
            '阅读',
            '项目'
          ]
        }
      }
    },
    methods: {
      toDetailPage() {
        this.$router.push('/detail')
      }
    }
  }

</script>

<style scoped lang="scss">
    @import "../assets/scss/app.scss";
</style>
