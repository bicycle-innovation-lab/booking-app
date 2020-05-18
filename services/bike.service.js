import CrudService from './crud.service'

export default class BikeService extends CrudService {
  constructor () {
    super('bikes')
  }
}
