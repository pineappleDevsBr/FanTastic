import doT from 'dot';
import Moda from '../common/moda';
// import nominalMarkup from './nominal-markup.html';

class Nominal {
  constructor(vet, name) {
    this.data = vet;
    this.name = name;
    this.nominalTemplate = doT.template('<h1>{{=it.name}}<table border="1">{{~it.array :value:index}}<tr><td>{{=value.number}}</td><td>{{=value.cont}}</td></tr>{{~}}</table></h1>');
    this.nominalResult = '';
    this.setup();
    return this.nominalResult;
  }

  setup() {
    this.organizerData();
    this.createResult();
  }

  organizerData() {
    this.data = Moda.create(this.data);
  }

  createResult() {
    this.nominalResult = this.nominalTemplate({ name: this.name, array: this.data });
  }
}

export default{
  create(vet, name) {
    return new Nominal(vet, name);
  },
};

export const Class = Nominal;
