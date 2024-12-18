<template>
  <main class="w-full md:h-full flex flex-col md:flex-row text-slate-900">
    <aside
      class="md:w-[300px] md:min-w-[300px] p-8 md:overflow-y-auto flex items-center"
    >
      <div
        class="grid grid-cols-1 gap-y-4 w-full max-w-[400px] mx-auto my-auto"
      >
        <picture>
          <img
            src="~/assets/img/sticker.jpg"
            class="w-[200px] rounded-full mx-auto border-4 border-teal-500 shadow block aspect-square"
            alt="大頭貼"
          />
        </picture>

        <h1 class="text-3xl font-bold text-center">黃敬傑</h1>
        <p class="text-justify">
          具備 7 年前端開發經驗，主要使用 Nuxt 從零開發網站與系統專案。
        </p>

        <nav>
          <ul class="flex flex-wrap justify-center">
            <li v-for="link in links" :key="link.icon" class="mx-4">
              <a :href="link.href" target="_blank"
                ><Icon
                  :name="link.icon"
                  class="block text-2xl hover:text-teal-500"
              /></a>
            </li>
          </ul>
        </nav>

        <h2 class="text-xl font-bold">核心開發技術</h2>
        <SkillList />

        <!-- <h2 class="text-lg font-bold">其他工具</h2>
        <p>
          CI/CD、Docker 容器化開發（VSCode Dev Container）、略懂基礎
          Linux（平常生活使用 Fedora）
        </p> -->
      </div>
    </aside>

    <section
      class="grow overflow-hidden bg-gray-200 md:h-full grid lg:grid-cols-2 md:overflow-y-auto"
    >
      <ExpContainer title="工作經歷">
        <CompanyExp />
      </ExpContainer>
      <ExpContainer
        title="專案經驗"
        class="border-t lg:border-0 border-t-slate-400"
      >
        <ProjectExp />
      </ExpContainer>
    </section>
  </main>
</template>

<script setup>
const links = [
  { icon: "mdi:email-outline", href: "mailto:chaoschaoshuang@gmail.com" },
  { icon: "mdi:github", href: "https://github.com/huangchingchieh" },
  { icon: "mdi:web", href: "https://huangchingchieh.github.io/blog/" },
];

useHead({
  htmlAttrs: {},
  bodyAttrs: {},
});
</script>

<style lang="scss">
* {
  font-family: "Noto Sans TC", sans-serif;
  color: inherit;
}
</style>
