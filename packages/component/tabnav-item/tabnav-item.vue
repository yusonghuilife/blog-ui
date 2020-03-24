<template>
  <div
    :class="classNames"
    @click="onClick"
  >
    <div :class="`${pagePrefixCls}-item-label`">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import mixinBase from "../mixins/base";
export default {
  name: "BUTabNavItem",
  components: {

  },
  mixins: [mixinBase],
  props: {
    id: {
      type:[String, Number],
      default: undefined
    },
  },
  data(){
    return {
      index: -1,
      active: false
    }
  },
  computed:{
    pagePrefixCls(){
      return `${this.classPrefix}-tabnav`
    },
    classNames() {
      return [
        `${this.pagePrefixCls}-item`,
        `${this.isActive?`${this.pagePrefixCls}-item--active`:''}`,
      ];
    },
    isActive () {
      return this.$parent.value === this.index
    }
  },
  mounted(){
    // 挂载成功后告诉父节点

    this.$nextTick(() => {
      this.dispatch('BUTabnav','TabItemMounted',this)
    })
  },

  methods:{
    onClick(){
      this.dispatch('BUTabnav','input',this.index)
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
  $tabnav-nav-height          : $s-1*15 !default;
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

  $tabnav-underline-ani-timing-function: cubic-bezier(0.35, 0, 0.25, 1) !default;
  $tabnav-underline-ani-duration       : .3s !default;

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
      // display: -webkit-box;
      // display: -webkit-flex;
      // display: -ms-flexbox;
      // display: flex;
      &--scrollable{
        overflow-y: hidden;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        box-sizing: content-box;
        &::-webkit-scrollbar {
          display: none;
        }
        // #{$tabnav-prefix}-item{
        //   flex: 0 0 22%;
        // }
      }
      &--no-animate{
        #{$tabnav-prefix}-item{
          position: relative;
          // display: flex;
          // align-items:center;
          height:100%;
          &::before{
            opacity:0;
            content:"";
            height:$tabnav-underline-height;
            width:0;
            position:absolute;
            bottom:0;
            left:50%;
            margin-left:0;
            background-color: $tabnav-underline-bg-color;
            overflow: hidden;
            transition:all $tabnav-underline-ani-duration $tabnav-underline-ani-timing-function;
          }
        }
        #{$tabnav-prefix}-item--active{
          &::before{
            opacity:1;
            width:$tabnav-underline-width;
            margin-left:-$tabnav-underline-width/2;
          }
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
      &--transition-forward {
        transition: transform $tabnav-underline-ani-duration $tabnav-underline-ani-timing-function;
        // transition: right $tabnav-underline-ani-duration $tabnav-underline-ani-timing-function,
        // left $tabnav-underline-ani-duration $tabnav-underline-ani-timing-function $tabnav-underline-ani-duration * 0.3;
      }
      &--transition-backward {
        transition: transform $tabnav-underline-ani-duration $tabnav-underline-ani-timing-function;
        // transition: right $tabnav-underline-ani-duration $tabnav-underline-ani-timing-function $tabnav-underline-ani-duration * 0.3,
        // left $tabnav-underline-ani-duration $tabnav-underline-ani-timing-function;
      }
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
