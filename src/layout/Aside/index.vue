<template>
  <div>
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      default-active="/index"
      text-color="#fff"
    >
      <el-menu-item index="1">
        <el-icon><setting /></el-icon>
        <span>首页</span>
      </el-menu-item>
      <el-sub-menu index="2">
        <template #title>
          <el-icon><location /></el-icon>
          <span>系统管理</span>
        </template>
          <el-menu-item index="/sys/users">用户管理</el-menu-item>
          <el-menu-item index="/sys/roles">菜单管理</el-menu-item>
          <el-menu-item index="/sys/menus">角色管理</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="3">
        <template #title>
          <el-icon><location /></el-icon>
          <span>系统工具</span>
        </template>
          <el-menu-item index="1-1">数字字典</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script setup></script>
<style scoped lang="scss"></style>
