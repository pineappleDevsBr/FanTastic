import doT from 'dot';
import Moda from '../common/moda';
// import nominalMarkup from './nominal-markup.html';

class Nominal {
  constructor(vet, name) {
    this.data = vet;
    this.dataModa = [];
    this.name = name;
    this.simpleFrequencyPercentage = [];
    this.accumulatedFrequncy = [];
    this.accumulatedFrequncyPercentage = [];
    this.dynamicTable = [];
    this.nominalTemplate = doT.template('<table style="text-align:center" border="1"> <tr> <th>{{=it.name}}</th> <th>Frequenca Simples</th> <th>Frequenca Relativa</th> <th>Frequenca Acumulada</th> <th>Frequenca Acumulada %</th> </tr>{{~it.dynamicTable :value:index}}<tr> <td>{{=value.number}}</td><td>{{=value.cont}}</td><td>{{=value.fr}}</td><td>{{=value.fa}}</td><td>{{=value.fac}}</td></tr>{{~}}</table>');
    this.nominalResult = '';
    this.setup();
  }

  setup() {
    this.organizerData();
    this.generateFrequency();
    this.createResult();
  }

  organizerData() {
    this.dataModa = Moda.create(this.data).getResult();
  }

  generateFrequency() {
    let cont = 0;

    for (let i = 0; i < this.dataModa.length; i += 1) {
      this.simpleFrequencyPercentage[i] = ((this.dataModa[i].cont / this.data.length) * 100);
      this.accumulatedFrequncy[i] = this.dataModa[i].cont + cont;
      this.accumulatedFrequncyPercentage[i] = (this.accumulatedFrequncy[i] / this.data.length) * 100; // eslint-disable-line
      cont = this.dataModa[i].cont + cont;
    }
  }

  createResult() {
    for (let i = 0; i < this.dataModa.length; i += 1) {
      const obj = {
        number: this.dataModa[i].number,
        cont: this.dataModa[i].cont,
        fr: this.simpleFrequencyPercentage[i],
        fa: this.accumulatedFrequncy[i],
        fac: this.accumulatedFrequncyPercentage[i],
      };

      this.dynamicTable.push(obj);
    }

    this.nominalResult = this.nominalTemplate({ name: this.name, dynamicTable: this.dynamicTable });
  }

  getResult() {
    return this.nominalResult;
  }
}

export default{
  create(vet, name) {
    return new Nominal(vet, name);
  },
};

export const Class = Nominal;
