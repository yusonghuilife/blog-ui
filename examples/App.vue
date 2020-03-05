<template>
  <div id="app">
    <div class="page-header">
      <BUAvatar :src="logo" size="s" @click="toMainPage"></BUAvatar>
      <div class="dropList" @click="dropItemsVisi = !dropItemsVisi">
        <span>首页</span>
        <div class="dropItems" v-if="dropItemsVisi">
          <div class="dropItem">前端</div>
          <div class="dropItem">后端</div>
          <div class="dropItem">客户</div>
          <div class="dropItem">产品</div>
        </div>
      </div>
      <input/>
      <BUAvatar :src="ring" size="s" badge="8"></BUAvatar>
      <BUAvatar :src="avatar" size="s"></BUAvatar>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import logo from './assets/image/logo.png'
  import ring from './assets/image/ring.png'
  import avatar from './assets/image/people.png'
  export default {
    data() {
      return {
        color: '#ff0000',
        logo,
        ring,
        avatar,
        dropItemsVisi: false
      }
    },
    methods: {
      toMainPage(){
        this.$router.push('/')
      }
    }
  }
</script>

<style lang="sass">
  @import "assets/scss/app.scss";
</style>
