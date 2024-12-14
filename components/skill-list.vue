<template>
  <dl class="grid gap-y-2">
    <div v-for="skill in skills" :key="skill.icon" class="flex flex-row">
      <dt class="pr-2">
        <img
          :src="images[skill.icon]"
          class="min-w-6 min-h-6 h-6 w-6 block object-contain"
        />
      </dt>
      <dd class="grow">{{ skill.text }}</dd>
    </div>
  </dl>
</template>

<script setup>
const glob = import.meta.glob("@/assets/img/skills/*.svg", { eager: true });

const images = Object.fromEntries(
  Object.entries(glob).map(([key, value]) => [
    key.split("/").pop().split(".").shift(),
    value.default,
  ]),
);

const skills = [
  {
    icon: "nuxt",
    text: "Nuxt 2 / 3",
  },
  {
    icon: "js",
    text: "Javascript",
  },
  {
    icon: "sass",
    text: "SCSS / CSS",
  },
  {
    icon: "html5",
    text: "HTML5",
  },
  {
    icon: "git",
    text: "Git",
  },
];
</script>
