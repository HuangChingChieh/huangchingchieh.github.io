<template>
  <b-container>
    <b-row>
      <b-col>
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

          <b-list-group class="w-100 shadow-sm">
            <b-list-group-item>
              <link-item
                href="https://huangchingchieh.github.io/blog/"
                :img="$icon(64)"
                img-alt="技術筆記"
              >
                使用Nuxt.js架的Github
                Pages部落格，紀錄前端技術筆記、使用Linux的心得，以及生活雜記。
              </link-item>
            </b-list-group-item>
          </b-list-group>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import linkItem from '~/components/link-item.vue'
export default {
  name: 'IndexPage',
  components: { linkItem },
  head() {
    const { $icon } = this
    return {
      link: [{ rel: 'icon', type: 'image/png', href: $icon(32) }],
    }
  },
}
</script>
