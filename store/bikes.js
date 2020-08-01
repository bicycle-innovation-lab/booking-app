export const state = () => ({
  all: []
})

export const actions = {
  async fetchAllBikes ({ commit, state }) {
    if (Array.isArray(state.all) && state.all.length) {
      return
    }
    try {
      const bikes = await this.$axios.$get('bikes')
      commit('setBikes', bikes)
    } catch (error) {
      if (process.client) {
        this.$toast.error(error)
      }
      console.error(error)
    }
  },

  async fetchBike ({ commit, state }, id) {
    if (state.all.some(id => id)) {
      return state.all.find(id => id)
    }
    try {
      const bike = await this.$axios.$get(`bikes/${id}`)
      commit('setBike', bike)
    } catch (error) {
      if (process.client) {
        this.$toast.error(error)
      }
      console.log(error)
    }
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
