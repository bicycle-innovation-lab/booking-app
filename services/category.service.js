import CrudService from './crud.service'

export default class CategoryService extends CrudService {
  constructor () {
    super('categories')
  }
}
