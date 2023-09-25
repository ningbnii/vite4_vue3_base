# Vue 3 + Vite4

## 安装测试

```
// 进入目录
yarn
// 启动server
yarn dev
// 打包
yarn build
```

## 更新记录

- 自动化路由
- 封装 axios，支持 JWT
- 封装 localStorage
- 组件库使用 vant
- title 动态修改

```
<script setup>
import { useMeta } from "vue-meta";
useMeta({
  title: "用户中心",
});
</script>
```

- 使用 sass
- normalize.css
