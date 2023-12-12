<template>
  <div>{{ slideContentRef }}</div>
</template>
<script setup>
import { useMeta } from 'vue-meta'
import { useRoute } from 'vue-router'
import { ref } from 'vue'
useMeta({
  title: 'swiper detail',
})

const $route = useRoute()

// 获取路由参数，slideContent
const { slideContent } = $route.query
// 将slideContent存入ref中
const slideContentRef = ref(slideContent)
</script>
<style lang=""></style>
