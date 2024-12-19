<template>
  <div v-for="(item, i) in company" :key="i">
    <h3 class="text-xl font-bold">{{ item.name }}</h3>

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
    works: [
      "評估企劃提出的開發或維運需求中，前端相關功能之可行性與時程。",
      "與視覺設計師、後端工程師或其他前端工程師協作開發或維運網站",
      "與其他前端工程師討論並規劃網站架構與選擇框架",
      "主要使用Nuxt / Vue開發並維運網站的前端部份",
      "依需求串接行銷工具（Google Tag Manager、Google Analytics 4 電子商務追蹤、FB Pixel、Bebit）",
      "依需求串接金流（Line Pay、AFTEE、銀行信用卡付款）",
      "依需求串接各種第三方API（Google Map、Facebook登入、Line Liff）",
    ],
  },
  {
    name: "鴻揚科技",
    title: "軟體工程師",
    periods: "2017/06 ~ 2017/08",
    works: ["開發企業客戶應用系統Java AP程式"],
  },
];
</script>
