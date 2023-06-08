<template>
  <!-- <button
    type="button"
    class="btn btn-sm px-3 fs-16 header-item vertical-menu-btn topnav-hamburger"
    id="topnav-hamburger-icon"
  >
    <span class="hamburger-icon">
      <span></span>
      <span></span>
      <span></span>
    </span>
  </button> -->

  <label for="sidebar-mobile-fixed" class="sm:hidden">
    <span class="hamburger-icon">
      <span></span>
      <span></span>
      <span></span>
    </span>
  </label>
</template>

<style lang="scss" scoped>
.hamburger-icon {
  width: 20px;
  height: 14px;
  position: relative;
  cursor: pointer;
  display: inline-block;

  span {
    background-color: #878a99;
    position: absolute;
    border-radius: 2px;
    -webkit-transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
    transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
    width: 100%;
    height: 2px;
    display: block;
    left: 0;

    &:nth-child(1) {
      top: 0;
      width: 80%;
    }
    &:nth-child(2) {
      top: 6px;
    }
    &:nth-child(3) {
      bottom: 0;
      width: 60%;
    }
  }
}
</style>
