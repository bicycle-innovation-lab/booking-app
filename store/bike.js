import BikeService from '@/services/bike.service'

const bikeService = new BikeService()

export const state = () => ({
  bikes: []
})

export const mutations = {
  SET_BIKES (state, bikes) {
    state.bikes = bikes
  },
  ADD_BIKE_TO_STORE (state, bike) {
    state.bikes.push(bike)
  },
  UPDATE_BIKES (state, updatedBike) {
    state.bikes.map(obj => obj.id === updatedBike.id && Object.assign(obj, updatedBike))
  }
}

export const actions = {
  fetchAllBikes ({ commit }) {
    bikeService.fetch()
      .then((response) => {
        if (response.status === 200) {
          commit('SET_BIKES', response.data)
        }
      })
      .catch((error) => {
        throw error
      })
  },

  addBike ({ commit }, payload) {
    bikeService.create(payload)
      .then((response) => {
        if (response.status === 201) {
          commit('ADD_BIKE_TO_STORE', response.data.data)
        }
      })
  },

  updateBike ({ commit }, payload) {
    const { id, title, price, description, categories, images } = payload
    try {
      bikeService.update(id, { title, price, description, categories, images })
        .then((response) => {
          if (response.status === 200) {
            commit('UPDATE_BIKES', payload)
          }
        })
    } catch (error) {
      alert(error)
    }
  }
}

export const getters = () => ({
  allBikes: state => state.bikes
})
