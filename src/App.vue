<!--
 * @Author: your name
 * @Date: 2021-07-26 21:21:06
 * @LastEditTime: 2021-07-26 21:36:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-admin/src/App.vue
-->
<template>
  <router-view />
</template>

<style lang="scss">
#app {
  height: 100%;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
