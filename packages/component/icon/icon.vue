<template>
    <i :class="classNames"></i>
</template>

<script>
  import mixinBase from "../mixins/base";

  export default {
    name: "BUIcon",
    components: {},
    mixins: [mixinBase],
    props: {
      name: {
        type: String,
      },
      size: String,
    },
    computed: {
      pagePrefixCls() {
        return `${this.classPrefix}-icon`
      },
      classNames() {
        return [
          `${this.pagePrefixCls}`,
          `${this.name ? `${this.pagePrefixCls}-${this.name}` : ""}`,
          `${this.size ? `${this.pagePrefixCls}--${this.size}` : ""}`,
          `${this.classExtra ? `${this.classExtra}` : ""}`
        ];
      },
    }
  };
</script>
<style lang="scss" scoped>

    @import "../../assets/css/variable.scss";
    @import "../../assets/css/mixin.scss";

    @mixin icon-size($size, $marginLeft: false, $marginRight: false, $transform: false) {
        @if ($transform) {
            transform: $transform;
        }

        &::before {
            width: $size;
            font-size: $size;
            line-height: inherit;
        }

    }

    /* Icon */
    $icon-prefix: '.' + $css-prefix + 'icon';
    $icon-xs: $s-1*2 !default;
    $icon-s: $s-1*3 !default;
    $icon-base: $font-size-base !default;
    $icon-l: $s-1*6 !default;
    $icon-xl: $s-1*8 !default;
    #{$icon-prefix} {
        //font-size:$icon-base;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        line-height: 1;
        display: inline-block;

        &::before {
            display: inline-block;
            vertical-align: middle;
            text-align: center;
        }

        &-loading {
            &::before {
                transform-origin: 50% 50%;
                animation: loadingCircle 1.5s infinite linear;
            }

        }

        &--xs {
            @include icon-size($icon-xs);
        }

        &--s {
            @include icon-size($icon-s);
        }

        &--l {
            @include icon-size($icon-l);
        }

        &--xl {
            @include icon-size($icon-xl);
        }
    }

    @keyframes loadingCircle {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }

    #{$icon-prefix}-close:before {
        content: "\e723";
    }

    #{$icon-prefix}-add:before {
        content: "\e727";
    }

    #{$icon-prefix}-check:before {
        content: "\e72e";
    }

    #{$icon-prefix}-share:before {
        content: "\e739";
    }

    #{$icon-prefix}-more:before {
        content: "\e73a";
    }

    #{$icon-prefix}-setting:before {
        content: "\e74c";
    }

    #{$icon-prefix}-home-fill:before {
        content: "\e750";
    }

    #{$icon-prefix}-home:before {
        content: "\e751";
    }

    #{$icon-prefix}-search:before {
        content: "\e752";
    }

    #{$icon-prefix}-arrow-up:before {
        content: "\e76e";
    }

    #{$icon-prefix}-arrow-down:before {
        content: "\e772";
    }

    #{$icon-prefix}-arrow-right:before {
        content: "\e775";
    }

    #{$icon-prefix}-arrow-left:before {
        content: "\e779";
    }

    #{$icon-prefix}-loading:before {
        content: "\e781";
    }

    #{$icon-prefix}-refresh:before {
        content: "\e782";
    }

    #{$icon-prefix}-smile:before {
        content: "\e783";
    }

    #{$icon-prefix}-warning:before {
        content: "\e785";
    }

    #{$icon-prefix}-smile-fill:before {
        content: "\e847";
    }

    #{$icon-prefix}-warning-fill:before {
        content: "\e848";
    }

    #{$icon-prefix}-clear-fill:before {
        content: "\e651";
    }

    #{$icon-prefix}-success:before {
        content: "\e652";
    }

    #{$icon-prefix}-clear:before {
        content: "\e653";
    }

    #{$icon-prefix}-success-fill:before {
        content: "\e654";
    }

    #{$icon-prefix}-info-fill:before {
        content: "\e655";
    }

    #{$icon-prefix}-info:before {
        content: "\e656";
    }

    #{$icon-prefix}-help-fill:before {
        content: "\e657";
    }

    #{$icon-prefix}-help:before {
        content: "\e658";
    }

    #{$icon-prefix}-caution:before {
        content: "\e659";
    }

    #{$icon-prefix}-caution-fill:before {
        content: "\e65a";
    }
</style>
