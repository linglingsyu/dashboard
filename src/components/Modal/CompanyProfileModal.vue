<template>
  <input class="modal-state" ref="myModal" id="myModal" type="checkbox" />
  <div class="modal w-screen">
    <label class="modal-overlay"></label>
    <div class="modal-content flex flex-col gap-5 min-w-[300px]">
      <h2 class="text-xl">{{ data.CompanyName }}</h2>
      <ul>
        <li>
          <div class="flex">
            <div>RootEmail：</div>
            <div>{{ data.RootEmail }}</div>
          </div>
        </li>
        <li>
          <div class="flex">
            <div>First Name：</div>
            <div>{{ data.firstName }}</div>
          </div>
        </li>
        <li>
          <div class="flex">
            <div>Last Name：</div>
            <div>{{ data.lastName }}</div>
          </div>
        </li>
      </ul>
      <div class="flex gap-3 mt-3">
        <label for="myModal" class="btn btn-block btn-primary">OK</label>
        <!-- <button class="btn btn-block">Cancel</button> -->
      </div>
    </div>
  </div>
</template>

<script>
// import HomeView from '@/components/HomeView.vue'
// import {mapActions,mapState} from 'pinia'

export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {
    show() {
      this.$refs.myModal.checked = true;
    },
    close() {
      this.$refs.myModal.checked = false;
    },
    submitHandler() {
      this.$emit('submit');
    },
  },
  computed: {},
  watch: {},
  components: {},
  props: ['data'],
};
</script>

<style scoped></style>
