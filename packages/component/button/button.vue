<template>
  <a
    :class="classNames"
    @click="handleClick"
  >
    <bu-icon
      v-if="loading"
      name="loading"
      :size="size"
      :class="`${pagePrefixCls}-loading`"
    >
    </bu-icon>
    <bu-icon
      v-if="icon"
      :name="icon"
      :size="size"
      :class="`${pagePrefixCls}-icon`"
    >
    </bu-icon>
    <span
      v-if="$slots.default"
      :class="`${pagePrefixCls}-text`"
    >
      <slot></slot>
    </span>
  </a>
</template>

<script>
import mixinBase from "../mixins/base";
import BUIcon from '../icon'
export default {
  name: "BUButton",
  components: {
    BUIcon
  },
  mixins: [mixinBase],
  props: {
    type: {
      type: String,
      validator: val => ['default', 'primary','text'].indexOf(val) > -1
    },
    status:{
      type:String,
      validator: val => ['success', 'warning','error'].indexOf(val) > -1
    },
    size: {
      type:String,
      validator: val => ['s', 'xs','l','full'].indexOf(val) > -1
    },
    icon: String,
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    full:{
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      checked: this.value
    };
  },
  computed:{
    pagePrefixCls(){
      return `${this.classPrefix}-button`
    },
    classNames() {
      return [
        `${this.pagePrefixCls}`,
        `${this.type ? `${this.pagePrefixCls}--${this.type}` : ""}`,
        `${this.status ? `${this.pagePrefixCls}--${this.status}` : ""}`,
        `${this.size ? `${this.pagePrefixCls}--${this.size}` : ""}`,
        `${this.circle && !this.$slots.default ? `${this.pagePrefixCls}--circle` : ""}`,
        `${this.full ? `${this.pagePrefixCls}--full` : ""}`,
        `${this.disabled ? `${this.pagePrefixCls}--disabled` : ""}`,
      ];
    },
  },
  methods:{
    handleClick(evt) {
      if(!this.disabled){
        this.$emit("click", evt);
      }
    }
  },
};
</script>
<style lang="scss" scoped>

  @import "../../assets/css/variable.scss";
  @import "../../assets/css/mixin.scss";
  /* Button */
  // 设置 button 外观颜色
  @mixin button-status($color, $bg-color: transparent, $border-color: transparent) {
    background-color: $bg-color;
    border-color: $border-color;
    color: $color;
  }
  // 设置 button 大小
  @mixin button-size($padding, $height, $font-size, $border-width) {
    padding: 0 $padding;
    height: $height;
    // 使用flex居中布局，去掉line-height设置
    // line-height: $height - 2 * $border-width;
    font-size: $font-size;
    border-width: $border-width;
  }

  $button-prefix: '.' + $css-prefix + 'button';
  $button-padding-xs   : $s-base *2 !default;
  $button-padding-s    : $s-base *2 !default;
  $button-padding-base : $s-base *5 !default;
  $button-padding-l    : $s-base *5 !default;
  $button-border-radius: $corner-1 !default;
  $button-icon-margin  : $s-base *1 !default;
  //字号
  $button-font-size-base: $font-size-base !default;
  $button-font-size-xs  : $font-size-xs !default;
  $button-font-size-s   : $font-size-s !default;
  $button-font-size-l   : $font-size-l !default;
  //高度
  $button-height-xs  : $s-base *4 !default;
  $button-height-s   : $s-base *6 !default;
  $button-height-base: $s-base *8 !default;
  $button-height-l   : $s-base *10 !default;
  //default
  $button-border-width-default       : $line-1 !default;
  $button-color-default              : $color-text-1 !default;
  $button-color-default-hover        : $color-text-2 !default;
  $button-color-default-active       : $color-text-4 !default;
  $button-bg-color-default           : $color-white !default;
  $button-bg-color-default-hover     : $color-white !default;
  $button-bg-color-default-active    : $color-white !default;
  $button-border-color-default       : $color-brand1 !default;
  $button-border-color-default-hover : $color-brand1-hover !default;
  $button-border-color-default-active: $color-brand1-cur !default;
  //primary
  $button-border-width-primary       : $line-1 !default;
  $button-color-primary              : $color-white !default;
  $button-color-primary-hover        : $color-white !default;
  $button-color-primary-active       : $color-white !default;
  $button-bg-color-primary           : $color-brand1 !default;
  $button-bg-color-primary-hover     : $color-brand1-hover !default;
  $button-bg-color-primary-active    : $color-brand1-cur !default;
  $button-border-color-primary       : $color-brand1 !default;
  $button-border-color-primary-hover : $color-brand1-hover !default;
  $button-border-color-primary-active: $color-brand1-cur !default;

  //disabled
  $button-color-disabled               : $color-text-3 !default;
  $button-bg-color-disabled            : $color-white !default;
  $button-border-color-disabled        : $color-line-4 !default;
  $button-color-primary-disabled       : $color-white !default;
  $button-bg-color-primary-disabled    : $color-brand1-disabled !default;
  $button-border-color-primary-disabled: $color-brand1-disabled !default;

  //error
  $button-color-error              : $color-white !default;
  $button-bg-color-error           : $color-error-3 !default;
  $button-bg-color-error-hover     : $color-error-2 !default;
  $button-bg-color-error-active    : $color-error-4 !default;
  $button-border-color-error       : $color-error-3 !default;
  $button-border-color-error-hover : $color-error-2 !default;
  $button-border-color-error-active: $color-error-4 !default;

  //文字按钮
  $button-color-text       : $color-text-1 !default;
  $button-color-text-hover : $color-text-2 !default;
  $button-color-text-active: $color-text-4 !default;

  #{$button-prefix} {
    @include button-size($button-padding-base,$button-height-base,$button-font-size-base,$button-border-width-default);
    @include button-status($button-color-default,$button-bg-color-default,$button-border-color-default);
    outline: 0;
    text-align: center;
    white-space: nowrap;
    border-style: solid;
    border-radius: $button-border-radius;
    transition: background 0.2s;
    user-select: none;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    &-icon{
      margin-right:$button-icon-margin;
      font-size: $button-font-size-base;
    }
    &-loading{
      margin-right:$button-icon-margin;
      font-size: $button-font-size-base;
      animation: loadingCircle 2s linear infinite;
    }

    &:active {
      @include button-status($button-color-default,$button-bg-color-default-active,$button-border-color-default-active);
    }
    &.disabled,
    &.disabled:hover,
    &.disabled:active,
    &#{$button-prefix}--disabled,
    #{$button-prefix}--disabled:hover,
    #{$button-prefix}--disabled:active{
      cursor: $cursor-disabled;
      border-color:$button-border-color-disabled;
      background-color: $button-bg-color-disabled;
      color: $button-color-disabled;
    }
    &--primary{
      @include button-status($button-color-primary,$button-bg-color-primary,$button-border-color-primary);
      &:active {
        @include button-status($button-color-primary,$button-bg-color-primary-active,$button-border-color-primary-active);
      }
      &.disabled,
      &.disabled:hover,
      &.disabled:active,
      &#{$button-prefix}--disabled,
      #{$button-prefix}--disabled:hover,
      #{$button-prefix}--disabled:active{
        cursor: $cursor-disabled;
        border-color:$button-border-color-primary-disabled;
        background-color: $button-bg-color-primary-disabled;
        color: $button-color-primary-disabled;
      }
    }
    &--error{
      @include button-status($button-color-error,$button-bg-color-error,$button-border-color-error);
      // &:hover {
      //   @include button-status($button-color-error,$button-bg-color-error-hover,$button-border-color-error-hover);
      // }
      &:active {
        @include button-status($button-color-error,$button-bg-color-error-active,$button-border-color-error-active);
      }
      &.disabled,
      &.disabled:hover,
      &.disabled:active,
      &#{$button-prefix}--disabled,
      #{$button-prefix}--disabled:hover,
      #{$button-prefix}--disabled:active{
        cursor: $cursor-disabled;
        border-color:$button-border-color-primary-disabled;
        background-color: $button-bg-color-primary-disabled;
        color: $button-color-primary-disabled;
      }
    }
    &--text{
      box-shadow: $shadow-0;
      border-radius: $corner-0;
      @include button-status($button-color-text);
      &:active {
        @include button-status($button-color-text-active);
      }
      &.disabled,
      &.disabled:hover,
      &.disabled:active,
      &#{$button-prefix}--disabled,
      #{$button-prefix}--disabled:hover,
      #{$button-prefix}--disabled:active{
        cursor: $cursor-disabled;
        border-color:$color-transparent;
        background-color: $button-bg-color-disabled;
        color: $button-color-disabled;
      }
    }
    &--s{
      @include button-size($button-padding-s,$button-height-s,$button-font-size-s,$button-border-width-default);
      #{$button-prefix}-icon,#{$button-prefix}-loading{
        font-size: $button-font-size-s;
      }
    }
    &--xs{
      @include button-size($button-padding-xs,$button-height-xs,$button-font-size-xs,$button-border-width-default);
      #{$button-prefix}-icon,#{$button-prefix}-loading{
        font-size: $button-font-size-xs;
      }
    }
    &--l{
      @include button-size($button-padding-base,$button-height-l,$button-font-size-l,$button-border-width-default);
      #{$button-prefix}-icon,#{$button-prefix}-loading{
        font-size: $button-font-size-l;
      }
    }
    &--full{
      padding:0;
      width:100%;
    }
    &--circle{
      width: $button-height-base;
      height: $button-height-base;
      @include align-flex();
      @include align-flex-middle();
      @include align-flex-center();
      &#{$button-prefix}--l{
        width: $button-height-l;
        height: $button-height-l;
      }
      &#{$button-prefix}--s{
        width: $button-height-s;
        height: $button-height-s;
      }
      &#{$button-prefix}--xs{
        width: $button-height-xs;
        height: $button-height-xs;
      }
      padding: 0;
      border-radius: $corner-circle;
      #{$button-prefix}-icon,#{$button-prefix}-loading{
        margin-right:0;
      }
    }
  }

  @keyframes loadingCircle {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(1turn);
    }
  }
</style>
