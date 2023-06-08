<template>
  <div class="flex w-full overflow-x-auto">
    <table class="table-compact table">
      <thead>
        <tr>
          <th>TenantID</th>
          <th>Company Name</th>
          <th>Duration</th>
          <th>Enabled</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="Company in CompanyProfile" :key="Company.TenantID">
          <th>{{ Company.TenantID }}</th>
          <td>
            <a
              @click.prevent="showModal(Company)"
              class="link link-primary"
              href="#"
            >
              {{ Company.CompanyName }}</a
            >
          </td>
          <td>{{ Company.DurationDateFormat }}</td>
          <td><enabledBtn :enabled="Company.Enabled"></enabledBtn></td>
          <td>
            <div class="flex gap-2">
              <router-link
                :to="{ name: 'CreateAdmin', params: { id: Company.TenantID } }"
                class="btn btn-success btn-xs"
              >
                <span class="material-symbols-outlined text-sm mr-1">
                  person_add
                </span>
                Add admin
              </router-link>
              <button class="btn btn-primary btn-xs">
                <span class="material-symbols-outlined text-sm mr-1">
                  edit
                </span>
                Edit
              </button>
              <button class="btn btn-error btn-xs">
                <span class="material-symbols-outlined text-sm mr-1">
                  delete
                </span>
                Delete
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <CompanyProfileModal
    :data="tempData"
    ref="CompanyModal"
  ></CompanyProfileModal>
</template>

<script>
// import {mapActions,mapState} from 'pinia'
import { mapActions, mapState } from 'pinia';
import { AccountStore } from '@/stores/AccountStore.js';
import enabledBtn from '@/components/Account/Enabled.vue';
import CompanyProfileModal from '@/components/Modal/CompanyProfileModal.vue';

export default {
  name: 'AccountList',
  data() {
    return {
      tempData: {},
    };
  },
  mounted() {
    this.ListCompanyProfile();
  },
  methods: {
    ...mapActions(AccountStore, ['ListCompanyProfile']),
    showModal(data) {
      this.tempData = data;
      this.$refs.CompanyModal.show();
    },
  },
  computed: {
    ...mapState(AccountStore, ['isLoading', 'CompanyProfile']),
  },
  watch: {},
  components: {
    enabledBtn,
    CompanyProfileModal,
  },
};
</script>

<style scoped></style>
