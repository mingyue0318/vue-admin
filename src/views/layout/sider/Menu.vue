<template>
  <div>
    <a-sub-menu :key="menu.path">
      <template #icon>
        <MailOutlined />
      </template>
      <template #title> {{ menu.mate && menu.mate.title }}</template>
      <template v-if="menu.children.length">
        <template v-for="item in menu.children">
          <a-menu-item v-if="!item.children" :key="item.path">
            <router-link :to="item.path">{{
              item.mate && item.mate.title
            }}</router-link>
          </a-menu-item>
          <Menu v-else :menu="item" :key="item.path" />
        </template>
      </template>
    </a-sub-menu>
  </div>
</template>
<script>
export default {
  name: "Menu",
  props: {
    menu: {
      type: Object,
      default: () => ({}),
    },
    nums: {
      type: Number,
      default: 0,
    },
    other: {
      //不能直接修改，可间接修改
      type: [Number, String],
    },
  },
  setup() {
    return {};
  },
};
</script>
<style lang="scss" scoped></style>
