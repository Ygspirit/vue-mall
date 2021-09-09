import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store/store'

const app = createApp(App)

app.use(router)
// 将 store 实例作为插件安装
app.use(store)


app.mount('#app')




