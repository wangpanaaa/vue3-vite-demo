import { defineStore } from 'pinia'

export const usePermissionStore = defineStore({
  id: 'app-permission',
  state: () => ({
    // 权限代码列表
    permCodeList: [],
    // Whether the route has been dynamically added
    // 路由是否动态添加
    isDynamicAddedRoute: false,
    // To trigger a menu update
    // 触发菜单更新
    lastBuildMenuTime: 0,
    // Backstage menu list
    // 后台菜单列表
    backMenuList: [],
    // menu List
    // 菜单列表
    frontMenuList: [],
  }),
  actions: {
    setPermCodeList(codeList) {
      this.permCodeList = codeList;
    },

    setBackMenuList(list) {
      this.backMenuList = list;
      list?.length > 0 && this.setLastBuildMenuTime();
    },

    setFrontMenuList(list) {
      this.frontMenuList = list;
    },

    setLastBuildMenuTime() {
      this.lastBuildMenuTime = new Date().getTime();
    },

    setDynamicAddedRoute(added) {
      this.isDynamicAddedRoute = added;
    },
    resetState() {
      this.isDynamicAddedRoute = false;
      this.permCodeList = [];
      this.backMenuList = [];
      this.lastBuildMenuTime = 0;
    },
    async changePermissionCode() {
      // const codeList = await getPermCode();
      const codeList=[]
      this.setPermCodeList(codeList);
    },
  },
});