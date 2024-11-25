<template>
  <BContainer>
    <BRow>
      <BCol>
        <div class="p-3">
          <img
            src="https://imagizer.imageshack.com/v2/320x240q70/922/bqqju1.jpg"
            alt="大頭貼"
            width="120"
            class="rounded-circle mx-auto d-block shadow-sm"
          />
          <h1 class="h3 my-3 text-center">HuangChingChieh</h1>
          <p>
            嗨，我是阿傑。一名浮沈於前端汪洋的小碼農，主要使用的框架為Vue及其生態系。平常的興趣是喝飲料、玩手遊（鎖鏈戰記、歧路旅人：大陸的霸者）。
          </p>

          <BListGroup class="w-100 shadow-sm">
            <BListGroupItem>
              <link-item
                href="https://huangchingchieh.github.io/blog/"
                :img="$icon(64)"
                img-alt="技術筆記"
              >
                使用Nuxt.js架的Github
                Pages部落格，紀錄前端技術筆記、使用Linux的心得，以及生活雜記。
              </link-item>
            </BListGroupItem>
          </BListGroup>
        </div>
      </BCol>
    </BRow>
  </BContainer>
</template>

<script>
import { BContainer, BRow, BCol, BListGroup, BListGroupItem } from 'bootstrap-vue'

import linkItem from '~/components/link-item.vue'
export default {
  name: 'IndexPage',
  components: { BContainer, BRow, BCol, BListGroup, BListGroupItem, linkItem },
  head() {
    const { $icon } = this
    return {
      link: [{ rel: 'icon', type: 'image/png', href: $icon(32) }],
    }
  },
}
</script>
