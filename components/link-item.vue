<template>
  <a
    :href="href"
    target="_blank"
    class="d-flex align-items-center text-body link-item"
  >
    <img
      :src="img"
      :alt="imgAlt"
      height="60"
      class="rounded-circle border border-white shadow-sm mr-3"
    />

    <small><slot /></small>
  </a>
</template>
<script>
export default {
  props: {
    href: {
      type: String,
      default: '',
    },
    img: {
      type: String,
      default: '',
    },
    imgAlt: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss">
.link-item img {
  border-width: 3px !important;
}
</style>
