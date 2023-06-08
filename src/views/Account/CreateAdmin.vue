<template>
  <loading :active="isLoading" />
  <section class="bg-gray-2 rounded-xl">
    <div class="p-8">
      <h3 class="mb-4">Create Admin</h3>
      <form class="space-y-4">
        <div class="w-full">
          <label class="sr-only" for="email">Email</label>
          <input
            class="input input-solid max-w-full"
            placeholder="email"
            type="email"
            id="email"
            v-model.trim="RootEmail"
          />
        </div>

        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label class="sr-only" for="fname">First Name</label>
            <input
              class="input input-solid"
              placeholder="First Name"
              type="text"
              v-model.trim="FirstName"
              id="fname"
            />
          </div>

          <div>
            <label class="sr-only" for="lname">Last Name</label>
            <input
              class="input input-solid"
              placeholder="Last name"
              type="text"
              id="lname"
              v-model.trim="LastName"
            />
          </div>
        </div>

        <!-- <div class="w-full">
          <label class="sr-only" for="Password">Password</label>
          <input
            class="input input-solid max-w-full"
            placeholder="Password"
            type="Password"
            id="Password"
          />
        </div>

        <div class="w-full">
          <label class="sr-only" for="ConfirmPassword">Confirm Password</label>
          <input
            class="input input-solid max-w-full"
            placeholder="Confirm Password"
            type="password"
            id="ConfirmPassword"
          />
        </div> -->

        <div class="mt-4 flex justify-end gap-4">
          <router-link
            :to="{ name: 'AccountList' }"
            class="rounded-lg btn btn-border"
            >Back to list</router-link
          >
          <button
            type="button"
            class="rounded-lg btn btn-primary"
            @click="save"
          >
            save
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { AccountStore } from '@/stores/AccountStore.js';

export default {
  data() {
    return {
      TenantID: this.$route.params.id,
      RootEmail: '',
      FirstName: '',
      LastName: '',
    };
  },
  methods: {
    ...mapActions(AccountStore, ['CreateRootUser']),
    save() {
      if (this.TenantID && this.RootEmail && this.FirstName && this.LastName) {
        const data = {
          TenantID: this.TenantID,
          RootEmail: this.RootEmail,
          FirstName: this.FirstName,
          LastName: this.LastName,
        };
        const result = this.CreateRootUser(data);
        console.log(result);
      }
    },
    computed: {
      ...mapState(AccountStore, ['isLoading']),
    },
  },
};
</script>

<style lang="scss"></style>
