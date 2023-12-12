<template>
  <swiper :modules="[Virtual]" :direction="'vertical'" virtual>
    <swiper-slide v-for="(slideContent, index) in slides" :key="index" :virtualIndex="index">
      <van-button type="primary" size="small" @click="goToDetail(slideContent)">{{ slideContent }}</van-button>
    </swiper-slide>
  </swiper>
</template>
<script>
import { Virtual } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { useRouter } from 'vue-router'

import 'swiper/css'
import 'swiper/css/virtual'

export default {
  components: {
    Swiper,
    SwiperSlide,
  },

  setup() {
    const router = useRouter()

    // Create array with 1000 slides
    const slides = Array.from({ length: 1000 }).map((el, index) => `Slide ${index + 1}`)

    const goToDetail = (slideContent) => {
      // 跳转到index/detail页面,并传递参数
      router.push({
        path: '/index/detail',
        query: {
          slideContent,
        },
      })
    }
    return {
      slides,
      Virtual,
      goToDetail,
    }
  },
}
</script>

<style lang="scss">
.swiper {
  width: 100%;
  height: 100vh;
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: #fff;
    background-color: #000;
  }
}
</style>
