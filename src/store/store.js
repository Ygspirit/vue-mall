import { createStore } from 'vuex'

import mutations from './mutations'
import actions from './actions'

// 创建一个新的 store 实例
const store = createStore({
    state() {
        return {
            count: 0,
            cartList: []
        }
    },
    mutations,
    actions
})

export default store