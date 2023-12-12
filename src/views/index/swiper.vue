<template>
  <swiper-container
    :slides-per-view="3"
    :space-between="spaceBetween"
    :centered-slides="true"
    :pagination="{
      hideOnClick: true,
    }"
    :breakpoints="{
      768: {
        slidesPerView: 3,
      },
    }"
    @swiperprogress="onProgress"
    @swiperslidechange="onSlideChange"
  >
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
  </swiper-container>
</template>

<script setup>
const spaceBetween = 10
const onProgress = (e) => {
  const [swiper, progress] = e.detail
  console.log(progress)
}

const onSlideChange = (e) => {
  console.log('slide changed')
}
</script>

<style lang="scss">
swiper-container {
  width: 100%;
  height: 100vh;
  swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: #fff;
    background-color: #000;
  }
}
</style>
