import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class Ex2Controller extends Controller {
  @action
  toggleActive(service){
    service.active != !service.active;
    console.log(service.active);
  }
}
