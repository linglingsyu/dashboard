<script>
// import TheWelcome from '@/components/TheWelcome.vue';
import AccountIcon from '@/components/icons/IconAccount.vue';
import SidebarTitle from '@/components/SideMenu/SidebarTitle.vue';
import MenuToggleItem from '@/components/SideMenu/MenuToggleItem.vue';
import ToggleMenu from '@/components/SideMenu/ToggleMenu.vue';
import ToggleItem from '@/components/SideMenu/ToggleItem.vue';
import { Auth } from 'aws-amplify';

export default {
  methods: {
    async signOut() {
      try {
        await Auth.signOut();
      } catch (error) {
        console.log('error signing out: ', error);
      }
    },
  },
  components: {
    AccountIcon,
    SidebarTitle,
    MenuToggleItem,
    ToggleMenu,
    ToggleItem,
  },
};
</script>

<template>
  <div class="sm:w-full sm:max-w-[18rem]">
    <input type="checkbox" id="sidebar-mobile-fixed" class="sidebar-state" />
    <label for="sidebar-mobile-fixed" class="sidebar-overlay"></label>
    <aside
      class="sidebar sidebar-fixed-left sidebar-mobile h-full justify-start max-sm:fixed max-sm:-translate-x-full"
    >
      <section class="sidebar-title items-center p-4">
        <SidebarTitle></SidebarTitle>
      </section>
      <section class="sidebar-content">
        <nav class="menu rounded-md">
          <section class="menu-section px-4">
            <span class="menu-title">Main menu</span>
            <ul class="menu-items">
              <MenuToggleItem checked="true">
                <template #icon>
                  <AccountIcon />
                </template>
                <template #title> Account </template>
                <template #menu-item>
                  <ToggleMenu>
                    <ToggleItem :to="{ name: 'AccountList' }"
                      >Company list</ToggleItem
                    >
                    <ToggleItem :to="{ name: 'CreateAccount' }"
                      >Create Company</ToggleItem
                    >
                  </ToggleMenu>
                </template>
              </MenuToggleItem>
            </ul>
          </section>
          <!-- <div class="divider my-0"></div>
          <section class="menu-section px-4">
            <span class="menu-title">Settings</span>
            <ul class="menu-items">
              <li class="menu-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="opacity-75"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M3 21l18 0"></path>
                  <path d="M3 10l18 0"></path>
                  <path d="M5 6l7 -3l7 3"></path>
                  <path d="M4 10l0 11"></path>
                  <path d="M20 10l0 11"></path>
                  <path d="M8 14l0 3"></path>
                  <path d="M12 14l0 3"></path>
                  <path d="M16 14l0 3"></path>
                </svg>
                Payments
              </li>
              <li class="menu-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="opacity-75"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M7 9m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z"
                  ></path>
                  <path d="M14 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                  <path
                    d="M17 9v-2a2 2 0 0 0 -2 -2h-10a2 2 0 0 0 -2 2v6a2 2 0 0 0 2 2h2"
                  ></path>
                </svg>
                Balances
              </li>
              <li class="menu-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="opacity-75"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                  <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>
                </svg>
                Customers
              </li>
              <li class="menu-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="opacity-75"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M7 10l5 -6l5 6"></path>
                  <path
                    d="M21 10l-2 8a2 2.5 0 0 1 -2 2h-10a2 2.5 0 0 1 -2 -2l-2 -8z"
                  ></path>
                  <path d="M12 15m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                </svg>
                Products
              </li>
              <li>
                <input type="checkbox" id="menu-2" class="menu-toggle" />
                <label class="menu-item justify-between" for="menu-2">
                  <div class="flex gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="opacity-75"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path
                        d="M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11"
                      ></path>
                      <path d="M9 7l4 0"></path>
                      <path d="M9 11l4 0"></path>
                    </svg>
                    <span>Contracts</span>
                  </div>

                  <span class="menu-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                </label>

                <div class="menu-item-collapse">
                  <div class="min-h-0">
                    <label class="menu-item menu-item-disabled ml-6"
                      >Create contract</label
                    >
                    <label class="menu-item ml-6">All contracts</label>
                    <label class="menu-item ml-6">Pending contracts</label>
                    <label class="menu-item ml-6">Security</label>
                  </div>
                </div>
              </li>
            </ul>
          </section> -->
        </nav>
      </section>
      <section class="sidebar-footer justify-end bg-gray-2 pt-2">
        <div class="divider my-0"></div>
        <div
          class="dropdown z-50 flex h-fit w-full cursor-pointer hover:bg-gray-4"
        >
          <label
            class="whites mx-2 flex h-fit w-full cursor-pointer p-0 hover:bg-gray-4"
            tabindex="0"
          >
            <div class="flex flex-row gap-4 p-4">
              <div class="avatar-square avatar avatar-md">
                <img src="https://i.pravatar.cc/150?img=30" alt="avatar" />
              </div>

              <div class="flex flex-col">
                <span>Elsa Syu</span>
              </div>
            </div>
          </label>
          <div class="dropdown-menu-right-top dropdown-menu ml-2">
            <a @click.prevent="signOut" class="dropdown-item text-sm">Logout</a>
          </div>
        </div>
      </section>
    </aside>
  </div>
</template>
