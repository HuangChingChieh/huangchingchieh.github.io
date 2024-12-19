<template>
  <div v-for="(item, i) in projects" :key="i">
    <h3 class="text-xl font-bold">
      <component
        :is="item.href ? `a` : `span`"
        :href="item.href || false"
        :target="item.href ? `_blank` : ``"
        :class="item.href ? `hover:text-teal-500 underline` : ``"
        >{{ item.name }}</component
      >
    </h3>
    <dl class="mt-2 grid grid-cols-1 gap-y-2">
      <CompanyExpItem icon="mdi:flag-variant" title="專案目標">{{
        item.description
      }}</CompanyExpItem>
      <CompanyExpItem
        v-for="(achievement, aI) in item.achievements"
        :key="`achievement_${aI}`"
        icon="mdi:prize"
        title="特殊貢獻"
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
      "將基於ASP.NET的網站改版為前後端分離的網站（前端部份使用Nuxt 2）",
    achievements: [
      "於公司首次導入 PM2管理前端網站，在網站發生問題時自動重啟，降低 MIS 管理伺服器負擔。",
      "於公司建立首個基於Gitlab CI/CD 流程的前端專案，大幅降低過往須人工更新網站的繁瑣流程。",
      "使用 Nuxt 2 的 analyze 功能並調整框架引入方式，分析並降低 bundle size 約 50%。",
      "與後端協同實做 OTP 登入流程，降低原網站 PKI 憑證登入難維運的問題。",
      "將剛開始上線時未RWD化的網站逐頁修改為RWD頁面並分次上線",
    ],
  },
  {
    name: "HOHO 好服務、好生活",
    href: "https://www.hohoho.com.tw/",
    description: "面向一般消費者的線上居家服務平台",
    achievements: [
      "與後端協作，在兩週內便將複雜的表單式服務選擇器開發並上線，大幅增加服務商品規格的設定多元性。",
      "與後端配合使用 ASP.NET 技術解決單使用 Vue 的 SSR 問題",
      "與後端討論將資料查詢太複雜的API，切割成數支不同API，增加網頁回應速度將近75%。",
      "配合 UI/UX 在維持原有樣式的前提下漸進改版至新樣式",
      "撰寫EDM串接JS，讓設計部門串接簡單的行銷活動時可不再經過前端開發，加速上線流程。",
    ],
  },
  {
    name: "個人部落格",
    href: "https://huangchingchieh.github.io/blog/",
    description:
      "紀錄前端開發心得、使用 Linux 發布版本 Fedora 的心得以及生活大小事的部落格",
    achievements: [
      "以Nuxt 3的預渲染方式，達到可部署於任意靜態伺服器的效果。",
      "以Nuxt Content v2管理文章markdown檔案，讓部落格無須後端及DB便能運作。",
      "從Nuxt 2漸進改版至Nuxt 3，改版成功並上線。",
    ],
  },
  {
    name: "捷元股份有限公司官方網站",
    href: "https://www.genuine.com.tw/",
    description: "將原官網改版為新樣式，並RWD化。",
    achievements: [
      "在前端原有基於jQuery的架構加入Vue 2，減少改版開發負擔。",
      "串接Google Map API，視覺化服務據點資料。",
      "透過修改SCSS編譯Bootstrap，取代舊有硬蓋樣式造成的風格不一致問題。",
    ],
  },
  {
    name: "內部管理及表單簽核系統",
    href: "",
    description:
      "公司內部管理人員、部門、合約、資產、會議、客戶……的系統，並新增新的表單簽核功能",
    achievements: [
      "最初以 jQuery 開發時便規劃並切分表單元件，讓新進同事能快速進入狀況開發新表單。",
      "引入 Vue 做微改版，增加開發效率。",
      "漸次改版至 Nuxt 2，提昇程式碼元件化程度以及降低協作難度。",
    ],
  },
];
</script>
