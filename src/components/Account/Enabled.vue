<template>
  <input
    type="checkbox"
    class="switch switch-primary"
    :true-value="1"
    :false-value="0"
    v-model="check"
  />
</template>

<script>
// import HomeView from '@/components/HomeView.vue'
// import {mapActions,mapState} from 'pinia'

export default {
  data() {
    return {
      check: 0,
    };
  },
  mounted() {},
  methods: {},
  computed: {},
  props: ['enabled'],
  watch: {
    enabled() {
      this.check = this.enabled;
    },
  },
  components: {},
};
</script>

<style scoped></style>
