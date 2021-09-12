import { createStore } from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

// 创建一个新的 store 实例
const store = createStore({
    state() {
        return {
            count: 0,
            cartGoodsList: []
        }
    },
    mutations,
    actions,
    getters
})

export default store