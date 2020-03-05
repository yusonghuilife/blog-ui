import icon from './icon'
import button from './button'
import badge from './badge'
import avatar from './avatar'
import rowCard from './row-card'
import tabnav from './tabnav'
import tabnav_item from './tabnav-item'
import tabbar from './tabbar'
import tabbar_item from  './tabbar-item'

// 存储组件列表
const components = [
  icon,
  button,
  badge,
  avatar,
  rowCard,
  tabnav,
  tabnav_item,
  tabbar,
  tabbar_item
];

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
  // 判断是否可以安装
  if (install.installed) return
  // 遍历注册全局组件
  components.map(component => Vue.component(component.name, component))
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  icon,
  button,
  badge,
  avatar,
  rowCard,
  tabnav,
  tabnav_item,
  tabbar,
  tabbar_item
}
