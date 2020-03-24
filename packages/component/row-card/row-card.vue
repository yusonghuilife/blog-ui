<template>
  <div
    :class="classNames"
    @click="onClick"
  >
    <div :class="`${pagePrefixCls}-wrap`">
      <div
        v-if="hasHd"
        :class="`${pagePrefixCls}-hd`"
      >
        <BUIcon
          v-if="icon"
          :name="icon"
        ></BUIcon>
        <slot
          name="icon"
        ></slot>
      </div>
      <div :class="`${pagePrefixCls}-bd`">
        <h3
          v-if="title || hasTitleSlot"
          :class="`${pagePrefixCls}-title`"
        >
          <slot name="title">
            {{ title }}
          </slot>
        </h3>
        <div
          v-if="desc || hasDescSlot"
          :class="`${pagePrefixCls}-desc`"
        >
          <slot name="desc">
            {{ desc }}
          </slot>
        </div>
      </div>
      <div
        v-if="hasFt"
        :class="`${pagePrefixCls}-ft`"
      >
        <slot name="value">
          {{ value }}
        </slot>
        <BUIcon
          v-if="isLink || link"
          name="arrow-right"
          :class-extra="`${pagePrefixCls}-arrow-right`"
        ></BUIcon>
      </div>
    </div>
    <slot
      name="child"
    ></slot>
  </div>
</template>

<script>
import mixinBase from "../mixins/base";
import { go } from '../../utils/router';
import BUIcon from "../icon";

export default {
  name: "BUCard",
  components: {
    BUIcon
  },
  mixins: [mixinBase],
  props: {
    title: [String, Number],
    value: [String, Number],
    isLink: Boolean,
    link: [String],
    icon:[String],
    desc: [String, Number],
    disabled: Boolean,
  },
  computed:{
    pagePrefixCls(){
      return `${this.classPrefix}-cell`
    },
    classNames() {
      return [
        `${this.pagePrefixCls}`,
        `${this.isLink || this.link ? `${this.pagePrefixCls}--access` : ""}`,
        `${this.hasSlotHdPic ? `${this.pagePrefixCls}--media` : ""}`,
        `${this.disabled ? `${this.pagePrefixCls}--disabled` : ""}`
      ];
    },
    hasTitleSlot(){
      return this.$slots.title
    },
    hasDescSlot(){
      return this.$slots.desc
    },
    hasSlotIcon(){
      return this.$slots.icon
    },
    hasSlotHdPic(){
      return this.$slots.hdpic
    },
    hasHd(){
      return this.icon || this.hasSlotIcon || this.hasSlotHdPic
    },
    hasFt(){
      return this.link || this.isLink || this.$slots.value || this.value
    },
  },
  methods:{
    onClick (e) {
      if(!this.disabled){
        this.$emit("click", e);
        go(this.link, this.$router)
      }
    }
  }
};
</script>
<style lang="scss" scoped>

  @import "../../assets/css/variable.scss";
  @import "../../assets/css/mixin.scss";

  /* Cell */
  $cell-prefix: '.' + $css-prefix + 'cell';
  $cell-padding     : $s-1*3 0 $s-1*3 0 !default;
  $cell-onepx-margin: 0 $s-1*5 !default;

  $cell-border-color   : $color-line-1 !default;
  $cell-title-color    : $color-text-1 !default;
  $cell-title-font-size: $font-size-l !default;
  $cell-title-padding  : $s-1*2 !default;
  $cell-desc-color     :  $color-text-hint !default;
  $cell-desc-font-size : $font-size-base/2 !default;
  $cell-desc-padding   : 0 !default;

  $cell-hd-margin             : $s-1*3 !default;
  $cell-ft-margin             : $s-1*3 !default;
  $cell-ft-item-margin        : $s-1 !default;
  $cell-color-disabled        : $color-text-4 !default;
  $cell-access-bg-color-active: $color-fill-4 !default;
  $cell-arrow-font-size       : $font-size-l !default;
  $cell-arrow-color           : $color-text-3 !default;

  #{$cell-prefix}{
    position: relative;
    padding:$cell-padding;
    @include onePx($cell-border-color,top);
    &:before{
      left:0;
      width:auto;
      margin:$cell-onepx-margin;
    }
    &:first-child{
      border-top:0;
      background-image:none;
      &:before{
        display:none;
      }
    }
    &-wrap{
      @include align-flex();
      @include align-flex-middle();
    }
    &-hd{
      margin-right:$cell-hd-margin;
    }
    &-bd{
      flex:1;
      overflow: hidden;
      text-align:left;
    }
    &-ft{
      margin-left:$cell-hd-margin;
      * + *{
        margin-left:$cell-ft-item-margin;
      }
    }
    &-title{
      color:$cell-title-color;
      font-size:$cell-title-font-size;
    }
    &-desc{
      color:$cell-desc-color;
      font-size:$cell-desc-font-size;
    }
    &-arrow-right{
      font-size:$cell-arrow-font-size;
      color:$cell-arrow-color;
    }
    //modifier
    &--access{
      cursor: pointer;
      #{$cell-prefix}-ft{
        @include align-flex();
        @include align-flex-middle();
      }
      #{$cell-prefix}-bd{
        overflow: hidden;
      }
      #{$cell-prefix}-title{
        @include ellipsis(100%);
      }
      &:active{
        background-color: $cell-access-bg-color-active;
      }
    }
    &--disabled{
      cursor: $cursor-disabled;
      &:active{
        background-color: $color-transparent;
      }
      #{$cell-prefix}-hd,#{$cell-prefix}-bd,#{$cell-prefix}-ft,#{$cell-prefix}-title,#{$cell-prefix}-desc,#{$cell-prefix}-arrow-right{
        color:$cell-color-disabled;
      }
    }
  }
</style>
