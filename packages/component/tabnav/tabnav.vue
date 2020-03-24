<template>
  <div :class="`${pagePrefixCls}-nav`">
    <div
      ref="nav"
      :class="classNames"
    >
      <slot></slot>
      <div
        :class="underlineClassNames"
        :style="barStyle"
      >
        <span
          v-if="customBarWidth"
          :class="`${pagePrefixCls}-underline-inner`"
          :style="innerBarStyle"
        ></span>
      </div>
    </div>
  </div>
</template>

<script>
  import mixinBase from "../mixins/base";

  export default {
  name: "BUTabnav",
  mixins: [mixinBase],
  props: {
    value: {},
    customBarWidth: [Function, String],
    preventDefault: Boolean,
    useFlex:{
      type: Boolean,
      default: false
    },
  },
  data(){
    return{
      timeID: -1,
      index: this.value || 0,
      direction: 'forward',
      number: this.$children.length,
      hasReady: false,
      tabnavListArr:[],
      tabnavListWidth:0,
      itemIndex:-1,
      underlineOffset:0,
      underlineWidth:-1,
      scrollable:false,
      scrollThreshold:4,
    }
  },
  computed:{
    pagePrefixCls(){
      return `${this.classPrefix}-tabnav`
    },
    classNames() {
      return [
        `${this.pagePrefixCls}-navlist`,
        `${this.scrollable?`${this.pagePrefixCls}-navlist--scrollable`:''}`,
        `${this.useFlex?`${this.pagePrefixCls}-navlist--flex`:`${this.pagePrefixCls}-navlist--noflex`}`,
      ];
    },
    underlineClassNames() {
      return [
        `${this.pagePrefixCls}-underline`,
        `${this.direction==='forward'?`${this.pagePrefixCls}-underline--transition-forward`:`${this.pagePrefixCls}-underline--transition-backward`}`,
      ];
    },
    // when prop:custom-bar-width
    innerBarStyle () {
      return {
        width: typeof this.customBarWidth === 'function' ? this.customBarWidth(this.index) : this.customBarWidth,
        background: this.barActiveColor || this.activeColor
      }
    },
    // end
    barStyle () {
      return {
        width: this.useFlex ? (this.scrollable ? "22%" : 100 / this.number + '%') : this.underlineWidth + 'px',
        transform: 'translate(' + (this.underlineOffset) + 'px, 0)',
        display: 'block',
        transition: !this.hasReady ? 'none' : null,
        background: this.customBarWidth ? 'transparent' : this.barActiveColor || this.activeColor
      }
    },
  },
  watch:{
    index (newIndex,oldIndex) {
      this.direction = newIndex > oldIndex ? 'forward' : 'backward'
      this.hasReady && this.scrollToActiveTab();
      this.getUnderlineOffset();
    },
    value (val) {
      this.index = val;
    }
  },
  mounted () {
    this.number = this.$children.length;
    this.underlineWidth = this.$refs.nav.offsetWidth / this.number;
    // // stop bar anmination on first loading

    this.$on('TabItemMounted', (elm) => {
      elm.index = ++ this.itemIndex;
      this.tabnavListArr.push(elm);

      clearTimeout(this.timeID)
      this.timeID = setTimeout(() => {
        this.tabnavListWidth = elm.$el.offsetWidth + elm.$el.offsetLeft;
        if(elm.$el.offsetWidth<this.underlineWidth){
          this.underlineWidth = elm.$el.offsetWidth
        }
        this.scrollable = this.useFlex?(this.tabnavListArr.length > this.scrollThreshold):(this.tabnavListWidth > this.$refs.nav.offsetWidth);
        this.getUnderlineOffset();
        // this.scrollToActiveTab(); //tabnav item 滑动
      }, 50);

    })


    this.$on('input',(index) => {
      this.index = index
    })

    this.underlineOffset = (this.$children && this.$children.length)?this.$children[this.index].$el.offsetLeft:0;
    this.getUnderlineOffset();
    // this.underlineOffset = currentIndexTab.offsetLeft;
  },
  methods:{
    // 模拟横行滚动
    scrollToActiveTab () {
      if (!this.scrollable || !this.$children || !this.$children.length) {
        return
      }
      const currentIndexTab = this.$children[this.index].$el

      let count = 0
      // scroll animation
      const step = () => {
        const scrollDuration = 15
        const nav = this.$refs.nav
        nav.scrollLeft += (currentIndexTab.offsetLeft - (nav.offsetWidth - currentIndexTab.offsetWidth) / 2 - nav.scrollLeft) / scrollDuration
        if (++count < scrollDuration) {
          window.requestAnimationFrame(step)
        }
      }
      window.requestAnimationFrame(step)
    },

    getUnderlineOffset(){
      if (!this.$children || !this.$children.length) {
        return
      }
      const currentIndexTab = this.$children[this.index].$el;

      this.underlineOffset = this.useFlex?(currentIndexTab.offsetLeft):(currentIndexTab.offsetLeft + (currentIndexTab.offsetWidth-this.underlineWidth)/2);
    }
  }
};
</script>
<style lang="scss" scoped>

  @import "../../assets/css/variable.scss";
  @import "../../assets/css/mixin.scss";


  /* Tabnav */
  $tabnav-prefix              : '.' + $css-prefix + 'tabnav';
  $tabnav-nav-bg-color        : $color-white !default;
  $tabnav-nav-height          : $s-1*12 !default;
  $tabnav-nav-padding         : 0 !default;
  $tabnav-nav-border-color    : $color-line-1 !default;
  $tabnav-item-font-size      : $font-size-base !default;
  $tabnav-item-border-color   : $color-line-1 !default;
  $tabnav-item-border-width   : $line-0 !default;
  $tabnav-item-bg-color       : $color-transparent !default;
  $tabnav-item-bg-color-active: $color-fill-4 !default;
  $tabnav-item-color          : $color-text-1 !default;
  $tabnav-item-color-active   : $color-brand1 !default;
  $tabnav-item-padding        : $s-1*4 !default;

  $tabnav-underline-width   : $s-1*10 !default;
  $tabnav-underline-height  : $s-1/2 !default;
  $tabnav-underline-bg-color: $color-brand1 !default;

  $tabnav-icon-size: $s-1*6 !default;
  $tabnav-sup-top  : -$s-1*1 !default;
  $tabnav-sup-right: -$s-1*2 !default;



  #{$tabnav-prefix}{

    &-nav{
      width:100%;
      padding:$tabnav-nav-padding;
      height:$tabnav-nav-height;
      background-color: $tabnav-nav-bg-color;
      @include onePx($tabnav-nav-border-color,bottom);
    }
    &-navlist{
      position: relative;
      height:100%;
      display: flex;
      align-items:center;
      &--scrollable{
        overflow-y: hidden;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        box-sizing: content-box;
        &::-webkit-scrollbar {
          display: none;
        }
      }
      &--flex{
        // display: flex;
        #{$tabnav-prefix}-item{
          width:100%;
          height:100%;
          flex:1;
          // display: flex;
          // align-items:center;
          // justify-content: center;
          padding:0;
          // @include align-flex();
          // @include align-flex-middle();
          // @include align-flex-center();
          @include ellipsis(100%);
        }
        &#{$tabnav-prefix}-navlist--scrollable{
          #{$tabnav-prefix}-item{
            flex: 0 0 22%;
          }
        }
      }
      &--noflex{
        #{$tabnav-prefix}-item{
          flex:none;
        }
      }
    }
    &-item{
      font-size:$tabnav-item-font-size;
      color:$tabnav-item-color;
      border:$tabnav-item-border-width solid $tabnav-item-border-color;
      background-color:$tabnav-item-bg-color;
      box-sizing:border-box;
      padding:0 $tabnav-item-padding;
      flex:none;
      display: flex;
      align-items:center;
      justify-content: center;
      &-label{
        @include ellipsis(100%);
        text-align:center;
      }
      &--active{
        color:$tabnav-item-color-active;
      }
    }
    &-underline{
      position: absolute;
      height: $tabnav-underline-height;
      bottom: 0;
      left: 0;
      background-color: $tabnav-underline-bg-color;
      text-align: center;
      &-inner{
        display:block;
        margin:0 auto;
        height: $tabnav-underline-height;
        width:100%;
        background-color: $tabnav-underline-bg-color;
      }
    }
    &--fixed{
      position:fixed;
      bottom:0;
      left:0;
    }
  }

</style>
