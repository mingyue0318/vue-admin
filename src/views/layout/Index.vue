<template>
  <a-layout>
    <a-layout-sider
      breakpoint="lg"
      collapsed-width="0"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint"
    >
      <LayoutSider />
    </a-layout-sider>

    <a-layout>
      <a-layout-header :style="{ background: '#fff', padding: 0 }">
        <LayoutHeader />
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px 0' }">
        <div
          :style="{ padding: '24px', background: '#fff', minHeight: '360px' }"
        >
          <LayoutMain />
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import { reactive } from "vue";
import LayoutHeader from "./Header.vue";
import LayoutMain from "./Main.vue";
import LayoutSider from "./sider/Index.vue";

export default {
  name: "Index",
  components: {
    LayoutHeader,
    LayoutMain,
    LayoutSider,
  },
  setup() {
    const data = reactive({
      //   selectedKeys: ["1"],
    });
    return {
      data,
    };
  },
};
</script>
<style lang="scss" scope>
section {
  height: 100vh;
}
</style>
