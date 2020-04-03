/**
 * 商城Vuex-mutations
 */
export default {
    saveUserName(state, username) {
        state.username = username;
    },
    saveCartCount(context, count) {
        state.CartCount = count;
    }
}