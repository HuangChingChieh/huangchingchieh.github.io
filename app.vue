<template>
  <main class="w-full md:h-full flex flex-col md:flex-row text-slate-900">
    <aside class="md:w-[300px] lg:w-[400px] p-8 flex flex-col justify-center">
      <div class="grid grid-cols-1 gap-y-4 w-full max-w-[400px] mx-auto">
        <picture>
          <img
            src="~/assets/img/sticker.jpg"
            class="w-[150px] lg:w-[200px] rounded-full mx-auto border-4 border-teal-500 shadow block"
          />
        </picture>

        <div class="py-4">
          <h1 class="text-3xl font-bold text-center">黃敬傑</h1>
          <nav class="mt-3">
            <ul class="flex flex-wrap justify-center">
              <li class="mx-2">
                <a href="mailto:chaoschaoshuang@gmail.com"
                  ><Icon
                    name="mdi:email-outline"
                    class="block text-2xl hover:text-teal-500"
                /></a>
              </li>
              <li class="mx-2">
                <a href="https://github.com/huangchingchieh"
                  ><Icon
                    name="mdi:github"
                    class="block text-2xl hover:text-teal-500"
                /></a>
              </li>
              <li class="mx-2">
                <a href="https://huangchingchieh.github.io/blog/"
                  ><Icon
                    name="mdi:web"
                    class="block text-2xl hover:text-teal-500"
                /></a>
              </li>
            </ul>
          </nav>
        </div>

        <p class="text-justify">
          具備 7 年前端開發經驗，主要使用 Nuxt
          從零開發網站與系統專案，並參與效能優化與 CI/CD
          流程建置，提升開發效率與產品穩定性。
        </p>

        <h2 class="text-lg font-bold">核心開發技術</h2>
        <SkillList />

        <!-- <h2 class="text-lg font-bold">其他工具</h2>
        <p>
          CI/CD、Docker 容器化開發（VSCode Dev Container）、略懂基礎
          Linux（平常生活使用 Fedora）
        </p> -->
      </div>
    </aside>

    <section
      class="grow overflow-hidden bg-gray-100 md:h-full grid lg:grid-cols-2"
    >
      <article
        class="py-8 md:px-8 flex flex-col gap-y-8 max-w-[400px] md:max-w-none mx-auto"
      >
        <h2 class="text-3xl font-bold">工作經歷</h2>
        <CompanyExp />
      </article>
      <article class=""></article>
    </section>
  </main>
</template>

<script setup>
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
