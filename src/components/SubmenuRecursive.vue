<template>
  <el-submenu v-for="submenu in submenus" :index="submenu.index">
    <template slot="title">{{ submenu.title }}</template>
    <template v-for="item in submenu.items">
      <el-menu-item :index="item.index">{{ item.label }}</el-menu-item>
    </template>
    <template v-if="submenu.submenus">
      <submenu-recursive :submenus="submenu.submenus"></submenu-recursive>
    </template>
  </el-submenu>
</template>

<script>
export default {
  name: 'SubmenuRecursive',
  props: {
    submenus: {
      type: Array,
      required: true
    }
  }
}
</script>