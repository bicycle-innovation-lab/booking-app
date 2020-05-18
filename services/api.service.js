import axios from 'axios'

export default class ApiService {
  constructor (resource = '/') {
    this.address = `http://localhost:1337/${resource}/`
  }

  /**
   * Send a get request
   * @param {String} uri
   * @param {Object} query
   * @returns {Promise}
   */
  get (uri, query = {}) {
    return this._send(uri, 'get', query)
  }

  /**
   * Send a post request
   * @param {String} uri
   * @param {Object} data
   */
  post (uri, data = {}) {
    return this._send(uri, 'post', data)
  }

  /**
   * Send a patch request
   * @param {String} uri
   * @param {Object} data
   */
  patch (uri, data) {
    return this._send(uri, 'patch', data)
  }

  /**
   * Send a delete request
   * @param {String} uri
   * @param {Object} query
   */
  delete (uri, query = {}) {
    return this._send(uri, 'delete', query)
  }

  setHeaders (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
  }

  _send (uri = '', method, data) {
    let params = {}

    if (method === 'get' || method === 'delete') {
      params = data
      data = {}
    }

    return axios({
      url: this.address + uri,
      method,
      data,
      params
    })
      .catch((error) => {
        // eslint-disable-next-line
        console.error('API.SERVICE.JS', error)
        throw error
      })
  }
}
