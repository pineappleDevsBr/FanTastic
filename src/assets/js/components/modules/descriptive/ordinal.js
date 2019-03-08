import doT from 'dot';
import Chart from 'chart.js';
import Order from '../common/order';
import Moda from '../common/moda';
import Median from '../common/median';

class Ordinal {
  constructor(vet, name, order) {
    this.data = vet;
    this.name = name;
    this.order = order;
    this.dataModa = [];
    this.simpleFrequencyPercentage = [];
    this.accumulatedFrequncy = [];
    this.accumulatedFrequncyPercentage = [];
    this.dynamicTable = [];
    this.canvasHolder = document.querySelector('[data-canvas]');
    this.moda = null;
    this.mediana = null;
    this.ordinalTemplate = doT.template('<table style="text-align:center" border="1"> <tr><th>Classe</th> <th>{{=it.name}}</th> <th>Frequenca Simples</th> <th>Frequenca Relativa</th> <th>Frequenca Acumulada</th> <th>Frequenca Acumulada %</th> </tr>{{~it.dynamicTable :value:index}}<tr><td>{{=value.index}}</td> <td>{{=value.number}}</td><td>{{=value.cont}}</td><td>{{=value.fr}}</td><td>{{=value.fa}}</td><td>{{=value.fac}}</td></tr>{{~}}</table><p>Mediana: {{=it.mediana}}</p><p>Moda: {{=it.moda}}</p>');
    this.ordinalResult = null;
    this.setup();
  }

  setup() {
    this.organizerData();
    this.generateFrequency();
    this.createModaMediana();
    this.createTable();
    this.createChart();
  }

  organizerData() {
    this.data = Order.create(this.data, 'crescent', this.order).getResult();
    this.dataModa = Moda.create(this.data).getResult();
  }

  generateFrequency() {
    let cont = 0;

    for (let i = 0; i < this.dataModa.length; i += 1) {
      this.simpleFrequencyPercentage[i] = ((this.dataModa[i].cont / this.data.length) * 100).toFixed(2); // eslint-disable-line
      this.accumulatedFrequncy[i] = this.dataModa[i].cont + cont;
      this.accumulatedFrequncyPercentage[i] = ((this.accumulatedFrequncy[i] / this.data.length) * 100).toFixed(2); // eslint-disable-line
      cont = this.dataModa[i].cont + cont;
    }
  }

  createModaMediana() {
    // Mediana
    this.mediana = Median.create(this.data).getResult();

    // Moda
    this.moda = Moda.create(this.data).getModa();
  }

  createTable() {
    for (let i = 0; i < this.dataModa.length; i += 1) {
      const obj = {
        index: i + 1,
        number: this.dataModa[i].number,
        cont: this.dataModa[i].cont,
        fr: this.simpleFrequencyPercentage[i],
        fa: this.accumulatedFrequncy[i],
        fac: this.accumulatedFrequncyPercentage[i],
      };

      this.dynamicTable.push(obj);
    }

    this.ordinalResult = this.ordinalTemplate({ name: this.name, mediana: this.mediana, moda: this.moda, dynamicTable: this.dynamicTable }); // eslint-disable-line
  }

  createChart() {
    const labelsName = [];
    const canvas = document.createElement('canvas');
    this.canvasHolder.innerHTML = '';

    this.dataModa.forEach((obj, index) => { labelsName[index] = obj.number; });

    const nominalChart = new Chart(canvas, { // eslint-disable-line
      type: 'pie',
      data: {
        labels: labelsName,
        datasets: [{
          data: this.simpleFrequencyPercentage,
        }],
      },
    });

    this.canvasHolder.appendChild(canvas);
  }

  getResult() {
    return this.ordinalResult;
  }
}

export default{
  create(vet, name, order) {
    return new Ordinal(vet, name, order);
  },
};

export const Class = Ordinal;
