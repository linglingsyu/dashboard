<template>
  <div class="md:flex justify-between items-center sm:block flex-wrap mb-4">
    <div class="my-4">
      <input
        type="text"
        class="input input-solid"
        placeholder="Search Company"
      />
    </div>
    <div class="flex justify-end">
      <router-link :to="{ name: 'CreateAccount' }" class="btn btn-solid-success"
        >+ Add Company</router-link
      >
    </div>
  </div>
  <AccountList></AccountList>
</template>

<script>
import AccountList from '@/components/Account/List.vue';

export default {
  data() {
    return {};
  },
  watch: {},
  components: { AccountList },
};
</script>

<style scoped></style>
