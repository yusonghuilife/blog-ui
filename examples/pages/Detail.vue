<template>
  <div class="page">
    <BUCard value="外显">
      <div slot="title" style="margin-top: -20px">掘金酱</div>
      <img slot="icon" width="50vw" :src="avatar" />
      <div slot="value">
        <BUButton type="default" size="xs" style="padding: 0.3rem 0.9rem;border: 1px solid darkseagreen;color: darkseagreen"> 关注 </BUButton>
      </div>
      <div slot="desc" style="margin-top: -15px;font-size: 0.7rem">2020年02月28日 阅读 {{readTime}}</div>
    </BUCard>
    <div class="detail" v-html="article" style="font-size: 0.9rem;padding: 1rem 1rem;color: #1a2a3a"></div>
    <div class="comment">
    </div>
    <div class="footer">
      <BUTabbar v-model="tabbar.selected" class="items">
        <BUTabbarItem id="1" class="item">
          <img slot="icon" src="../assets/image/thumbs.png">
          <img slot="icon-active" src="../assets/image/thumbsup.png">
          <span slot="label">点赞</span>
        </BUTabbarItem>
        <span class="divi"></span>
        <BUTabbarItem id="2" class="item">
          <img slot="icon" src="../assets/image/chat.png">
          <img slot="icon-active" src="../assets/image/chat.png">
          <span slot="label">评论</span>
        </BUTabbarItem>
        <span class="divi"></span>
        <BUTabbarItem id="3" class="item">
          <img slot="icon" src="../assets/image/mark.png">
          <img slot="icon-active" src="../assets/image/marked.png">
          <span slot="label">收藏</span>
        </BUTabbarItem>
      </BUTabbar>
    </div>
  </div>
</template>

<script>
  import avatar from "../assets/image/detailAvatar.png"
  // import
  export default {
    name: "Detail",
    data(){
      return {
        avatar,
        readTime: '3090',
        article:'' +
          '<div data-v-998d2dcc="" data-id="5e58c6ae6fb9a07ccd518c18" itemprop="articleBody" class="article-content"><p>大家好呀~ 我是好想出去玩的掘金酱。</p>\n' +
          '<p>最近关于疫情的好消息越来越多，生活开始回归正轨，大家也逐步进入工作状态了。虽然还是要提醒大家在复工期间，依然不要放松防范。不过想必过不了多久，心心念念的火锅、烧烤、小龙虾就又可以跟我们见面了。（那些喝着奶茶吃着火锅唱着歌的日子真的恍如隔年啊）</p>\n' +
          '<p>在进入“全面fighting”的工作状态之前，年前拖延的那些“过完年再说吧”的坑，也该拎出来清一清啦。</p>\n' +
          '<p>遇见坑不要紧张，掘友们来捞你啦。最近不少掘友们都分享了他们在工作中遇见的坑，以及相应的解决方案，掘金酱就一次性帮大家整理好了，下一次我们遇见同样的问题里，不会陷在同一个坑里不知所措。</p>\n' +
          '<p>下面我们就来看一看，掘友们的机智操作。</p>\n' +
          '<p>（点击文章标题，即可跳转阅读全文）</p>\n' +
          '<hr>\n' +
          '<h3 class="heading" data-id="heading-0"><a target="_blank" href="https://juejin.im/post/5e4f5b316fb9a07cac1d5803" rel="">@lisiyizu：「Vue表单自动保存功能」踩坑</a></h3>\n' +
          '<blockquote>\n' +
          '<p>前几天接到一个产品需求，说要我给移动端的表单加上自动保存的功能，在开发自动保存功能的过程中，我还是发现了有一些知识点可以值得记录分享的：当我在认真写watch监听表单的代码时，发现新老值居然是一样。那么。为什么vue 深度监听新老对象的值会一样呢，以及我们该采用什么方式去优化自动保存呢？</p>\n' +
          '</blockquote>\n' +
          '<h3 class="heading" data-id="heading-1"><a target="_blank" href="https://juejin.im/post/5e3bdd83e51d4526cd1dda11" rel="">@dino小恐龙：聊一聊实现Vue路由组件缓存遇到的“坑”</a></h3>\n' +
          '<blockquote>\n' +
          '<p>最近在做公司后台管理系统项目时遇到一个比较怪异的bug，就是采用keep-alive+vue-router实现的路由缓存遇到缓存不生效的情况。面对这种情况，我把我完整的排坑过程和解决过程记录了下来，顺便还做了一些优化，希望可以给你带来一些帮助。</p>\n' +
          '</blockquote>\n' +
          '<h3 class="heading" data-id="heading-2"><a target="_blank" href="https://juejin.im/post/5e511a3af265da574b790e87" rel="">@冷冷gg：「是时候升级java11了」 jdk8升级至dk11踩坑记</a></h3>\n' +
          '<blockquote>\n' +
          '<p>这一篇文章主要列举我们在升级到 Java11 遇到的几种坑和解决方案。包括字体问题，也就是在 Linux 环境 Java11 在验证码和 Excel 部分功能会使用到字体，这就触发 Java11 的字体问题；还有javax.xml.bind 不存在问题；以及编译报错，由于删除部分API，有些类找不到；还有内置容器无法启动等问题。</p>\n' +
          '</blockquote>\n' +
          '<h3 class="heading" data-id="heading-3"><a target="_blank" href="https://juejin.im/post/5e5329f9518825494707e093" rel="">@vt：举个小栗子🌰IDEA远程Debug及使用场景</a></h3>\n' +
          '<blockquote>\n' +
          '<p>我切换到IDEA之后，还真再就没用过远程Debug，直到昨天发现了一个非常基础的错误...\n' +
          '坑来自于我的开源小工具， V-Mock。开源后有使用的同学提了Bug，笔者也是正常操作，改完bug重新打版发行。升级版本的同学，发现数据没了，我暂时给出了方案，嵌入式数据库嘛，把旧jar中的DB文件，覆盖到新Jar中就好了.直到收到了一个Issues，告诉我DB文件复制到新jar中并没有生效。我才意识到了问题。</p>\n' +
          '</blockquote>\n' +
          '<h3 class="heading" data-id="heading-4"><a target="_blank" href="https://juejin.im/post/5e49ce75f265da57375c3783" rel="">@楼下小黑哥：Dubbo 服务 IP 注册错误踩坑经历</a></h3>\n' +
          '<blockquote>\n' +
          '<p>公司最近新建一个机房，需要将现有系统同步部署到新机房，部署完成之后，两地机房同时对提供服务。这个系统当前对外采用 Restful 接口，内部远程采用 Dubbo，服务注册中心使用 zookeeper。服务当前设定只会调用本机房内服务。</p>\n' +
          '<p>原先服务都在 A 机房，B 机房为新建机房。B 机房部署完成之后，需要测试 B 机房系统可用性。生产测试的发现 B 机房竟然调用 A 机房服务。</p>\n' +
          '</blockquote>\n' +
          '<h3 class="heading" data-id="heading-5"><a target="_blank" href="https://juejin.im/post/5e17c666f265da3df716d31d#comment" rel="">@法的空间：Flutter v1.12.13 的一些坑</a></h3>\n' +
          '<blockquote>\n' +
          '<p>最近忙着升级Flutter SDK版本，遇到了一些问题，于是记录下来。问题包括资源文件命名，现存的ios 项目无法开启 bitcode，安卓混合开发代码迁移，混合开发调试热重载，安卓华为设备闪退等问题以及解决方案。</p>\n' +
          '</blockquote>\n' +
          '<h3 class="heading" data-id="heading-6"><a target="_blank" href="https://juejin.im/post/5e1c4a3ef265da3e3a5370f8" rel="">@布拉德特皮：不是所有的 No \'Access-Control-Allow-Origin\' header... 都是跨域问题 - 记一次图片上传踩坑</a></h3>\n' +
          '<blockquote>\n' +
          '<p>公司因历史遗留，同时存在3种后端语言：Java，PHP，Node.js，因为后端同事都不懂 Node.js，所以 Node 项目一直是前端维护。老项目用的是 Koa 框架，之前我在上面写逻辑，上传图片是没有问题的，直到我用了 Nest 框架重构，将后台管理系统的逻辑拆分解耦出来。</p>\n' +
          '<p>新项目一切请求都正常，本地跑的时候也正常，但是到了线上，只有上传图片不正常。每次上传都会预请求一次 204 OPTIONS，这一步没问题，但接下来的 POST 请求就有问题了......</p>\n' +
          '</blockquote>\n' +
          '<h3 class="heading" data-id="heading-7"><a target="_blank" href="https://juejin.im/post/5e42a7ace51d4526fc748e21" rel="">@菜朋：UITableViewCell复用机制及踩坑总结</a></h3>\n' +
          '<blockquote>\n' +
          '<p>最近在项目开发中遇到了一些关于UITableViewCell的问题，当我在反复滑动tableView的时候，cell上的内容出现了变动，同时我最近也刚好在掘金上看到了另外一篇关于这个问题的文章，参考了一下并稍作深入的研究了一下UITableViewCell的复用机制，如有问题还请指正，一起提高。</p>\n' +
          '</blockquote>\n' +
          '<h3 class="heading" data-id="heading-8"><a target="_blank" href="https://juejin.im/post/5e56535ae51d45270764dd55" rel="">@PageThinker ：架构上“坑”了小伙伴如何填？</a></h3>\n' +
          '<blockquote>\n' +
          '<p>软件开发中大小坑遍地，架构设计上同样到处都是坑坑洼洼。随着工作经验积累的增加，自己也开始接触架构，自己做架构设计，也参考别人的架构设计。由于自己的经验和精力有限坑过小伙伴，也被小伙伴坑过。</p>\n' +
          '<p>本文不是吐槽架构上的坑，而是整理一些常见的坑给出填坑思路。\n' +
          '比如 架构产出不足， 架构的技能不足，延迟决策坑队友，年久失修的架构。</p>\n' +
          '</blockquote>\n' +
          '<h3 class="heading" data-id="heading-9"><a target="_blank" href="https://juejin.im/post/5e54f2f66fb9a07cbc2695da" rel="">@Minorjone：选择某类的最后一个元素——CSS3伪类选择器走过的坑</a></h3>\n' +
          '<blockquote>\n' +
          '<p>众所周知，在CSS3规范中，添加了许多了伪类选择器，这些选择器代替了不少JS的工作，让我们从以前通过获取DOM节点进而进行样式修改的操作，变得更加便捷高效。 然而我在近期开发使用的过程中，遇到了不少坑，事实证明认真阅读文档还是很有必要的，所以这里总结分享几个我遇到的问题，通过一个需求对几对选择器做解析，希望对大家也有所帮助。</p>\n' +
          '</blockquote>\n' +
          '<h3 class="heading" data-id="heading-10"><a target="_blank" href="https://juejin.im/post/5e53980af265da57584da2b8" rel="">@brezp：项目排坑小计：mysql数据库插入字符串附带emoji表情发生报错的一般情况及解决方法</a></h3>\n' +
          '<blockquote>\n' +
          '<p>疫情应该也快结束了,我们公司也迎来了复工，在家办公的这几天里，突然负责的中心传来线上的噩耗：线上生产某接口出问题了！</p>\n' +
          '<p>经过排查，原来是某接口的保存接口在接收微信传来的微信昵称往我们中心数据库插数据的时候由于附带emoji，报错了！</p>\n' +
          '</blockquote>\n' +
          '<p><strong>更多文章</strong>：</p>\n' +
          '<p><a target="_blank" href="https://juejin.im/post/5e218589f265da3df12044ad" rel="">@sliiva：Antd踩坑 — 当子组件是 function component 时使用 wrappedComponentRe</a></p>\n' +
          '<p><a target="_blank" href="https://juejin.im/post/5e54c3b4f265da575477918f#heading-8" rel="">@huangjincq：H5直播Video标签坑汇总</a></p>\n' +
          '<p><a target="_blank" href="https://juejin.im/post/5e537dc3f265da5724466dfb#heading-8" rel="">@努力_小风尘：react-navigation 5.x安装的坑</a></p>\n' +
          '<p><a target="_blank" href="https://juejin.im/post/5e576de25188254935092265" rel="">@小杰在掘金：react native App踩坑笔记</a></p>\n' +
          '<br>\n' +
          '看完了掘友们的经历，历史遗留的大“坑”是不是也可以得到处理了。你也可以把自己的填坑过程写下来，不但会获得相应的掘金值，还会有额外的曝光机会。掘金酱也会挑选优秀文章，持续更新上来。\n' +
          '<p>最后，祝大家都能编程流畅，顺利脱坑。</p>\n' +
          '</div>',
        tabbar:{
          selected:"1"
        },
      }
    }
  }
</script>

<style scoped lang="scss">
  .page {
    margin: 0 1rem;
    .footer{
      position: fixed;
      bottom: 0;
      width: 100%;
      margin-left: -1rem;
      /*line-height: 1;*/
    }
  }

</style>
