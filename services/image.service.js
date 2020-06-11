import CrudService from './crud.service'

export default class ImageService extends CrudService {
  constructor () {
    super('images')
  }
}
