<template>
  <el-menu :default-openeds="expandedSubmenuIndexes" background-color="#D3D3D3">
    <template v-for="submenu in submenus">
      <template v-if="submenu.items">
        <el-submenu :index="submenu.index" :popper-append-to-body="false" :popper-class="expanded(submenu) ? 'expanded' : ''">
          <template slot="title">{{ submenu.title }}</template>
          <template v-for="item in submenu.items">
            <el-menu-item :index="item.index">{{ item.label }}</el-menu-item>
          </template>
          <template v-if="submenu.submenus">
            <el-submenu v-for="subsubmenu in submenu.submenus" :key="subsubmenu.index" :index="subsubmenu.index">
              <template slot="title">{{ subsubmenu.title }}</template>
              <template v-for="subitem in subsubmenu.items">
                <el-menu-item :index="subitem.index">{{ subitem.label }}</el-menu-item>
              </template>
            </el-submenu>
          </template>
        </el-submenu>
      </template>
    </template>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      expandedSubmenuIndexes: [], // 初始化为空数组
      submenus: [
        {
          index: '1',
          title: '首页',
          items: [
            { index: '1-1', label: '公告' },
          ],
        },
        {
          index: '2',
          title: '支教申请',
          items: [
            { index: '2-1', label: '申请支教' },
            { index: '2-2', label: '申请记录' }
          ],
          expanded: true
        },
        {
          index: '3',
          title: '校园风采',
          items: [
            { index: '2-1', label: '学校简介' },
            { index: '2-2', label: '学校风采' }
          ],
          expanded: true
        }
      ]
    };
  },
  methods: {
    expanded(submenu) {
      return submenu.expanded;
    },
    expandAllSubmenus() {
      this.submenus.forEach(submenu => {
        this.expandSubmenu(submenu);
      });
    },
    expandSubmenu(submenu) {
      if (submenu.submenus) {
        submenu.submenus.forEach(sub => {
          this.expandSubmenu(sub);
        });
      }
      // 将子菜单的索引转换为字符串并添加到 expandedSubmenuIndexes 数组中
      this.expandedSubmenuIndexes.push(submenu.index.toString());
    }
  },
  mounted() {
    this.submenus.forEach(submenu => {
      if (submenu.expanded) {
        this.expandedSubmenuIndexes.push(parseInt(submenu.index));
      }
      this.expandSubmenu(submenu);
    });
  }
};
</script>