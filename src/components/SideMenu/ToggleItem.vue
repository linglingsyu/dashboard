<template>
  <router-link :to="to" class="menu-item ml-6"><slot></slot></router-link>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  computed: {},
  watch: {},
  components: {},
  props: ['to'],
};
</script>

<style scoped></style>
