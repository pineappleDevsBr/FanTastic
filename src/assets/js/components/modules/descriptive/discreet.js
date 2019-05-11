import doT from 'dot';
import Chart from 'chart.js';
import Moda from '../common/moda';
import Median from '../common/median';
import Order from '../common/order';
import StandardDeviation from '../common/standardDeviation';

class Discreet {
  constructor(vet, name, separatriz, process) {
    this.data = vet;
    this.dataModa = [];
    this.name = name;
    this.process = process;
    this.standardDeviationResult = null;
    this.coefficientOfVariation = null;
    this.separatrizItems = separatriz;
    this.separatrizResult = null;
    this.simpleFrequencyPercentage = [];
    this.accumulatedFrequncy = [];
    this.accumulatedFrequncyPercentage = [];
    this.dynamicTable = [];
    this.canvasHolder = document.querySelector('[data-canvas]');
    this.moda = null;
    this.mediana = null;
    this.media = null;
    this.discreetTemplate = doT.template(`<div class="c-result__table"><table cellspacing="0" cellpadding="0" border="0" style="text-align:center"><tr class="table__header"><th class="table__item">Classe</th><th class="table__item">{{=it.name}}</th><th class="table__item">Frequenca Simples</th><th class="table__item">Frequenca Relativa</th><th class="table__item">Frequenca Acumulada</th><th class="table__item">Frequenca Acumulada %</th></tr>{{~it.dynamicTable :value:index}}<tr class="table__lines"><td class="table__item">{{=value.index}}</td><td class="table__item">{{=value.number}}</td><td class="table__item">{{=value.cont}}</td><td class="table__item">{{=value.fr}}</td><td class="table__item">{{=value.fa}}</td><td class="table__item">{{=value.fac}}</td></tr>{{~}}</table></div><div class="table__informations" ><div class="cell__information" ><p class="cell__title">Mediana</p><p> {{=it.mediana}}</p></div><div class="cell__information" ><p class="cell__title">Moda</p><p> {{=it.moda}}</p></div><div class="cell__information" ><p class="cell__title">Media</p><p> {{=it.media}}</p></div><div class="cell__information" ><p class="cell__title">${this.separatrizItems.isChecked}</p><p> {{=it.separatriz}}</p></div><div class="cell__information" ><p class="cell__title">Desvio Padrão</p><p> {{=it.desvioPadrao}}</p></div><div class="cell__information" ><p class="cell__title"> Coeficiente de variação</p><p> {{=it.coeficienteDeVariacao}}%</p></div></div>`);
    this.discreetResult = '';
    this.setup();
  }

  setup() {
    this.organizerData();
    this.generateFrequency();
    this.createModaMediana();
    this.createSeparatriz();
    this.createstandardDeviation();
    this.createCoefficientOfVariation();
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

    this.media = (media / this.data.length).toFixed(2);
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

  createSeparatriz() {
    this.separatrizResult = this.data[Math.round((this.data.length * (this.separatrizItems.range / 100))) - 1] // eslint-disable-line

    if (this.separatrizResult === undefined) {
      this.separatrizResult = 0;
    }

    this.separatrizResult = this.separatrizResult;
  }

  createstandardDeviation() {
    this.standardDeviationResult = StandardDeviation.create(this.dataModa, this.media, this.process).getResult(); // eslint-disable-line
  }

  createCoefficientOfVariation() {
    this.coefficientOfVariation = Math.round((this.standardDeviationResult / this.media) * 100);
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

    this.discreetResult = this.discreetTemplate({
      name: this.name,
      media: this.media,
      mediana: this.mediana,
      moda: this.moda,
      desvioPadrao: this.standardDeviationResult,
      coeficienteDeVariacao: this.coefficientOfVariation,
      separatriz: this.separatrizResult,
      dynamicTable: this.dynamicTable,
    });
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
  create(vet, name, separatriz, process) {
    return new Discreet(vet, name, separatriz, process);
  },
};

export const Class = Discreet;
