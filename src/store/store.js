import { createStore } from 'vuex'

// 创建一个新的 store 实例
const store = createStore({
    state() {
        return {
            count: 0,
            detailImg:0
        }
    },
    mutations: {
        increment(state) {
            state.count++
        },
        increment1(state){
            state.detailImg++
        }
    }
})

export default store