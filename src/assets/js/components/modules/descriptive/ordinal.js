import doT from 'dot';
import Moda from '../common/moda';
import JumpButton from '../../jumpButton';
// import ordinalMarkup from './ordinal-markup.html';

class Ordinal {
  constructor(vet, name) {
    this.data = vet;
    this.name = name;
    this.ordinalTemplate = doT.template('<h1>{{=it.name}}<table border="1">{{~it.array :value:index}}<tr><td>{{=value.number}}</td><td>{{=value.cont}}</td></tr>{{~}}</table></h1>');
    this.ordinalResult = null;
    this.setup();
  }

  setup() {
    this.organizerData();
    this.createResult();
  }

  organizerData() {
    this.data = Moda.create(this.data);
  }

  createResult() {
    this.ordinalResult = this.ordinalTemplate({ name: this.name, array: this.data });
    const poa = document.getElementById('testDot');
    poa.innerHTML = this.ordinalResult;
    JumpButton.create('[data-button-descriptive]', '.test-dot');
  }
}

export default{
  create(vet, name) {
    return new Ordinal(vet, name);
  },
};

export const Class = Ordinal;
