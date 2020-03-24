<template>
  <div :class="classNames">
    <slot></slot>
  </div>
</template>

<script>
import mixinBase from "../mixins/base";
export default {
  name: "BUTabbar",
  components: {

  },
  mixins: [mixinBase],
  props: {
    value: [String, Number],
    fixed: {
      type:Boolean,
      default:false
    }
  },
  computed:{
    pagePrefixCls(){
      return `${this.classPrefix}-tabbar`
    },
    classNames() {
      return [
        `${this.pagePrefixCls}`,
      ];
    },
  }
};
</script>
<style scoped lang="scss">
  @import "../../assets/css/variable.scss";
  @import "../../assets/css/mixin.scss";


  /* Tabbar */
  $tabbar-prefix: '.' + $css-prefix + 'tabbar';
  $tabbar-bg-color            : $color-white !default;
  $tabbar-height              : $s-1*15 !default;
  $tabbar-padding             : 0 !default;
  $tabbar-border-color        : $color-line-1 !default;
  $tabbar-border-width        : $line-1 !default;
  $tabbar-item-bg-color       : $color-transparent !default;
  $tabbar-item-bg-color-active: $color-fill-4 !default;
  $tabbar-label-color         : $color-text-1 !default;
  $tabbar-label-color-active  : $color-brand1 !default;
  $tabbar-label-font-size     : $font-size-s !default;
  $tabbar-icon-size           : $s-1*6 !default;
  $tabbar-sup-top             : -$s-1*1 !default;
  $tabbar-sup-right           : -$s-1*2 !default;

  #{$tabbar-prefix}{
    position: relative;
    width:100%;
    padding:$tabbar-padding;
    height:$tabbar-height;
    background-color: $tabbar-bg-color;
    @include onePx($tabbar-border-color,top);
    @include align-flex();
    @include align-flex-middle();

  }
</style>
