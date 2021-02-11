import Route from '@ember/routing/route';
import { datas } from '../data/datas';
import Services from '../classes/services';

export default class Ex2Route extends Route {

  model() {
    console.log(new Services(datas));
    return new Services(datas);
  }

}

