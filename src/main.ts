import 'default-passive-events'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

import './router/permission'

const app = createApp(App)
app.config.globalProperties.$message = 'hi'
console.log(app)
app.use(Antd)
app.use(store)
app.use(router)
app.mount('#app')
