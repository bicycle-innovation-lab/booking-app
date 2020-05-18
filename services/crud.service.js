import ApiService from './api.service'

export default class CrudService {
  constructor (resource) {
    this.api = new ApiService(resource)
  }

  /**
   * Create a record
   *
   * @param {Object} data
   * @returns {Promise}
   */
  create (data) {
    return this.api.post('', data)
  }

  /**
   * Fetch a specified record
   *
   * @param {number} id
   * @returns {Promise}
   */
  fetch (id) {
    return this.api.get(id)
  }

  /**
   * Update a specified record
   *
   * @param {nymber} id
   * @param {Object} data
   * @returns {Promise}
   */
  update (id, data) {
    return this.api.patch(id, data)
  }

  /**
   * Delete a specified record
   *
   * @param {number} id
   * @returns {Promise}
   */
  delete (id) {
    return this.api.delete(id)
  }
}
