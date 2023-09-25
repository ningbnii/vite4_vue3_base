<template>
  <div>入口</div>
  <div>
    <van-button type="primary" size="small" :to="{ path: '/index/index' }">跳转/index/index</van-button>
  </div>

  <div>
    <van-button type="primary" size="small" :to="{ path: '/index/home' }">跳转/index/home</van-button>
  </div>
</template>
<script setup>
// import { getUserInfo } from '@/api/user'

// // 请求接口demo
// getUserInfo().then(function (res) {
//   console.log(res)
// })
</script>
<style lang="scss" scoped></style>
