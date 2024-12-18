<template>
  <article class="p-8 lg:h-full lg:overflow-y-auto">
    <div class="max-w-[400px] mx-auto md:max-w-none flex flex-col gap-y-8">
      <h2 class="text-3xl font-bold">{{ title }}</h2>
      <slot />
    </div>
  </article>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: "",
  },
});
</script>
