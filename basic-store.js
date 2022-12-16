// State
export const state = () => ({
    customer: []
})
// Actions
export const actions = {
    async customers({ commit }, params) {
        try {
            this.$axios.get('https://jsonplaceholder.typicode.com/users')
                .then(data => {
                    commit('setCustomer', data.data)
                })
        } catch (error) {
        }
    },
}
// Mutations
export const mutations = {
    setCustomer(state, data) {
        state.customer = data
    }
}
