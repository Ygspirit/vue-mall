import { INCREMENT, ADD_COUNTER, ADD_TO_CART } from './mutations.type'

export default {

    [INCREMENT](state) {
        state.count++
    },
    [ADD_COUNTER](state, payload) {
        payload.count++
    },
    [ADD_TO_CART](state, payload) {
        state.cartGoodsList.push(payload)

    }
}