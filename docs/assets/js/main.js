webpackJsonp([0],{

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardDeviation = function () {
  function StandardDeviation(dataModa, media, process) {
    _classCallCheck(this, StandardDeviation);

    this.data = dataModa;
    this.media = media;
    this.process = process;
    this.dataLength = 0;
    this.result = null;
    this.setup();
  }

  _createClass(StandardDeviation, [{
    key: 'setup',
    value: function setup() {
      var _this = this;

      this.data.forEach(function (elm) {
        _this.result += (elm.number - _this.media) ** 2 * elm.cont;
        _this.dataLength += elm.cont;
      });

      if (this.process === 'amostra') {
        this.result = this.result / (this.dataLength - 1);
      } else if (this.process === 'censo') {
        this.result = this.result / this.dataLength;
      }

      this.result = Math.sqrt(this.result).toFixed(2);
    }
  }, {
    key: 'getResult',
    value: function getResult() {
      return this.result;
    }
  }]);

  return StandardDeviation;
}();

exports.default = {
  create: function create(dataModa, media, process) {
    return new StandardDeviation(dataModa, media, process);
  }
};
var Class = exports.Class = StandardDeviation;

/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(136);


/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _switchTab = __webpack_require__(137);

var _switchTab2 = _interopRequireDefault(_switchTab);

var _jumpButton = __webpack_require__(138);

var _jumpButton2 = _interopRequireDefault(_jumpButton);

var _accessibilityBar = __webpack_require__(139);

var _accessibilityBar2 = _interopRequireDefault(_accessibilityBar);

var _descriptive = __webpack_require__(141);

var _descriptive2 = _interopRequireDefault(_descriptive);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_switchTab2.default.create('[data-form]');
_switchTab2.default.create('[data-dropdown]');
_jumpButton2.default.create('[data-button-home]', '.s-section--form');

_descriptive2.default.create();
_accessibilityBar2.default.create('[data-accessibillity-bar]');

/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SwitchTab = function () {
  function SwitchTab(elm) {
    _classCallCheck(this, SwitchTab);

    this.elm = document.querySelector(elm);
    this.tabs = this.elm.querySelector('[data-list-tab]');
    this.boxes = this.elm.querySelector('[data-list-box]');
    this.tabsList = this.tabs.querySelectorAll('[data-tab]');
    this.boxesList = this.boxes.querySelectorAll('[data-box]');
    this.currentIndex = 0;
    this.setup();
  }

  _createClass(SwitchTab, [{
    key: 'setup',
    value: function setup() {
      this.setupListeners();
    }
  }, {
    key: 'setupListeners',
    value: function setupListeners() {
      for (var i = 0; i < this.tabsList.length; i += 1) {
        var index = i;
        this.tabsList[i].addEventListener('click', this.toggleClass.bind(this, index));
      }
    }
  }, {
    key: 'toggleClass',
    value: function toggleClass(index) {
      this.tabsList[this.currentIndex].classList.remove('is-active');
      this.tabsList[index].classList.add('is-active');
      this.boxesList[this.currentIndex].classList.remove('is-active');
      this.boxesList[index].classList.add('is-active');
      this.currentIndex = index;
    }
  }]);

  return SwitchTab;
}();

exports.default = {
  create: function create(elm) {
    return new SwitchTab(elm);
  }
};
var Class = exports.Class = SwitchTab;

/***/ }),

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Class = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jump = __webpack_require__(6);

var _jump2 = _interopRequireDefault(_jump);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JumpButton = function () {
  function JumpButton(elm, target) {
    _classCallCheck(this, JumpButton);

    this.elm = document.querySelector(elm);
    this.target = document.querySelector(target);
    this.setup();
  }

  _createClass(JumpButton, [{
    key: 'setup',
    value: function setup() {
      this.setupListener();
    }
  }, {
    key: 'setupListener',
    value: function setupListener() {
      var _this = this;

      this.elm.addEventListener('click', function () {
        JumpButton.jumpToTarget(_this.target);
      });
    }
  }], [{
    key: 'jumpToTarget',
    value: function jumpToTarget(target) {
      (0, _jump2.default)(target);
    }
  }]);

  return JumpButton;
}();

exports.default = {
  create: function create(elm, target) {
    return new JumpButton(elm, target);
  }
};
var Class = exports.Class = JumpButton;

/***/ }),

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Class = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsCookie = __webpack_require__(140);

var _jsCookie2 = _interopRequireDefault(_jsCookie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AccessibilityBar = function () {
  function AccessibilityBar(elm) {
    _classCallCheck(this, AccessibilityBar);

    this.elm = document.querySelector(elm);
    this.container = document.documentElement;
    this.contrastButton = this.elm.querySelector('[data-contrast-button]');
    this.hasContrast = false;

    this.setupListeners();
    this.applyInitialState();
  }

  _createClass(AccessibilityBar, [{
    key: 'applyInitialState',
    value: function applyInitialState() {
      var isConstrast = _jsCookie2.default.get('isContrast');

      if (isConstrast) {
        this.container.classList.add('accessibility-mode');
        this.contrastButton.classList.add('is-active');
        this.hasContrast = true;
      }
    }
  }, {
    key: 'setupListeners',
    value: function setupListeners() {
      var _this = this;

      this.contrastButton.addEventListener('click', function () {
        _this.container.classList.toggle('accessibility-mode');
        _this.contrastButton.classList.toggle('is-active');

        if (_this.hasContrast) {
          _jsCookie2.default.remove('isContrast');
          _this.hasContrast = false;
        } else {
          _jsCookie2.default.set('isContrast', 'isContrast');
          _this.hasContrast = true;
        }
      });
    }
  }]);

  return AccessibilityBar;
}();

exports.default = {
  create: function create(elm) {
    return new AccessibilityBar(elm);
  }
};
var Class = exports.Class = AccessibilityBar;

/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Class = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jump = __webpack_require__(6);

var _jump2 = _interopRequireDefault(_jump);

var _nominal = __webpack_require__(142);

var _nominal2 = _interopRequireDefault(_nominal);

var _ordinal = __webpack_require__(145);

var _ordinal2 = _interopRequireDefault(_ordinal);

var _discreet = __webpack_require__(146);

var _discreet2 = _interopRequireDefault(_discreet);

var _continue = __webpack_require__(147);

var _continue2 = _interopRequireDefault(_continue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Descriptive = function () {
  function Descriptive() {
    _classCallCheck(this, Descriptive);

    this.button = document.querySelector('[data-button-descriptive]');
    this.buttonFile = document.querySelector('[data-button-file]');
    this.holderResult = document.querySelector('[data-result-holder]');
    this.elm = null;
    this.radioHolder = null;
    this.separatrisHolder = null;
    this.separatrisItems = null;
    this.listRadio = null;
    this.processList = null;
    this.processChecked = null;
    this.data = null;
    this.dataName = null;
    this.orderOrdinal = null;
    this.result = null;
    this.dataConverted = [];
    this.setup();
  }

  _createClass(Descriptive, [{
    key: 'setup',
    value: function setup() {
      Descriptive.disableLabel();
      Descriptive.changeRange();
      this.setupListener();
    }
  }, {
    key: 'setupListener',
    value: function setupListener() {
      var _this = this;

      this.buttonFile.addEventListener('change', function () {
        _this.readFile();
      });
      this.button.addEventListener('click', function (evt) {
        evt.preventDefault();
        _this.recoverData();
        _this.validateData();
      });
    }
  }, {
    key: 'readFile',
    value: function readFile() {
      if (window.File && window.FileReader && window.FileList && window.Blob) {
        var file = this.buttonFile.files[0];
        var inputFile = document.querySelector('[data-dados]');
        var regExp = [/.txt$/, /.csv$/];
        if (regExp[0].test(file.name) || regExp[1].test(file.name)) {
          var reader = new FileReader();
          reader.onload = function () {
            inputFile.value = reader.result;
          };
          reader.readAsText(file);
        } else alert('Escolha um arquivo no formato .txt ou .csv');
      } else {
        alert('Seu navegador nao suporta essa funcionalidade :(');
      }
    }
  }, {
    key: 'recoverData',
    value: function recoverData() {
      var _this2 = this;

      this.elm = document.querySelector('[data-descriptive]');
      this.radioHolder = this.elm.querySelector('[data-radios]');
      this.listRadio = this.radioHolder.querySelectorAll('input');
      this.separatrisHolder = this.elm.querySelector('[data-separatriz]');
      this.processList = Array.from(this.elm.querySelector('[data-process]').querySelectorAll('input[type=radio]'));

      this.processList.forEach(function (elm) {
        if (elm.checked === true) {
          _this2.processChecked = elm.id;
        }
      });

      this.separatrisItems = {
        radios: Array.from(this.separatrisHolder.querySelectorAll('input[type=radio]')),
        range: this.separatrisHolder.querySelector('input[type=range]').value,
        isChecked: null
      };
      this.separatrisItems.isChecked = this.wichyChecked();

      this.data = this.elm.querySelector('[data-dados]').value;
      this.dataName = this.elm.querySelector('[data-name]').value;
      this.orderOrdinal = this.elm.querySelector('[data-order]').value;
    }
  }, {
    key: 'wichyChecked',
    value: function wichyChecked() {
      var checked = null;

      this.separatrisItems.radios.forEach(function (elm) {
        if (elm.checked === true) {
          checked = elm.id;
        }
      });

      return checked;
    }
  }, {
    key: 'convertArray',
    value: function convertArray() {
      var regExpArrayEnd = /;$/;
      var regExpArrayStart = /^;/;

      if (regExpArrayEnd.test(this.data)) {
        this.data = this.data.replace(/;$/, '');
      }

      if (regExpArrayStart.test(this.data)) {
        this.data = this.data.replace(/^;/, '');
      }

      if (regExpArrayEnd.test(this.orderOrdinal)) {
        this.orderOrdinal = this.orderOrdinal.replace(/;$/, '');
      }

      if (regExpArrayStart.test(this.orderOrdinal)) {
        this.orderOrdinal = this.orderOrdinal.replace(/^;/, '');
      }

      this.data = this.data.split(/;/);
      this.orderOrdinal = this.orderOrdinal.split(/;/);
      this.dataConverted = this.data.map(function (num) {
        return parseFloat(num, 10);
      });
    }
  }, {
    key: 'validateData',
    value: function validateData() {
      if (this.listRadio[1].checked === true) {
        if (this.data === '' || this.dataName === '' || this.orderOrdinal === '') {
          // eslint-disable-line
          alert('preencha todos os campos');
        } else {
          this.convertArray();
          this.choiceTypeVariable();
          this.appendResult();
        }
      } else if (this.data === '' || this.dataName === '') {
        alert('preencha todos os campos');
      } else {
        this.convertArray();
        this.choiceTypeVariable();
        this.appendResult();
      }
    }
  }, {
    key: 'choiceTypeVariable',
    value: function choiceTypeVariable() {
      if (this.listRadio[0].checked === true) {
        this.result = _nominal2.default.create(this.data, this.dataName, this.separatrisItems).getResult();
      } else if (this.listRadio[1].checked === true) {
        this.result = _ordinal2.default.create(this.data, this.dataName, this.orderOrdinal, this.separatrisItems).getResult(); // eslint-disable-line
      } else if (this.listRadio[2].checked === true) {
        this.result = _discreet2.default.create(this.dataConverted, this.dataName, this.separatrisItems, this.processChecked).getResult(); // eslint-disable-line
      } else if (this.listRadio[3].checked === true) {
        this.result = _continue2.default.create(this.dataConverted, this.dataName, this.separatrisItems, this.processChecked).getResult(); // eslint-disable-line
      }
    }
  }, {
    key: 'appendResult',
    value: function appendResult() {
      if (this.result !== undefined) {
        if (this.holderResult.className.indexOf('is-active') === -1) {
          this.holderResult.classList.add('is-active');
        }

        this.holderResult.firstElementChild.firstElementChild.innerHTML = '';
        this.holderResult.firstElementChild.firstElementChild.innerHTML = this.result;
        setTimeout(function () {
          (0, _jump2.default)('.s-section--result');
        }, 500);
      }
    }
  }], [{
    key: 'changeRange',
    value: function changeRange() {
      var rangeList = document.querySelector('[data-separatriz]');
      var rangeLabels = Array.from(rangeList.querySelectorAll('[type=radio]'));
      var range = document.querySelector('[data-range]');
      var value = document.querySelector('[data-range-value]');

      rangeLabels.forEach(function (elm) {
        elm.addEventListener('click', function () {
          range.setAttribute('step', elm.getAttribute('data-value'));
          value.innerHTML = range.value + '%';
        });
      });

      range.addEventListener('input', function () {
        value.innerHTML = range.value + '%';
      });
    }
  }, {
    key: 'disableLabel',
    value: function disableLabel() {
      var labelsList = document.querySelector('[data-radios]');
      var labels = labelsList.querySelectorAll('input');
      var orderOrdinal = document.querySelector('[data-order]');

      var _loop = function _loop(i) {
        labels[i].addEventListener('click', function () {
          if (labels[i].getAttribute('id') === 'ordinal') {
            orderOrdinal.removeAttribute('disabled');
          } else {
            orderOrdinal.setAttribute('disabled', true);
            orderOrdinal.value = '';
          }
        });
      };

      for (var i = 0; i < labels.length; i += 1) {
        _loop(i);
      }
    }
  }]);

  return Descriptive;
}();

exports.default = {
  create: function create() {
    return new Descriptive();
  }
};
var Class = exports.Class = Descriptive;

/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Class = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dot = __webpack_require__(1);

var _dot2 = _interopRequireDefault(_dot);

var _chart = __webpack_require__(2);

var _chart2 = _interopRequireDefault(_chart);

var _moda = __webpack_require__(3);

var _moda2 = _interopRequireDefault(_moda);

var _median = __webpack_require__(4);

var _median2 = _interopRequireDefault(_median);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Nominal = function () {
  function Nominal(vet, name, separatriz) {
    _classCallCheck(this, Nominal);

    this.data = vet;
    this.separatrizItems = separatriz;
    this.separatrizResult = null;
    this.dataModa = [];
    this.name = name;
    this.simpleFrequencyPercentage = [];
    this.accumulatedFrequncy = [];
    this.accumulatedFrequncyPercentage = [];
    this.dynamicTable = [];
    this.canvasHolder = document.querySelector('[data-canvas]');
    this.moda = null;
    this.mediana = null;
    this.nominalTemplate = _dot2.default.template('<table style="text-align:center"><tr class="table__header"><th class="table__item">Classe</th><th class="table__item">{{=it.name}}</th><th class="table__item">Frequenca Simples</th><th class="table__item">Frequenca Relativa</th><th class="table__item">Frequenca Acumulada</th><th class="table__item">Frequenca Acumulada %</th></tr>{{~it.dynamicTable :value:index}}<tr class="table__lines"><td class="table__item">{{=value.index}}</td><td class="table__item">{{=value.number}}</td><td class="table__item">{{=value.cont}}</td><td class="table__item">{{=value.fr}}</td><td class="table__item">{{=value.fa}}</td><td class="table__item">{{=value.fac}}</td></tr>{{~}}</table><div class="table__informations"><div class="cell__information" ><p class="cell__title">Mediana</p><p> {{=it.mediana}}</p></div><div class="cell__information" ><p class="cell__title">Moda</p><p> {{=it.moda}}</p></div><div class="cell__information" ><p class="cell__title">Medida separatriz</p><p> {{=it.separatriz}}</p></div></div>');
    this.nominalResult = '';
    this.setup();
  }

  _createClass(Nominal, [{
    key: 'setup',
    value: function setup() {
      this.organizerData();
      this.generateFrequency();
      this.createModaMediana();
      this.createSeparatriz();
      this.createTable();
      this.createChart();
    }
  }, {
    key: 'organizerData',
    value: function organizerData() {
      this.dataModa = _moda2.default.create(this.data).getResult();
    }
  }, {
    key: 'createModaMediana',
    value: function createModaMediana() {
      // Mediana
      this.mediana = _median2.default.create(this.data, 'word').getResult();

      // Moda
      this.moda = _moda2.default.create(this.data).getModa();
    }
  }, {
    key: 'generateFrequency',
    value: function generateFrequency() {
      var cont = 0;

      for (var i = 0; i < this.dataModa.length; i += 1) {
        this.simpleFrequencyPercentage[i] = (this.dataModa[i].cont / this.data.length * 100).toFixed(2); // eslint-disable-line
        this.accumulatedFrequncy[i] = this.dataModa[i].cont + cont;
        this.accumulatedFrequncyPercentage[i] = (this.accumulatedFrequncy[i] / this.data.length * 100).toFixed(2); // eslint-disable-line
        cont = this.dataModa[i].cont + cont;
      }
    }
  }, {
    key: 'createSeparatriz',
    value: function createSeparatriz() {
      this.separatrizResult = this.data[Math.round(this.data.length * (this.separatrizItems.range / 100)) - 1]; // eslint-disable-line
      this.separatrizResult = this.separatrizItems.isChecked + ': ' + this.separatrizResult;
    }
  }, {
    key: 'createTable',
    value: function createTable() {
      for (var i = 0; i < this.dataModa.length; i += 1) {
        var obj = {
          index: i + 1,
          number: this.dataModa[i].number,
          cont: this.dataModa[i].cont,
          fr: this.simpleFrequencyPercentage[i],
          fa: this.accumulatedFrequncy[i],
          fac: this.accumulatedFrequncyPercentage[i]
        };

        this.dynamicTable.push(obj);
      }

      this.nominalResult = this.nominalTemplate({ name: this.name, mediana: this.mediana, moda: this.moda, separatriz: this.separatrizResult, dynamicTable: this.dynamicTable }); // eslint-disable-line
    }
  }, {
    key: 'createChart',
    value: function createChart() {
      var labelsName = [];
      var canvas = document.createElement('canvas');
      this.canvasHolder.innerHTML = '';

      this.dataModa.forEach(function (obj, index) {
        labelsName[index] = obj.number;
      });

      var nominalChart = new _chart2.default(canvas, { // eslint-disable-line
        type: 'pie',
        data: {
          labels: labelsName,
          datasets: [{
            data: this.simpleFrequencyPercentage
          }]
        }
      });

      this.canvasHolder.appendChild(canvas);
    }
  }, {
    key: 'getResult',
    value: function getResult() {
      return this.nominalResult;
    }
  }]);

  return Nominal;
}();

exports.default = {
  create: function create(vet, name, separatriz) {
    return new Nominal(vet, name, separatriz);
  }
};
var Class = exports.Class = Nominal;

/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 7,
	"./af.js": 7,
	"./ar": 8,
	"./ar-dz": 9,
	"./ar-dz.js": 9,
	"./ar-kw": 10,
	"./ar-kw.js": 10,
	"./ar-ly": 11,
	"./ar-ly.js": 11,
	"./ar-ma": 12,
	"./ar-ma.js": 12,
	"./ar-sa": 13,
	"./ar-sa.js": 13,
	"./ar-tn": 14,
	"./ar-tn.js": 14,
	"./ar.js": 8,
	"./az": 15,
	"./az.js": 15,
	"./be": 16,
	"./be.js": 16,
	"./bg": 17,
	"./bg.js": 17,
	"./bm": 18,
	"./bm.js": 18,
	"./bn": 19,
	"./bn.js": 19,
	"./bo": 20,
	"./bo.js": 20,
	"./br": 21,
	"./br.js": 21,
	"./bs": 22,
	"./bs.js": 22,
	"./ca": 23,
	"./ca.js": 23,
	"./cs": 24,
	"./cs.js": 24,
	"./cv": 25,
	"./cv.js": 25,
	"./cy": 26,
	"./cy.js": 26,
	"./da": 27,
	"./da.js": 27,
	"./de": 28,
	"./de-at": 29,
	"./de-at.js": 29,
	"./de-ch": 30,
	"./de-ch.js": 30,
	"./de.js": 28,
	"./dv": 31,
	"./dv.js": 31,
	"./el": 32,
	"./el.js": 32,
	"./en-SG": 33,
	"./en-SG.js": 33,
	"./en-au": 34,
	"./en-au.js": 34,
	"./en-ca": 35,
	"./en-ca.js": 35,
	"./en-gb": 36,
	"./en-gb.js": 36,
	"./en-ie": 37,
	"./en-ie.js": 37,
	"./en-il": 38,
	"./en-il.js": 38,
	"./en-nz": 39,
	"./en-nz.js": 39,
	"./eo": 40,
	"./eo.js": 40,
	"./es": 41,
	"./es-do": 42,
	"./es-do.js": 42,
	"./es-us": 43,
	"./es-us.js": 43,
	"./es.js": 41,
	"./et": 44,
	"./et.js": 44,
	"./eu": 45,
	"./eu.js": 45,
	"./fa": 46,
	"./fa.js": 46,
	"./fi": 47,
	"./fi.js": 47,
	"./fo": 48,
	"./fo.js": 48,
	"./fr": 49,
	"./fr-ca": 50,
	"./fr-ca.js": 50,
	"./fr-ch": 51,
	"./fr-ch.js": 51,
	"./fr.js": 49,
	"./fy": 52,
	"./fy.js": 52,
	"./ga": 53,
	"./ga.js": 53,
	"./gd": 54,
	"./gd.js": 54,
	"./gl": 55,
	"./gl.js": 55,
	"./gom-latn": 56,
	"./gom-latn.js": 56,
	"./gu": 57,
	"./gu.js": 57,
	"./he": 58,
	"./he.js": 58,
	"./hi": 59,
	"./hi.js": 59,
	"./hr": 60,
	"./hr.js": 60,
	"./hu": 61,
	"./hu.js": 61,
	"./hy-am": 62,
	"./hy-am.js": 62,
	"./id": 63,
	"./id.js": 63,
	"./is": 64,
	"./is.js": 64,
	"./it": 65,
	"./it-ch": 66,
	"./it-ch.js": 66,
	"./it.js": 65,
	"./ja": 67,
	"./ja.js": 67,
	"./jv": 68,
	"./jv.js": 68,
	"./ka": 69,
	"./ka.js": 69,
	"./kk": 70,
	"./kk.js": 70,
	"./km": 71,
	"./km.js": 71,
	"./kn": 72,
	"./kn.js": 72,
	"./ko": 73,
	"./ko.js": 73,
	"./ku": 74,
	"./ku.js": 74,
	"./ky": 75,
	"./ky.js": 75,
	"./lb": 76,
	"./lb.js": 76,
	"./lo": 77,
	"./lo.js": 77,
	"./lt": 78,
	"./lt.js": 78,
	"./lv": 79,
	"./lv.js": 79,
	"./me": 80,
	"./me.js": 80,
	"./mi": 81,
	"./mi.js": 81,
	"./mk": 82,
	"./mk.js": 82,
	"./ml": 83,
	"./ml.js": 83,
	"./mn": 84,
	"./mn.js": 84,
	"./mr": 85,
	"./mr.js": 85,
	"./ms": 86,
	"./ms-my": 87,
	"./ms-my.js": 87,
	"./ms.js": 86,
	"./mt": 88,
	"./mt.js": 88,
	"./my": 89,
	"./my.js": 89,
	"./nb": 90,
	"./nb.js": 90,
	"./ne": 91,
	"./ne.js": 91,
	"./nl": 92,
	"./nl-be": 93,
	"./nl-be.js": 93,
	"./nl.js": 92,
	"./nn": 94,
	"./nn.js": 94,
	"./pa-in": 95,
	"./pa-in.js": 95,
	"./pl": 96,
	"./pl.js": 96,
	"./pt": 97,
	"./pt-br": 98,
	"./pt-br.js": 98,
	"./pt.js": 97,
	"./ro": 99,
	"./ro.js": 99,
	"./ru": 100,
	"./ru.js": 100,
	"./sd": 101,
	"./sd.js": 101,
	"./se": 102,
	"./se.js": 102,
	"./si": 103,
	"./si.js": 103,
	"./sk": 104,
	"./sk.js": 104,
	"./sl": 105,
	"./sl.js": 105,
	"./sq": 106,
	"./sq.js": 106,
	"./sr": 107,
	"./sr-cyrl": 108,
	"./sr-cyrl.js": 108,
	"./sr.js": 107,
	"./ss": 109,
	"./ss.js": 109,
	"./sv": 110,
	"./sv.js": 110,
	"./sw": 111,
	"./sw.js": 111,
	"./ta": 112,
	"./ta.js": 112,
	"./te": 113,
	"./te.js": 113,
	"./tet": 114,
	"./tet.js": 114,
	"./tg": 115,
	"./tg.js": 115,
	"./th": 116,
	"./th.js": 116,
	"./tl-ph": 117,
	"./tl-ph.js": 117,
	"./tlh": 118,
	"./tlh.js": 118,
	"./tr": 119,
	"./tr.js": 119,
	"./tzl": 120,
	"./tzl.js": 120,
	"./tzm": 121,
	"./tzm-latn": 122,
	"./tzm-latn.js": 122,
	"./tzm.js": 121,
	"./ug-cn": 123,
	"./ug-cn.js": 123,
	"./uk": 124,
	"./uk.js": 124,
	"./ur": 125,
	"./ur.js": 125,
	"./uz": 126,
	"./uz-latn": 127,
	"./uz-latn.js": 127,
	"./uz.js": 126,
	"./vi": 128,
	"./vi.js": 128,
	"./x-pseudo": 129,
	"./x-pseudo.js": 129,
	"./yo": 130,
	"./yo.js": 130,
	"./zh-cn": 131,
	"./zh-cn.js": 131,
	"./zh-hk": 132,
	"./zh-hk.js": 132,
	"./zh-tw": 133,
	"./zh-tw.js": 133
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 144;

/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Class = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dot = __webpack_require__(1);

var _dot2 = _interopRequireDefault(_dot);

var _chart = __webpack_require__(2);

var _chart2 = _interopRequireDefault(_chart);

var _order = __webpack_require__(5);

var _order2 = _interopRequireDefault(_order);

var _moda = __webpack_require__(3);

var _moda2 = _interopRequireDefault(_moda);

var _median = __webpack_require__(4);

var _median2 = _interopRequireDefault(_median);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ordinal = function () {
  function Ordinal(vet, name, order, separatriz) {
    _classCallCheck(this, Ordinal);

    this.data = vet;
    this.name = name;
    this.order = order;
    this.separatrizItems = separatriz;
    this.separatrizResult = null;
    this.dataModa = [];
    this.simpleFrequencyPercentage = [];
    this.accumulatedFrequncy = [];
    this.accumulatedFrequncyPercentage = [];
    this.dynamicTable = [];
    this.canvasHolder = document.querySelector('[data-canvas]');
    this.moda = null;
    this.mediana = null;
    this.ordinalTemplate = _dot2.default.template('<table style="text-align:center"><tr class="table__header"><th class="table__item">Classe</th><th class="table__item">{{=it.name}}</th><th class="table__item">Frequenca Simples</th><th class="table__item">Frequenca Relativa</th><th class="table__item">Frequenca Acumulada</th><th class="table__item">Frequenca Acumulada %</th></tr>{{~it.dynamicTable :value:index}}<tr class="table__lines"><td class="table__item">{{=value.index}}</td><td class="table__item">{{=value.number}}</td><td class="table__item">{{=value.cont}}</td><td class="table__item">{{=value.fr}}</td><td class="table__item">{{=value.fa}}</td><td class="table__item">{{=value.fac}}</td></tr>{{~}}</table><div class="table__informations"><div class="cell__information" ><p class="cell__title">Mediana</p><p> {{=it.mediana}}</p></div><div class="cell__information" ><p class="cell__title">Moda</p><p> {{=it.moda}}</p></div><div class="cell__information" ><p class="cell__title">Medida separatriz</p><p> {{=it.separatriz}}</p></div></div>');
    this.ordinalResult = null;
    this.setup();
  }

  _createClass(Ordinal, [{
    key: 'setup',
    value: function setup() {
      this.organizerData();
      this.generateFrequency();
      this.createModaMediana();
      this.createSeparatriz();
      this.createTable();
      this.createChart();
    }
  }, {
    key: 'organizerData',
    value: function organizerData() {
      this.data = _order2.default.create(this.data, 'crescent', this.order).getResult();
      this.dataModa = _moda2.default.create(this.data).getResult();
    }
  }, {
    key: 'generateFrequency',
    value: function generateFrequency() {
      var cont = 0;

      for (var i = 0; i < this.dataModa.length; i += 1) {
        this.simpleFrequencyPercentage[i] = (this.dataModa[i].cont / this.data.length * 100).toFixed(2); // eslint-disable-line
        this.accumulatedFrequncy[i] = this.dataModa[i].cont + cont;
        this.accumulatedFrequncyPercentage[i] = (this.accumulatedFrequncy[i] / this.data.length * 100).toFixed(2); // eslint-disable-line
        cont = this.dataModa[i].cont + cont;
      }
    }
  }, {
    key: 'createModaMediana',
    value: function createModaMediana() {
      // Mediana
      this.mediana = _median2.default.create(this.data, 'word').getResult();

      // Moda
      this.moda = _moda2.default.create(this.data).getModa();
    }
  }, {
    key: 'createSeparatriz',
    value: function createSeparatriz() {
      this.separatrizResult = this.data[Math.round(this.data.length * (this.separatrizItems.range / 100)) - 1]; // eslint-disable-line
      this.separatrizResult = this.separatrizItems.isChecked + ': ' + this.separatrizResult;
    }
  }, {
    key: 'createTable',
    value: function createTable() {
      for (var i = 0; i < this.dataModa.length; i += 1) {
        var obj = {
          index: i + 1,
          number: this.dataModa[i].number,
          cont: this.dataModa[i].cont,
          fr: this.simpleFrequencyPercentage[i],
          fa: this.accumulatedFrequncy[i],
          fac: this.accumulatedFrequncyPercentage[i]
        };

        this.dynamicTable.push(obj);
      }

      this.ordinalResult = this.ordinalTemplate({ name: this.name, mediana: this.mediana, moda: this.moda, separatriz: this.separatrizResult, dynamicTable: this.dynamicTable }); // eslint-disable-line
    }
  }, {
    key: 'createChart',
    value: function createChart() {
      var labelsName = [];
      var canvas = document.createElement('canvas');
      this.canvasHolder.innerHTML = '';

      this.dataModa.forEach(function (obj, index) {
        labelsName[index] = obj.number;
      });

      var ordinalChart = new _chart2.default(canvas, { // eslint-disable-line
        type: 'pie',
        data: {
          labels: labelsName,
          datasets: [{
            data: this.simpleFrequencyPercentage
          }]
        }
      });

      this.canvasHolder.appendChild(canvas);
    }
  }, {
    key: 'getResult',
    value: function getResult() {
      return this.ordinalResult;
    }
  }]);

  return Ordinal;
}();

exports.default = {
  create: function create(vet, name, order, separatriz) {
    return new Ordinal(vet, name, order, separatriz);
  }
};
var Class = exports.Class = Ordinal;

/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Class = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dot = __webpack_require__(1);

var _dot2 = _interopRequireDefault(_dot);

var _chart = __webpack_require__(2);

var _chart2 = _interopRequireDefault(_chart);

var _moda = __webpack_require__(3);

var _moda2 = _interopRequireDefault(_moda);

var _median = __webpack_require__(4);

var _median2 = _interopRequireDefault(_median);

var _order = __webpack_require__(5);

var _order2 = _interopRequireDefault(_order);

var _standardDeviation = __webpack_require__(134);

var _standardDeviation2 = _interopRequireDefault(_standardDeviation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Discreet = function () {
  function Discreet(vet, name, separatriz, process) {
    _classCallCheck(this, Discreet);

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
    this.discreetTemplate = _dot2.default.template('<table style="text-align:center" ><tr class="table__header"><th class="table__item">Classe</th><th class="table__item">{{=it.name}}</th><th class="table__item">Frequenca Simples</th><th class="table__item">Frequenca Relativa</th><th class="table__item">Frequenca Acumulada</th><th class="table__item">Frequenca Acumulada %</th></tr>{{~it.dynamicTable :value:index}}<tr class="table__lines"><td class="table__item">{{=value.index}}</td><td class="table__item">{{=value.number}}</td><td class="table__item">{{=value.cont}}</td><td class="table__item">{{=value.fr}}</td><td class="table__item">{{=value.fa}}</td><td class="table__item">{{=value.fac}}</td></tr>{{~}}</table><div class="table__informations" ><div class="cell__information" ><p class="cell__title">Mediana</p><p> {{=it.mediana}}</p></div><div class="cell__information" ><p class="cell__title">Moda</p><p> {{=it.moda}}</p></div><div class="cell__information" ><p class="cell__title">Media</p><p> {{=it.media}}</p></div><div class="cell__information" ><p class="cell__title">Medida separatriz</p><p> {{=it.separatriz}}</p></div><div class="cell__information" ><p class="cell__title">Desvio Padrão</p><p> {{=it.desvioPadrao}}</p></div><div class="cell__information" ><p class="cell__title"> Coeficiente de variação</p><p> {{=it.coeficienteDeVariacao}}%</p></div></div>');
    this.discreetResult = '';
    this.setup();
  }

  _createClass(Discreet, [{
    key: 'setup',
    value: function setup() {
      this.organizerData();
      this.generateFrequency();
      this.createModaMediana();
      this.createSeparatriz();
      this.createstandardDeviation();
      this.createCoefficientOfVariation();
      this.createTable();
      this.createChart();
    }
  }, {
    key: 'organizerData',
    value: function organizerData() {
      this.data = _order2.default.create(this.data, 'crescent').getResult();
      this.dataModa = _moda2.default.create(this.data).getResult();
    }
  }, {
    key: 'createModaMediana',
    value: function createModaMediana() {
      // Mediana
      this.mediana = _median2.default.create(this.data, 'number').getResult();

      // Moda
      this.moda = _moda2.default.create(this.data).getModa();

      // Media
      var media = 0;

      for (var i = 0; i < this.dataModa.length; i += 1) {
        media += this.dataModa[i].number * this.dataModa[i].cont;
      }

      this.media = (media / this.data.length).toFixed(2);
    }
  }, {
    key: 'generateFrequency',
    value: function generateFrequency() {
      var cont = 0;

      for (var i = 0; i < this.dataModa.length; i += 1) {
        this.simpleFrequencyPercentage[i] = (this.dataModa[i].cont / this.data.length * 100).toFixed(2); // eslint-disable-line
        this.accumulatedFrequncy[i] = this.dataModa[i].cont + cont;
        this.accumulatedFrequncyPercentage[i] = (this.accumulatedFrequncy[i] / this.data.length * 100).toFixed(2); // eslint-disable-line
        cont = this.dataModa[i].cont + cont;
      }
    }
  }, {
    key: 'createSeparatriz',
    value: function createSeparatriz() {
      this.separatrizResult = this.data[Math.round(this.data.length * (this.separatrizItems.range / 100)) - 1]; // eslint-disable-line

      if (this.separatrizResult === undefined) {
        this.separatrizResult = 0;
      }

      this.separatrizResult = this.separatrizItems.isChecked + ': ' + this.separatrizResult;
    }
  }, {
    key: 'createstandardDeviation',
    value: function createstandardDeviation() {
      this.standardDeviationResult = _standardDeviation2.default.create(this.dataModa, this.media, this.process).getResult(); // eslint-disable-line
    }
  }, {
    key: 'createCoefficientOfVariation',
    value: function createCoefficientOfVariation() {
      this.coefficientOfVariation = Math.round(this.standardDeviationResult / this.media * 100);
    }
  }, {
    key: 'createTable',
    value: function createTable() {
      for (var i = 0; i < this.dataModa.length; i += 1) {
        var obj = {
          index: i + 1,
          number: this.dataModa[i].number,
          cont: this.dataModa[i].cont,
          fr: this.simpleFrequencyPercentage[i],
          fa: this.accumulatedFrequncy[i],
          fac: this.accumulatedFrequncyPercentage[i]
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
        dynamicTable: this.dynamicTable
      });
    }
  }, {
    key: 'createChart',
    value: function createChart() {
      var labelsName = [];
      var canvas = document.createElement('canvas');
      this.canvasHolder.innerHTML = '';

      this.dataModa.forEach(function (obj, index) {
        labelsName[index] = obj.number;
      });

      var discreetChart = new _chart2.default(canvas, { // eslint-disable-line
        type: 'pie',
        data: {
          labels: labelsName,
          datasets: [{
            data: this.simpleFrequencyPercentage
          }]
        }
      });

      this.canvasHolder.appendChild(canvas);
    }
  }, {
    key: 'getResult',
    value: function getResult() {
      return this.discreetResult;
    }
  }]);

  return Discreet;
}();

exports.default = {
  create: function create(vet, name, separatriz, process) {
    return new Discreet(vet, name, separatriz, process);
  }
};
var Class = exports.Class = Discreet;

/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Class = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dot = __webpack_require__(1);

var _dot2 = _interopRequireDefault(_dot);

var _chart = __webpack_require__(2);

var _chart2 = _interopRequireDefault(_chart);

var _order = __webpack_require__(5);

var _order2 = _interopRequireDefault(_order);

var _moda = __webpack_require__(3);

var _moda2 = _interopRequireDefault(_moda);

var _standardDeviation = __webpack_require__(134);

var _standardDeviation2 = _interopRequireDefault(_standardDeviation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Continue = function () {
  function Continue(vet, name, separatriz, process) {
    _classCallCheck(this, Continue);

    this.At = null;
    this.result = null;
    this.intervalNumber = null;
    this.valueMediana = null;
    this.valueModa = null;
    this.valueMedia = null;
    this.separatrizResult = null;
    this.standardDeviationResult = null;
    this.variation = null;
    this.dataModa = [];
    this.k = [];
    this.simpleFrequencyPercentage = [];
    this.accumulatedFrequncy = [];
    this.accumulatedFrequncyPercentage = [];
    this.dynamicTable = [];
    this.vetInterval = [];
    this.vet = vet;
    this.name = name;
    this.separatrizItems = separatriz;
    this.process = process;
    this.canvasHolder = document.querySelector('[data-canvas]');
    this.continueTemplate = _dot2.default.template('<table style="text-align:center"><tr class="table__header"><th class="table__item">Classes</th><th class="table__item">{{=it.name}}</th><th class="table__item">Frequenca Simples</th><th class="table__item">Frequenca Relativa</th><th class="table__item">Frequenca Acumulada</th><th class="table__item">Frequenca Acumulada %</th></tr>{{~it.dynamicTable :value:index}}<tr class="table__lines"><td class="table__item">{{=value.class}}</td><td class="table__item">{{=value.valorInicial}} |&#8212; {{=value.valorFinal}}</td><td class="table__item">{{=value.cont}}</td><td class="table__item">{{=value.fr}}</td><td class="table__item">{{=value.fa}}</td><td class="table__item">{{=value.fac}}</td></tr>{{~}}</table><br/><div class="table__informations"><div class="cell__information" ><p class="cell__title">Moda</p><p>{{=value.moda}}</p></div><div class="cell__information" ><p class="cell__title">  Média</p><p> {{=value.media}}</p></div><div class="cell__information" ><p class="cell__title">  Mediana</p><p> {{=value.mediana}}</p></div><div class="cell__information" ><p class="cell__title">  Separatriz</p><p> {{=it.separatrizResult}}</p></div><div class="cell__information" ><p class="cell__title"> Desvio Padrão</p><p> {{=it.desvioPadrao}}</p></div><div class="cell__information" ><p class="cell__title"> Coeficiente de Variação</p><p> {{=it.coeficientevariacao}}</p></div></div>');
    this.continueResult = '';
    this.setup();
  }

  _createClass(Continue, [{
    key: 'setup',
    value: function setup() {
      this.oraganizedArray();
      this.amplitude();
      this.classes();
      this.valueInterval();
      this.createModa();
      this.interval();
      this.generateFrequency();
      this.separatriz();
      this.media();
      this.moda();
      this.mediana();
      this.standardDeviation();
      this.coefficientVariation();
      this.createTable();
      this.createChart();
    }
  }, {
    key: 'oraganizedArray',
    value: function oraganizedArray() {
      this.vet = _order2.default.create(this.vet, 'crescent').getResult();
    }
  }, {
    key: 'amplitude',
    value: function amplitude() {
      this.At = this.vet[this.vet.length - 1] - this.vet[0];
    }
  }, {
    key: 'classes',
    value: function classes() {
      this.K = [parseInt(Math.sqrt(this.vet.length)) - 1, parseInt(Math.sqrt(this.vet.length)), parseInt(Math.sqrt(this.vet.length)) + 1]; // eslint-disable-line
    }
  }, {
    key: 'valueInterval',
    value: function valueInterval() {
      var D = this.At + 1;
      var i = 0;
      while (i === 0) {
        for (var j = 0; j < 3; j += 1) {
          if (D % this.K[j] === 0) {
            this.intervalNumber = D / this.K[j];
            i += 1;
            break;
          }
        }
        D += 1;
      }
    }
  }, {
    key: 'createModa',
    value: function createModa() {
      var x = this.vet[0];
      var y = null;
      while (x <= this.vet[this.vet.length - 1]) {
        y = x + this.intervalNumber;
        for (var i = 0; i < this.vet.length; i += 1) {
          if (this.vet[i] >= x && this.vet[i] < y) {
            this.dataModa = _moda2.default.create(this.vet).getResult();
          }
        }
        x += this.intervalNumber;
      }
    }
  }, {
    key: 'interval',
    value: function interval() {
      var valorInicial = this.dataModa[0].number;
      var cont = this.dataModa[0].cont;
      var valorFinal = valorInicial + this.intervalNumber;

      for (var i = 1; i < this.dataModa.length; i += 1) {
        if (this.dataModa[i].number >= valorFinal) {
          var _obj = new Object(); // eslint-disable-line
          _obj.valorInicial = valorInicial;
          _obj.valorFinal = valorFinal;
          _obj.cont = cont;
          this.vetInterval.push(_obj);
          valorInicial = valorFinal;
          valorFinal = valorInicial + this.intervalNumber;
          cont = this.dataModa[i].cont;
        } else if (this.dataModa[i].number < valorFinal) {
          cont += this.dataModa[i].cont;
        }
      }
      var obj = new Object(); // eslint-disable-line
      obj.valorInicial = valorInicial;
      obj.valorFinal = valorFinal;
      obj.cont = cont;
      this.vetInterval.push(obj);
    }
  }, {
    key: 'generateFrequency',
    value: function generateFrequency() {
      var cont = 0;

      for (var i = 0; i < this.vetInterval.length; i += 1) {
        this.simpleFrequencyPercentage[i] = (this.vetInterval[i].cont / this.vet.length * 100).toFixed(2); // eslint-disable-line
        this.accumulatedFrequncy[i] = this.vetInterval[i].cont + cont;
        this.accumulatedFrequncyPercentage[i] = (this.accumulatedFrequncy[i] / this.vet.length * 100).toFixed(2); // eslint-disable-line
        cont = this.vetInterval[i].cont + cont;
      }
    }
  }, {
    key: 'separatrizGeral',
    value: function separatrizGeral(valuePosicao) {
      var posicao = valuePosicao;
      var I = null; // eslint-disable-line
      var find = null; // eslint-disable-line
      var facAnt = null; // eslint-disable-line
      for (var i = 0; i < this.vet.length; i += 1) {
        if (parseInt(posicao) == i) {
          // eslint-disable-line
          var aux = this.vet[i];
          for (var j = 0; j < this.vetInterval.length; j += 1) {
            if (aux >= this.vetInterval[j].valorInicial && aux < this.vetInterval[j].valorFinal) {
              I = this.vetInterval[j].valorInicial;
              find = this.vetInterval[j].cont;
              if (j - 1 < 0) {
                facAnt = 0;
              } else {
                facAnt = this.accumulatedFrequncy[j - 1];
              }
            }
          }
        }
      }
      this.result = (I + (posicao - facAnt) / find * this.intervalNumber).toFixed(2); //eslint-disable-line
    }
  }, {
    key: 'separatriz',
    value: function separatriz() {
      var posicao = Number(this.separatrizItems.range / 100 * this.vet.length).toFixed(2);
      this.separatrizGeral(posicao);
      this.separatrizResult = this.result;
    }
  }, {
    key: 'mediana',
    value: function mediana() {
      var posicao = this.vet.length / 2;
      this.separatrizGeral(posicao);
      this.valueMediana = this.result;
    }
  }, {
    key: 'media',
    value: function media() {
      var mediaparcial = null;
      for (var i = 0; i < this.vetInterval.length; i += 1) {
        mediaparcial += (this.vetInterval[i].valorFinal + this.vetInterval[i].valorInicial) / 2 * this.vetInterval[i].cont; // eslint-disable-line
      }

      this.valueMedia = (mediaparcial / this.vet.length).toFixed(2);
    }
  }, {
    key: 'moda',
    value: function moda() {
      var maior = null;
      var posicao = null;
      for (var i = 0; i < this.vetInterval.length; i += 1) {
        if (this.vetInterval[i].cont > maior) {
          maior = this.vetInterval[i].cont;
          posicao = i;
        }
      }
      this.valueModa = (this.vetInterval[posicao].valorFinal + this.vetInterval[posicao].valorInicial) / 2; // eslint-disable-line
    }
  }, {
    key: 'standardDeviation',
    value: function standardDeviation() {
      var _this = this;

      var medias = [];
      this.vetInterval.forEach(function (elm, i) {
        medias[i] = {
          number: (elm.valorInicial + elm.valorFinal) / 2,
          cont: _this.dataModa[i].cont
        };
      });
      this.standardDeviationResult = _standardDeviation2.default.create(medias, this.valueMedia, this.process).getResult(); // eslint-disable-line
    }
  }, {
    key: 'coefficientVariation',
    value: function coefficientVariation() {
      this.variation = (this.standardDeviationResult / this.valueMedia * 100).toFixed(2);
    }
  }, {
    key: 'createTable',
    value: function createTable() {
      for (var i = 0; i < this.vetInterval.length; i += 1) {
        var obj = {
          class: i + 1,
          valorInicial: this.vetInterval[i].valorInicial,
          valorFinal: this.vetInterval[i].valorFinal,
          cont: this.vetInterval[i].cont,
          fr: this.simpleFrequencyPercentage[i],
          fa: this.accumulatedFrequncy[i],
          fac: this.accumulatedFrequncyPercentage[i],
          moda: this.valueModa,
          media: this.valueMedia,
          mediana: this.valueMediana,
          separatrizResult: this.separatrizResult,
          desvioPadrao: this.standardDeviationResult,
          coeficientevariacao: this.variation
        };

        this.dynamicTable.push(obj);
      }

      this.continueResult = this.continueTemplate({ name: this.name, dynamicTable: this.dynamicTable, separatrizResult: this.separatrizResult, desvioPadrao: this.standardDeviationResult, coeficientevariacao: this.variation }); // eslint-disable-line
    }
  }, {
    key: 'createChart',
    value: function createChart() {
      var labelsName = [];
      var canvas = document.createElement('canvas');
      this.canvasHolder.innerHTML = '';

      this.vetInterval.forEach(function (obj, index) {
        labelsName[index] = obj.valorInicial + ' |- ' + obj.valorFinal;
      });

      var continueChart = new _chart2.default(canvas, { // eslint-disable-line
        type: 'bar',
        data: {
          labels: labelsName,
          datasets: [{
            label: 'Frequencia Relativa',
            data: this.simpleFrequencyPercentage
          }]
        }
      });
      _chart2.default.scaleService.updateScaleDefaults('linear', {
        ticks: {
          min: 0
        }
      });

      this.canvasHolder.appendChild(canvas);
    }
  }, {
    key: 'getResult',
    value: function getResult() {
      return this.continueResult;
    }
  }]);

  return Continue;
}();

exports.default = {
  create: function create(vet, name, separatriz, process) {
    return new Continue(vet, name, separatriz, process);
  }
};
var Class = exports.Class = Continue;

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Moda = function () {
  function Moda(vet) {
    _classCallCheck(this, Moda);

    this.data = vet;
    this.dataObj = [];
    this.amodal = false;
    this.moda = null;
    this.setup();
  }

  _createClass(Moda, [{
    key: 'setup',
    value: function setup() {
      this.createModa();
      this.defineModa();
    }
  }, {
    key: 'createModa',
    value: function createModa() {
      for (var i = 0; i < this.data.length; i += 1) {
        var obj = {
          number: this.data[i],
          cont: 1
        };
        var haveNumber = 0;
        for (var index = 0; index < this.dataObj.length; index += 1) {
          if (obj.number === this.dataObj[index].number) {
            this.dataObj[index].cont += 1;
            haveNumber += 1;
          }
        }
        if (haveNumber === 0) {
          this.dataObj.push(obj);
        }
      }
    }
  }, {
    key: 'defineModa',
    value: function defineModa() {
      var _this = this;

      var contAmodal = 0;
      var modaMaior = [{ number: 0, cont: 0 }];

      for (var i = 0, j = 0; i < this.dataObj.length; i += 1) {
        if (this.dataObj[j].cont === this.dataObj[i].cont) {
          contAmodal += 1;
        }
      }

      if (contAmodal === this.dataObj.length) {
        this.amodal = true;
      } else {
        for (var _i = 0; _i < this.dataObj.length; _i += 1) {
          if (modaMaior[0].cont < this.dataObj[_i].cont) {
            modaMaior = [];
            modaMaior[0] = this.dataObj[_i];
          } else if (modaMaior[0].cont === this.dataObj[_i].cont) {
            modaMaior.push(this.dataObj[_i]);
          }
        }
      }

      if (this.amodal) {
        this.moda = 'Amodal';
      } else {
        this.moda = [];
        modaMaior.forEach(function (obj, i) {
          _this.moda[i] = obj.number;
        });
      }
    }
  }, {
    key: 'getResult',
    value: function getResult() {
      return this.dataObj;
    }
  }, {
    key: 'getModa',
    value: function getModa() {
      return this.moda;
    }
  }]);

  return Moda;
}();

exports.default = {
  create: function create(vet) {
    return new Moda(vet);
  }
};
var Class = exports.Class = Moda;

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Median = function () {
  function Median(vet, type) {
    _classCallCheck(this, Median);

    this.data = vet;
    this.type = type;
    this.result = null;
    this.setup();
  }

  _createClass(Median, [{
    key: 'setup',
    value: function setup() {
      if (this.data.length % 2 === 0) {
        if (this.type === 'word') {
          this.result = [this.data[this.data.length / 2 - 1], this.data[this.data.length / 2]];
        } else if (this.type === 'number') {
          this.result = parseFloat((this.data[this.data.length / 2 - 1] + this.data[this.data.length / 2]) / 2); // eslint-disable-line
        }
      } else {
        this.result = this.data[parseInt(this.data.length / 2, 10)];
      }
    }
  }, {
    key: 'getResult',
    value: function getResult() {
      return this.result;
    }
  }]);

  return Median;
}();

exports.default = {
  create: function create(vet, type) {
    return new Median(vet, type);
  }
};
var Class = exports.Class = Median;

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Order = function () {
  function Order(vet, type, orderWords) {
    _classCallCheck(this, Order);

    this.vet = vet;
    this.type = type;
    this.orderWords = orderWords;
    this.vetLetter = [];
    this.setup();
  }

  _createClass(Order, [{
    key: 'setup',
    value: function setup() {
      this.chooseOrder();
    }
  }, {
    key: 'chooseOrder',
    value: function chooseOrder() {
      if (this.orderWords === undefined) {
        if (this.type === 'crescent') {
          this.orderCrescent();
        } else if (this.type === 'descreasing') {
          this.orderDescreasing();
        }
      } else if (this.orderWords !== undefined) {
        this.organizerWords();
      }
    }
  }, {
    key: 'organizerWords',
    value: function organizerWords() {
      for (var i = 0; i < this.orderWords.length; i += 1) {
        for (var j = 0; j < this.vet.length; j += 1) {
          if (this.orderWords[i] === this.vet[j]) {
            this.vetLetter.push(this.vet[j]);
          }
        }
      }
      this.vet = this.vetLetter;
    }
  }, {
    key: 'orderCrescent',
    value: function orderCrescent() {
      for (var i = 0; i < this.vet.length; i += 1) {
        for (var j = 0; j < this.vet.length; j += 1) {
          if (this.vet[i] < this.vet[j]) {
            var aux = this.vet[i];
            this.vet[i] = this.vet[j];
            this.vet[j] = aux;
          }
        }
      }
    }
  }, {
    key: 'orderDescreasing',
    value: function orderDescreasing() {
      for (var i = 0; i < this.vet.length; i += 1) {
        for (var j = 0; j < this.vet.length; j += 1) {
          if (this.vet[i] > this.vet[j]) {
            var aux = this.vet[j];
            this.vet[j] = this.vet[i];
            this.vet[i] = aux;
          }
        }
      }
    }
  }, {
    key: 'getResult',
    value: function getResult() {
      return this.vet;
    }
  }]);

  return Order;
}();

exports.default = {
  create: function create(vet, type, orderWords) {
    return new Order(vet, type, orderWords);
  }
};
var Class = exports.Class = Order;

/***/ })

},[135]);