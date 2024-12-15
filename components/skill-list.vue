<template>
  <dl class="grid gap-y-2">
    <div v-for="skill in skills" :key="skill.icon" class="flex flex-row">
      <dt class="pr-2">
        <Icon
          :name="`skill-icons:${skill.icon}`"
          class="min-w-6 min-h-6 h-6 w-6 block rounded-full"
        />
      </dt>
      <dd class="grow">{{ skill.text }}</dd>
    </div>
  </dl>
</template>

<script setup>
const skills = [
  {
    icon: "nuxtjs-dark",
    text: "Nuxt 2 / 3",
  },
  {
    icon: "javascript",
    text: "Javascript",
  },
  {
    icon: "sass",
    text: "SCSS / CSS",
  },
  {
    icon: "html",
    text: "HTML5",
  },
  {
    icon: "git",
    text: "Git",
  },
];
</script>
