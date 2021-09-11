import { createStore } from 'vuex'

// 创建一个新的 store 实例
const store = createStore({
    state() {
        return {
            count: 0,
            cartList: []
        }
    },
    mutations: {
        increment(state) {
            state.count++
        },
        addCart(state, payload) {
            // 查找之前数组中是否有该商品
            let oldProduct = state.cartList.find(item => item.iid === payload.idd)

            // 判断oldProduct
            if (oldProduct) {
                oldProduct.count += 1
            } else {
                payload.count = 1
                state.cartList.push(payload)
            }

        }
    }
})

export default store