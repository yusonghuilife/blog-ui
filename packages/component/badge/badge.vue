<template>
  <span
    :class="classNames"
    v-text="text"
  ></span>
</template>

<script>
  import mixinBase from "../mixins/base";

  export default {
    name: "BUBadge",
    mixins: [mixinBase],
    props: {
      text: {
        type: [String, Number],
        default: ''
      },
      withBorder: {
        type: Boolean,
        default: false
      },
    },
    computed: {
      pagePrefixCls() {
        return `${this.classPrefix}-badge`
      },
      classNames() {
        return [
          `${this.pagePrefixCls}`,
          `${this.text ? `${this.pagePrefixCls}--dot` : ""}`,
          `${!this.text && this.text.toString().length === 1 ? `${this.pagePrefixCls}--single` : ""}`,
          `${this.withBorder ? `${this.pagePrefixCls}--border` : ""}`,
        ];
      },
    }
  };
</script>
<style lang="scss" scoped>

    @import "../../assets/css/variable.scss";
    @import "../../assets/css/mixin.scss";


    /* Badge */
    $badge-prefix: '.' + $css-prefix + 'badge';
    $badge-bg-color: $color-error !default;
    $badge-color: $color-white !default;
    $badge-font-size: $font-size-s !default;
    $badge-height: $s-1*4 !default;
    $badge-padding: $s-1*1 !default;
    $badge-border-width: $line-1 !default;
    $badge-border-color: $color-white !default;
    $badge-dot-width: $s-1*2 !default;
    $badge-dot-corner: $corner-circle !default;

    #{$badge-prefix} {
        display: inline-block;
        height: $badge-height;
        background-color: $badge-bg-color;
        border-radius: $badge-height;
        color: $badge-color;
        line-height: $badge-height;
        font-size: $badge-font-size;
        text-align: center;
        padding: 0 $badge-padding;
        background-clip: padding-box;
        vertical-align: middle;

        &--single {
            width: $badge-height;
            padding: 0;
            box-sizing: border-box;
        }

        &--border {
            border: $badge-border-width solid $badge-border-color;
            line-height: $badge-height - 2*$badge-border-width;
        }

        &--dot {
            padding: 0;
            width: $badge-dot-width * 1.5;
            height: $badge-dot-width * 1.5;
            font-size: $badge-font-size;
            border-radius: $badge-dot-corner;
            line-height: $badge-dot-width *1.5 ;
            box-sizing: border-box;
        }
    }

</style>
