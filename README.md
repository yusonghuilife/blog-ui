# BLOGUI - 基于Vue.js的博客UI



## 调用

在入口文件中注册全局使用

```javascript
// main.js
import Vue from 'vue'
import BlogUi from '../packages/component'
Vue.use(BlogUi);
```

在需要引用组件的地方使用

```javascript
<template>
  <BUAvatar :src="logo" size="s" @click="toMainPage"></BUAvatar>
</template>
```



## 组件

本UI组件已实现以下功能

1. 头像
2. 红点提醒
3. 按钮
4. 卡片
5. 图标
6. 顶部Tab
7. 底部Tab



## 界面展示

demo在项目examples文件夹下，clone项目运行后即可看到效果

展示demo完全使用该UI组件完成

![image-20200305162145423](https://upload-images.jianshu.io/upload_images/3289487-9e6ee51676a3127e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

