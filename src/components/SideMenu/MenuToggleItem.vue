<template>
  <li>
    <input type="checkbox" id="menu-1" class="menu-toggle" :checked="checked" />
    <label class="menu-item justify-between" for="menu-1">
      <div class="flex gap-2">
        <slot name="icon"></slot>
        <span><slot name="title"></slot></span>
      </div>
      <span class="menu-icon">
        <IconArrow />
      </span>
    </label>
    <slot name="menu-item"></slot>
  </li>
</template>

<script>
import IconArrow from '@/components/icons/IconArrow.vue';
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  computed: {},
  watch: {},
  components: { IconArrow },
  props: {
    checked: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped></style>
