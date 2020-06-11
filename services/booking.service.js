import CrudService from './crud.service'

export default class BookingService extends CrudService {
  constructor () {
    super('bookings')
  }
}
