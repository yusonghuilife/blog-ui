<template>
  <div
    :class="classNames"
    @click="onClick"
  >
    <img
      v-if="srcToShow"
      :class="`${pagePrefixCls}-pic`"
      :src="srcToShow"
      ref="curImgDom"
    >
    <sub v-if="badge"><BUBadge :text="badge"></BUBadge></sub>
    <BUIcon
      v-if="icon"
      :name="icon"
      :class-extra="`${pagePrefixCls}-icon`"
    ></BUIcon>
  </div>
</template>

<script>
import mixinBase from "../mixins/base";
import mixinEmitter from "../mixins/emitter";
import BUIcon from "../icon";
import BUBadge from "../badge"
export default {
  name: "BUAvatar",
  components: {
    BUIcon,
    BUBadge
  },
  data(){
    return {
      srcToShow : ''
    }
  },
  mixins: [mixinBase, mixinEmitter],
  props: {
    src: {
      type:String,
      // required: true
    },
    shape: {
      type: String,
      default: 'circle',
      validator: val => ['square', 'circle'].indexOf(val) > -1
    },
    withBorder: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      validator: val => ['s', 'l'].indexOf(val) > -1
    },//s、l
    badge: String,
    icon: String,
    status: {
      type: String,
      validator: val => ['online', 'offline', 'ongame'].indexOf(val) > -1
    },//online offline ongame
    onerror: {
      type: [String,Function]
    }
  },
  computed:{
    pagePrefixCls(){
      return `${this.classPrefix}-avatar`
    },
    classNames() {
      return [
        `${this.pagePrefixCls}`,
        `${this.shape ? `${this.pagePrefixCls}--${this.shape}` : ""}`,
        `${this.size ? `${this.pagePrefixCls}--${this.size}` : ""}`,
        `${this.withBorder ? `${this.pagePrefixCls}--border` : ""}`,
      ];
    },
  },
  mounted () {
    this.$refs.curImgDom.onerror = () => {
      if (typeof this.onerror == 'function'){
        this.srcToShow = this.onerror()
      }
      if (typeof this.onerror == 'string'){
        this.srcToShow = this.onerror
      }
    }
  },
  created () {
    this.srcToShow = this.src;
  },
  methods:{
    onClick(){
      this.$emit('on-click');
    }
  }
};
</script>
<style lang="scss" scoped>
  @import "../../assets/css/variable.scss";
  @import "../../assets/css/mixin.scss";
  $avatar-prefix        : '.' + $css-prefix + 'avatar';
  $avatar-corner        : $corner-circle !default;
  $avatar-border-color  : $color-white !default;
  $avatar-size          : $s-1*10 !default;
  $avatar-border-width  : $s-1/2 !default;
  $avatar-size-l        : 15*$s-1 !default;
  $avatar-border-width-l: $s-1 !default;
  $avatar-size-s        : 6*$s-1 !default;
  $avatar-border-width-s: $s-1/2 !default;

  $avatar-icon-size     : 4*$s-1 !default;
  $avatar-icon-corner   : $corner-circle !default;
  $avatar-icon-bg-color : rgba($color-black,0.8) !default;
  $avatar-icon-color    : $color-white !default;
  $avatar-icon-font-size: $font-size-s !default;
  $avatar-sup-top             : -$s-1*1 !default;
  $avatar-sup-right           : -$s-1*2 !default;



  #{$avatar-prefix}{
    width:$avatar-size;
    height:$avatar-size;
    position: relative;
    cursor: pointer;
    & > sub {
      position: absolute;
      top:$avatar-sup-top;
      right:$avatar-sup-right;
      line-height:1;
    }
    &-pic{
      display:block;
      width:100%;
      height:100%;
      border-radius:$avatar-corner;
    }
    &-icon{
      position: absolute;
      bottom:0;
      right:0;
      width:$avatar-icon-size;
      height:$avatar-icon-size;
      background-color:$avatar-icon-bg-color;
      border-radius:$avatar-icon-corner;
      font-size:$avatar-icon-font-size;
      color:$avatar-icon-color;
      line-height:$avatar-icon-size;
      text-align:center;
      vertical-align: middle;
      &#{$class-prefix}-icon{
        line-height:$avatar-icon-size;
      }
    }
    &--square{
      border-radius:0;
      #{$avatar-prefix}-pic{
        border-radius:0;
      }
    }
    &--circle{
      border-radius:$avatar-corner;
      #{$avatar-prefix}-pic{
        border-radius:$avatar-corner;
      }
    }
    &--border{
      border:$avatar-border-width solid $avatar-border-color;
    }
    &--l{
      width:$avatar-size-l;
      height:$avatar-size-l;
      &#{$avatar-prefix}--border{
        border:$avatar-border-width-l solid $avatar-border-color;
      }
    }
    &--s{
      width:$avatar-size-s;
      height:$avatar-size-s;
      &#{$avatar-prefix}--border{
        border:$avatar-border-width-s solid $avatar-border-color;
      }
    }

  }
</style>
