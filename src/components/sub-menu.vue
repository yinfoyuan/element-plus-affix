<script lang="ts" setup>
import type { RouteRecordRaw } from "vue-router/auto";

interface Props {
  menukey: "path" | "name";
  menu: RouteRecordRaw;
  defaultActive: string;
}

defineProps<Props>();
</script>

<template>
  <el-sub-menu v-if="menu.meta" :index="menu[menukey]">
    <template #title>
      <span>{{ menu.meta.title }}</span>
    </template>
    <template v-for="_menu in menu.children">
      <template
        v-if="
          !_menu?.meta?.isNotMenu && _menu.children && _menu.children.length
        "
      >
        <SubMenu
          :menukey="menukey"
          :key="_menu.name"
          :default-active="defaultActive"
          :menu="_menu"
        />
      </template>
      <el-menu-item
        v-else-if="!_menu?.meta?.isNotMenu"
        :key="_menu.name"
        :index="_menu[menukey]"
      >
        <template #title>
          {{ (_menu.meta && _menu.meta.title) || "未设置title" }}
        </template>
      </el-menu-item>
    </template>
  </el-sub-menu>
</template>
