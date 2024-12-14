<template>
  <div class="">
    <img :src="icon" />
    <slot />
  </div>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    default: "",
  },
});
</script>
