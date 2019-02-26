/* eslint-disable */
import doT from 'dot';
import Order from '../common/order';
import Moda from '../common/moda';

class Continue {
  constructor(vet, name) {
    this.vet = vet;
    this.dataModa = [];
    this.At = null;
    this.k = [];
    this.result = null;
    this.intervalNumber = null;
    this.name = name;
    this.simpleFrequencyPercentage = [];
    this.accumulatedFrequncy = [];
    this.accumulatedFrequncyPercentage = [];
    this.dynamicTable = [];
    this.continueTemplate = doT.template('<table style="text-align:center" border="1"><tr><th>Classes</th><th>{{=it.name}}</th><th>Frequenca Simples</th><th>Frequenca Relativa</th><th>Frequenca Acumulada</th><th>Frequenca Acumulada %</th></tr>{{~it.dynamicTable :value:index}}<tr><td>{{=value.class}}</td><td>{{=value.valorInicial}} - {{=value.valorFinal}}</td><td>{{=value.cont}}</td><td>{{=value.fr}}</td><td>{{=value.fa}}</td><td>{{=value.fac}}</td></tr>{{~}}</table>');
    this.continueResult = '';
    this.vetInterval = [];
    this.setup();
  }

  setup() {
    this.oraganizedArray();
    this.amplitude();
    this.classes();
    this.valueInterval();
    this.moda();
    this.interval();
    this.generateFrequency();
    this.createTable();
  }

  oraganizedArray() {
    this.vet = Order.create(this.vet, 'crescent').getResult();
  }

  amplitude() {
    this.At = this.vet[this.vet.length - 1] - this.vet[0];
  }

  classes() {
    this.K = [parseInt(Math.sqrt(this.vet.length))-1,parseInt(Math.sqrt(this.vet.length)),parseInt(Math.sqrt(this.vet.length))+1]; // eslint-disable-line
  }

  valueInterval() {
    let D = this.At + 1;
    let i = 0;
    while (i === 0) {
      for (let j = 0; j < 3; j += 1) {
        if (D % this.K[j] === 0) {
          this.intervalNumber = D / this.K[j];
          i += 1;
          break;
        }
      }
      D += 1;
    }
  }

  moda() {
    let x = this.vet[0];
    let y = null;
    while (x <= this.vet[this.vet.length - 1]) {
      y = x + this.intervalNumber;
      for (let i = 0; i < this.vet.length; i += 1) {
        if ((this.vet[i] >= x) && (this.vet[i] < y)) {
          // Aqui vai entrar a moda, o objeto
          this.dataModa = Moda.create(this.vet).getResult();
        }
      }
      x += this.intervalNumber;
    }
  }

//15;15;16;17;17;18;18;18;19;19;19;19;20;21;21;23;23;24;24;24;25;29;34

  interval(){
    console.log(this.dataModa);
    let valorInicial= this.dataModa[0].number;
    let cont = this.dataModa[0].cont;
    let valorFinal= valorInicial + this.intervalNumber;

    for(let i = 1; i < this.dataModa.length; i += 1) {
      if (this.dataModa[i].number >= valorFinal){
        const obj = new Object;
        obj.valorInicial = valorInicial;
        obj.valorFinal = valorFinal;
        obj.cont = cont;
        this.vetInterval.push(obj);

        
        valorInicial = valorFinal;
        console.log('valorInicial: ' + valorInicial);
        valorFinal= valorInicial + this.intervalNumber;
        console.log('valorFinal: '+valorFinal);
        cont = this.dataModa[i].cont;
        console.log('i: ' + i);
      }

      else if (this.dataModa[i].number < valorFinal) {
        cont += this.dataModa[i].cont;
      }
    }
    const obj = new Object;
    obj.valorInicial = valorInicial;
    obj.valorFinal = valorFinal;
    obj.cont = cont;
    this.vetInterval.push(obj);

    console.log(this.vetInterval);
  }

  generateFrequency() {
    let cont = 0;

    for (let i = 0; i < this.vetInterval.length; i += 1) {
      this.simpleFrequencyPercentage[i] = ((this.vetInterval[i].cont / this.vet.length) * 100).toFixed(2); // eslint-disable-line
      this.accumulatedFrequncy[i] = this.vetInterval[i].cont + cont;
      this.accumulatedFrequncyPercentage[i] = ((this.accumulatedFrequncy[i] / this.vet.length) * 100).toFixed(2); // eslint-disable-line
      cont = this.vetInterval[i].cont + cont;
    }
  }

  createTable() {
    for (let i = 0; i < this.vetInterval.length; i += 1) {
      const obj = {
        class: i + 1,
        valorInicial: this.vetInterval[i].valorInicial,
        valorFinal: this.vetInterval[i].valorFinal,
        cont: this.vetInterval[i].cont,
        fr: this.simpleFrequencyPercentage[i],
        fa: this.accumulatedFrequncy[i],
        fac: this.accumulatedFrequncyPercentage[i],
      };

      this.dynamicTable.push(obj);
    }

    this.continueResult = this.continueTemplate({ name: this.name, dynamicTable: this.dynamicTable }); // eslint-disable-line
  }
  getResult() {
    return this.continueResult;
  }
}


export default{
  create(vet, name) {
    return new Continue(vet, name);
  },
};

export const Class = Continue;
