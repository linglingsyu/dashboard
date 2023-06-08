<template>
  <Authenticator :hide-sign-up="true">
    <div class="flex flex-row">
      <SideMenu></SideMenu>
      <div class="flex w-full flex-col p-4">
        <div class="w-full">
          <!-- <label for="sidebar-mobile-fixed" class="btn-primary btn sm:hidden"
          >Open Sidebar</label
        > -->
          <MenuIcon></MenuIcon>
          <!-- <button @click="switchTheme" type="button">switch Mode</button> -->
          <RouterView />
        </div>
      </div>
    </div>
  </Authenticator>
</template>
<script>
import '@aws-amplify/ui-vue/styles.css';
import SideMenu from '@/components/SideMenu/SideMenu.vue';
import MenuIcon from '@/components/icons/IconMenu.vue';
export default {
  methods: {
    switchTheme() {
      const html = document.querySelector('html');
      if (html.dataset.theme) {
        delete html.dataset.theme;
      } else {
        html.dataset.theme = 'dark';
      }
    },
  },
  components: {
    SideMenu,
    MenuIcon,
  },
};
</script>
<style scoped></style>
