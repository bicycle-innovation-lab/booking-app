export const state = () => ({
  position: 0
})

export const actions = {
  getPosition ({ state }) {
    return state.position
  }
}

export const mutations = {
  setPosition (state, position) {
    state.position = position
  }
}
