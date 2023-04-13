<template>
  <a :href="href" target="_blank" class="d-flex align-items-center text-body">
    <img
      :src="img"
      :alt="imgAlt"
      height="60"
      class="rounded border border-white mr-3"
    />

    <slot />
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
