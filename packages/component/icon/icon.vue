<template>
    <i :class="classNames"></i>
</template>

<script>
  import mixinBase from "../mixins/base";
  import mixinEmitter from "../mixins/emitter";

  export default {
    name: "BUIcon",
    components: {},
    mixins: [mixinBase, mixinEmitter],
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

    @font-face {
        font-weight: normal;
        font-style: normal;
        font-family: "uikit";
        src: url('data:application/octet-stream;charset=utf-8;base64,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') format('truetype');
    }

    /* Icon */
    $icon-prefix: '.' + $css-prefix + 'icon';
    $icon-xs: $s-1*2 !default;
    $icon-s: $s-1*3 !default;
    $icon-base: $font-size-base !default;
    $icon-l: $s-1*6 !default;
    $icon-xl: $s-1*8 !default;
    #{$icon-prefix} {
        font-family: "uikit" !important;
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
