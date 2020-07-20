export const state = () => ({
  all: []
})

export const actions = {
  async fetchAllBikes ({ commit }) {
    const bikes = await this.$axios.$get('bikes')
    commit('setBikes', bikes)
  },

  async fetchBike ({ commit, state }, id) {
    if (state.all.some(id => id)) {
      return state.all.find(id => id)
    }
    const bike = await this.$axios.$get(`bikes/${id}`)
    commit('setBike', bike)
  }
}

export const mutations = {
  setBike (state, bike) {
    state.all.push(bike)
  },
  setBikes (state, bikes) {
    state.all = bikes
  }
}
