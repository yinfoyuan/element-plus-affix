<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from "vue-router";
import { routes } from "vue-router/auto-routes";
const menukey: "path" | "name" = "path";
const route = useRoute();
const menuDefaultActive = computed(() => route[menukey] || '/');
</script>
<template>
  <div>
    <el-menu router :default-active="menuDefaultActive">
      <template v-for="menu in routes">
        <template v-if="!menu?.meta?.isNotMenu">
          <SubMenu
            :menukey="menukey"
            v-if="menu.children && menu.children.length"
            :key="menu.name"
            :default-active="menuDefaultActive"
            :menu="menu"
          />
          <el-menu-item
            v-else-if="!menu?.meta?.isNotMenu"
            :key="`${(menu.name as string)}_`"
            :index="(menu[menukey] as string) || menu.path"
          >
            <template #title>
              {{ (menu.meta && menu.meta.title) || "未设置title" }}
            </template>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
    <router-view />
  </div>
</template>
