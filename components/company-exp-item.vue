<template>
  <div class="flex">
    <dt class="pt-1">
      <Icon :name="icon" />
    </dt>
    <dd class="grow pl-2"><slot /></dd>
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
