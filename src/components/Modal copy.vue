<template>
  <input class="modal-state" :id="id" type="checkbox" />

  <div class="modal w-screen">
    <label class="modal-overlay"></label>
    <div class="modal-content flex flex-col gap-5">
      <label
        :for="id"
        class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >✕</label
      >
      <h2 v-if="title" class="text-xl">{{ title }}</h2>
      <slot name="content"></slot>
      <div class="flex gap-3">
        <button class="btn btn-primary btn-block" @click="submitHandler">
          submit
        </button>
        <label :for="id" class="btn btn-block">Cancel</label>
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
    submitHandler() {
      this.$emit('submit');
    },
  },
  computed: {},
  watch: {},
  components: {},
  props: ['id', 'title'],
};
</script>

<style scoped></style>
