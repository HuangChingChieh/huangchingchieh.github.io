<template>
  <div v-for="(item, i) in company" :key="i">
    <h3 class="text-2xl font-bold">{{ item.name }}</h3>

    <dl class="mt-2 grid grid-cols-1 gap-y-2">
      <CompanyExpItem icon="mdi:calendar">{{ item.periods }}</CompanyExpItem>
      <CompanyExpItem icon="mdi:briefcase-outline">{{
        item.title
      }}</CompanyExpItem>
      <CompanyExpItem
        v-for="(achievement, aI) in item.achievements"
        :key="`achievement_${aI}`"
        icon="mdi:prize"
        >{{ achievement }}</CompanyExpItem
      >
      <CompanyExpItem
        v-for="(work, wI) in item.works"
        :key="`work_${wI}`"
        icon="mdi:wrench"
        >{{ work }}</CompanyExpItem
      >
    </dl>
  </div>
</template>

<script setup>
const company = [
  {
    name: "合邦商網股份有限公司",
    title: "前端工程師",
    periods: "2018/01 ~ 在職中",
    achievements: [
      "從零開始與多個部門協作，並獨力開發多個對外網站及內部管理系統的前端部份並上線。",
      "將以 jQuery 為基底的網站漸進改版成 Nuxt 2，提昇開發效率及程式碼可讀性。",
      "將舊有靜態檔 css / js 最小化使載入時間提昇近 30%",
      "透過調整套件引入方式將 Bundle Size 降低近 50%。",
      "建立公司第一個使用 CI / CD 流程的前端專案",
    ],
    works: [
      "串接行銷工具（Google Analytics 4 電子商務追蹤、FB Pixel、Line Liff、Bebit……等等）",
      "串接金流（Line Pay、AFTEE、銀行信用卡付款……等等）",
    ],
  },
  {
    name: "鴻揚科技",
    title: "軟體工程師",
    periods: "2017/06 ~ 2017/08",
    works: [
      "開發企業客戶應用系統Java AP程式，視專案開發階段，滿足客戶專案需求並接受公司指派及指導。",
    ],
  },
];
</script>
