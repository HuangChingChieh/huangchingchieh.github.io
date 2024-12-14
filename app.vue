<template>
  <main class="w-full h-full flex flex-col lg:flex-row">
    <aside class="lg:w-[400px] p-8 flex flex-col justify-center">
      <div class="grid grid-cols-1 gap-y-4 px-2">
        <picture>
          <img
            src="~/assets/img/sticker.jpg"
            class="w-[150px] lg:w-[200px] rounded-full mx-auto border-4 border-teal-500 shadow block"
          />
        </picture>

        <div class="py-4">
          <h1 class="text-3xl font-bold text-center">黃敬傑</h1>
        </div>

        <p class="text-justify max-w-[400px] mx-auto">
          具備 7 年前端開發經驗，主要使用 Nuxt
          從零開發網站與系統專案，並參與效能優化與 CI/CD
          流程建置，提升開發效率與產品穩定性。
        </p>

        <h2 class="text-lg font-bold">核心開發技術</h2>
        <SkillList />

        <h2 class="text-lg font-bold">其他工具</h2>
        <p>
          CI/CD、Docker 容器化開發（VSCode Dev Container）、略懂基礎
          Linux（平常生活使用 Fedora）
        </p>
      </div>
    </aside>

    <section class="grow overflow-auto bg-gray-100">
      <div class="px-2"></div>
    </section>
  </main>
</template>

<script setup>
useHead({
  htmlAttrs: {},
  bodyAttrs: {},
});
</script>
