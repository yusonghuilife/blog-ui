<template>
  <a
    href="javascript:;"
    :class="classNames"
    @click="onClick"
  >
    <div :class="`${pagePrefixCls}-icon`">
      <slot
        v-if="!isActive"
        name="icon"
      ></slot>
      <slot
        v-if="hasActiveIcon && isActive"
        name="icon-active"
      ></slot>
      <sup v-if="badge && !isBadgeDot"><BUBadge :text="badge"></BUBadge></sup>
      <sup v-if="isBadgeDot"><BUBadge></BUBadge></sup>
    </div>
    <p :class="`${pagePrefixCls}-label`">
      <slot name="label"></slot>
    </p>
  </a>
</template>

<script>
import mixinBase from "../mixins/base";
import { go } from '../../utils/router';
import BUBadge from "../badge";
export default {
  name: "BUTabbarItem",
  components: {
    BUBadge,
  },
  mixins: [mixinBase],
  props: {
    id: {
      type:[String, Number],
      default: undefined
    },
    isBadgeDot:{
      type:Boolean,
      default:false
    },
    badge: String,
    link: [String],
  },
  data(){
    return{
      hasActiveIcon: false
    }
  },
  computed:{
    pagePrefixCls(){
      return `${this.classPrefix}-tabbar`
    },
    classNames() {
      return [
        `${this.pagePrefixCls}-item`,
        `${this.isActive?`${this.pagePrefixCls}-item--active`:''}`,
      ];
    },
    isActive () {
      return this.$parent.value === this.id
    }
  },
  mounted () {
    if (this.$slots['icon-active']) {
      this.hasActiveIcon = true
    }
  },
  methods:{
    onClick(){
      this.$parent.$emit('input', this.id);
      go(this.link, this.$router)
    }
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
    &-item{
      height:100%;
      flex:1;
      flex-direction:column;
      display: flex;
      align-items: center;
      justify-content: space-between;
      &--active{
        #{$tabbar-prefix}-label{
          color:$tabbar-label-color-active;
        }
      }
    }
    &-icon{
      width:$tabbar-icon-size;
      height:$tabbar-icon-size;
      position: relative;
      top: 0.5rem;
      & > img{
        width:90%;
      }
      & > sup{
        position: absolute;
        top:$tabbar-sup-top;
        right:$tabbar-sup-right;
        line-height:1;
      }
    }
    &-label{
      position: relative;
      top: 0.3rem;
      color:$tabbar-label-color;
      font-size:$tabbar-label-font-size;
    }
  }

</style>
