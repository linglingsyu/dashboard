<template>
  <loading :active="isLoading" />
  <section class="bg-gray-2 rounded-xl">
    <div class="p-8">
      {{ CompanyProfile }}

      <h3 class="mb-4">Create Account</h3>
      <form class="space-y-4">
        <div class="w-full">
          <label class="sr-only" for="name">Company Name</label>
          <input
            class="input input-solid max-w-full"
            placeholder="Company Name"
            type="text"
            id="name"
            v-model="CompanyName"
          />
        </div>

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
      CompanyName: '',
    };
  },
  methods: {
    ...mapActions(AccountStore, ['CreateCompanyProfile']),
    save() {
      if (!this.CompanyName) {
        return false;
      }
      this.CreateCompanyProfile(this.CompanyName);
    },
  },
  computed: {
    ...mapState(AccountStore, ['isLoading']),
  },
};
</script>

<style lang="scss"></style>
