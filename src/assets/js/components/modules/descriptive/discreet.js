import doT from 'dot';
import Chart from 'chart.js';
import Moda from '../common/moda';
import Median from '../common/median';
import Order from '../common/order';

class Discreet {
  constructor(vet, name) {
    this.data = vet;
    this.dataModa = [];
    this.name = name;
    this.simpleFrequencyPercentage = [];
    this.accumulatedFrequncy = [];
    this.accumulatedFrequncyPercentage = [];
    this.dynamicTable = [];
    this.canvasHolder = document.querySelector('[data-canvas]');
    this.moda = null;
    this.mediana = null;
    this.media = null;
    this.discreetTemplate = doT.template('<table style="text-align:center" border="1"> <tr><th>Classe</th> <th>{{=it.name}}</th> <th>Frequenca Simples</th> <th>Frequenca Relativa</th> <th>Frequenca Acumulada</th> <th>Frequenca Acumulada %</th> </tr>{{~it.dynamicTable :value:index}}<tr><td>{{=value.index}}</td> <td>{{=value.number}}</td><td>{{=value.cont}}</td><td>{{=value.fr}}</td><td>{{=value.fa}}</td><td>{{=value.fac}}</td></tr>{{~}}</table><p>Mediana: {{=it.mediana}}</p><p>Moda: {{=it.moda}}</p> <p>Media: {{=it.media}}</p>');
    this.discreetResult = '';
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
    this.data = Order.create(this.data, 'crescent').getResult();
    this.dataModa = Moda.create(this.data).getResult();
  }

  createModaMediana() {
    // Mediana
    this.mediana = Median.create(this.data, 'number').getResult();

    // Moda
    this.moda = Moda.create(this.data).getModa();

    // Media
    let media = 0;

    for (let i = 0; i < this.dataModa.length; i += 1) {
      media += this.dataModa[i].number * this.dataModa[i].cont;
    }

    this.media = media / this.data.length;
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

    this.discreetResult = this.discreetTemplate({ name: this.name, media: this.media, mediana: this.mediana, moda: this.moda, dynamicTable: this.dynamicTable }); // eslint-disable-line
  }

  createChart() {
    const labelsName = [];
    const canvas = document.createElement('canvas');
    this.canvasHolder.innerHTML = '';

    this.dataModa.forEach((obj, index) => { labelsName[index] = obj.number; });

    const discreetChart = new Chart(canvas, { // eslint-disable-line
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
    return this.discreetResult;
  }
}

export default{
  create(vet, name) {
    return new Discreet(vet, name);
  },
};

export const Class = Discreet;
