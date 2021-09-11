import { ADD_COUNTER, ADD_TO_CART } from './mutations.type'

export default {
    addCart({ state, commit }, payload) {
        // 查找之前数组中是否有该商品
        let oldProduct = state.cartList.find(item => item.iid === payload.idd)

        // 判断oldProduct
        if (oldProduct) {
            // oldProduct.count += 1
            commit(ADD_COUNTER, oldProduct)
        } else {
            payload.count = 1
            // state.cartList.push(payload)
            commit(ADD_TO_CART, payload)
        }

    }
}