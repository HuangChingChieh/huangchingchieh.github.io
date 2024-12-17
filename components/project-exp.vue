<template>
  <div v-for="(item, i) in projects" :key="i">
    <h3 class="text-2xl font-bold">
      <component
        :is="item.href ? `a` : `span`"
        :href="item.href || false"
        :target="item.href ? `_blank` : ``"
        :class="item.href ? `hover:text-teal-500 underline` : ``"
        >{{ item.name }}</component
      >
    </h3>
    <dl class="mt-2 grid grid-cols-1 gap-y-2">
      <CompanyExpItem icon="mdi:flag-variant">{{
        item.description
      }}</CompanyExpItem>
      <CompanyExpItem
        v-for="(achievement, aI) in item.achievements"
        :key="`achievement_${aI}`"
        icon="mdi:prize"
        >{{ achievement }}</CompanyExpItem
      >
    </dl>
  </div>
</template>

<script setup>
const projects = [
  {
    name: "捷元 B2B 採購專區",
    href: "https://www.genb2b.com/",
    description:
      "將舊的基於ASP.NET的網站改版為前後端分離的新網站，並將其RWD化。",
    achievements: [
      "於公司首次導入 PM2，在網站發生問題時自動重啟，降低 MIS 管理伺服器負擔。",
      "於公司首次建置 CI/CD 流程，大幅降低過往須人工更新網站的繁瑣流程。",
      "使用 Nuxt 2 的 analyze 功能並調整框架引入方式，，分析並降低最終的 bundle size 約 50%。",
      "與後端協作，實做 OTP 登入流程，降低 PKI 憑證登入難維運的問題。",
    ],
  },
  {
    name: "內部管理及表單簽核系統",
    href: "",
    description: "公司內部管理人員、部門及內部表單簽核的系統",
    achievements: [
      "規劃並切分表單元件，讓新進同事能快速進入狀況開發新表單。",
      "將系統當頁面簡單引入 Vue 的開發方式，在不影響舊頁面功能的前提下漸次改版至 Nuxt 2，增加開發效率、元件化程度以及降低協作難度。",
    ],
  },
  {
    name: "HOHO 好服務、好生活",
    href: "https://www.hohoho.com.tw/",
    description: "面向一般消費者的線上居家服務平台",
    achievements: [
      "與後端協作，在兩週內便將複雜的表單式服務選擇器開發並上線，大幅增加服務商品規格的設定多元性。",
      "與後端團隊配合使用 ASP.NET 技術解決單使用 Vue 的 SSR 問題",
      "串接 Line Pay、AFTEE 增加使用者付款方式",
      "配合 UI/UX 漸進改版並同時維持原有樣式",
      "串接 UA 電子商務追蹤並於後來轉移至 GA4",
    ],
  },
  {
    name: "個人部落格",
    href: "https://huangchingchieh.github.io/blog/",
    description:
      "紀錄前端 Vue.js 開發心得、使用 Linux 發布版本 Fedora 的心得以及生活大小事的部落格",
    achievements: [
      "以預渲染方式，達到可部署於任意靜態伺服器的效果。",
      "從Nuxt 2漸進改版至Nuxt 3，改版成功並上線。",
    ],
  },
];
</script>
