import CrudService from './crud.service'

export default class UserService extends CrudService {
  constructor () {
    super('users')
  }

  fetchCurrentUser (id) {
    return this.fetch(id)
  }
}
