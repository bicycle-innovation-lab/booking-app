import CrudService from './crud.service'

export default class ProjectService extends CrudService {
  constructor () {
    super('projects')
  }
}
