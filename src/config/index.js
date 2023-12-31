const ENV = process.env.NODE_ENV
const ENV_CONFIG = {
  // 开发环境
  development: {
    baseUrl: 'http://localhost:3000',
  },
  //  生产环境
  production: {
    baseUrl: 'http://api.test.com',
  },
}

export default {
  ...ENV_CONFIG[ENV],
}
