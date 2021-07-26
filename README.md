# vue-admin

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


##### 为什么模板下面需要一个根包裹

```
template
1.隐藏性：该标签不会显示在页面的任何地方，即便里面有多少内容，它永远都是隐藏的状态；

2.任意性：该标签可以写在页面的任何地方，甚至是head、body、sciprt标签内；

3.无效性：该标签里的任何HTML内容都是无效的，不会起任何作用；


一个.vue单文件组件是一个vue实例

如果在template下有多个div，那么该如何指定这个vue实例的根入口？
为了让组件能够正常的生成一个vue实例，那么这个div会被自然的处理成程序的入口
通过这个‘根节点’，来递归遍历整个vue‘树’下的所有节点，并处理为vdom，最后再渲染成真正的HTML，插入在正确的位置
```

##### webpack api 一键注册

```

```

# dart-sass

```
https://sass.bootcss.com/dart-sass
```