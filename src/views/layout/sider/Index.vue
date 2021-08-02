<template>
  <div>
    <svg-icon />
  </div>
  <div id="sider">
    <a-menu
      mode="inline"
      theme="dark"
      :inline-collapsed="collapsed"
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
    >
      <template v-for="item in routes">
        <template v-if="!item.hidden">
          <a-menu-item v-if="!item.children" :key="item.path">
            <template #icon>
              <PieChartOutlined />
            </template>
            <router-link :to="item.path">{{
              item.mate && item.mate.title
            }}</router-link>
            <span></span>
          </a-menu-item>
          <!--

             <Menu v-else :key="item.path" />
          -->

          <Menu v-else :menu="item" :nums="nums" other="342" :key="item.path" />
        </template>
      </template>
    </a-menu>
  </div>
</template>
<script>
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import Menu from "./Menu.vue";
export default {
  name: "Sider",
  components: {
    Menu,
  },
  setup() {
    // 获取路由
    const { options } = useRouter();
    const routes = options.routes;
    // console.log(options);
    console.log(useRouter());
    // 原始路由信息
    // const { getRoutes } = useRouter();
    // const routes = getRoutes();

    const state = reactive({
      collapsed: false,
      selectedKeys: ["/index"],
      openKeys: ["sub1"],
      preOpenKeys: [""],
      nums: 100,
    });
    return {
      ...toRefs(state),
      routes,
    };
  },
};
</script>
<style lang="scss"></style>
