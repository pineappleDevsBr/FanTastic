webpackJsonp([0],{12:function(t,e,a){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var a=0;a<e.length;a++){var i=e[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,a,i){return a&&t(e.prototype,a),i&&t(e,i),e}}(),n=function(){function t(e){i(this,t),this.data=e,this.dataObj=[],this.amodal=!1,this.moda=null,this.setup()}return s(t,[{key:"setup",value:function(){this.createModa(),this.defineModa()}},{key:"createModa",value:function(){for(var t=0;t<this.data.length;t+=1){for(var e={number:this.data[t],cont:1},a=0,i=0;i<this.dataObj.length;i+=1)e.number===this.dataObj[i].number&&(this.dataObj[i].cont+=1,a+=1);0===a&&this.dataObj.push(e)}}},{key:"defineModa",value:function(){for(var t=this,e=0,a=[{number:0,cont:0}],i=0;i<this.dataObj.length;i+=1)this.dataObj[0].cont===this.dataObj[i].cont&&(e+=1);if(e===this.dataObj.length)this.amodal=!0;else for(var s=0;s<this.dataObj.length;s+=1)a[0].cont<this.dataObj[s].cont?(a=[],a[0]=this.dataObj[s]):a[0].cont===this.dataObj[s].cont&&a.push(this.dataObj[s]);this.amodal?this.moda="Amodal":(this.moda=[],a.forEach(function(e,a){t.moda[a]=e.number}))}},{key:"getResult",value:function(){return this.dataObj}},{key:"getModa",value:function(){return this.moda}}]),t}();e.default={create:function(t){return new n(t)}},e.Class=n},13:function(t,e,a){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var a=0;a<e.length;a++){var i=e[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,a,i){return a&&t(e.prototype,a),i&&t(e,i),e}}(),n=function(){function t(e,a){i(this,t),this.data=e,this.type=a,this.result=null,this.setup()}return s(t,[{key:"setup",value:function(){this.data.length%2==0?"word"===this.type?this.result=[this.data[this.data.length/2-1],this.data[this.data.length/2]]:"number"===this.type&&(this.result=parseFloat((this.data[this.data.length/2-1]+this.data[this.data.length/2])/2)):this.result=this.data[parseInt(this.data.length/2,10)]}},{key:"getResult",value:function(){return this.result}}]),t}();e.default={create:function(t,e){return new n(t,e)}},e.Class=n},14:function(t,e,a){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var a=0;a<e.length;a++){var i=e[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,a,i){return a&&t(e.prototype,a),i&&t(e,i),e}}(),n=function(){function t(e,a,s){i(this,t),this.vet=e,this.type=a,this.orderWords=s,this.vetLetter=[],this.setup()}return s(t,[{key:"setup",value:function(){this.chooseOrder()}},{key:"chooseOrder",value:function(){void 0===this.orderWords?"crescent"===this.type?this.orderCrescent():"descreasing"===this.type&&this.orderDescreasing():void 0!==this.orderWords&&this.organizerWords()}},{key:"organizerWords",value:function(){for(var t=0;t<this.orderWords.length;t+=1)for(var e=0;e<this.vet.length;e+=1)this.orderWords[t]===this.vet[e]&&this.vetLetter.push(this.vet[e]);this.vet=this.vetLetter}},{key:"orderCrescent",value:function(){for(var t=0;t<this.vet.length;t+=1)for(var e=0;e<this.vet.length;e+=1)if(this.vet[t]<this.vet[e]){var a=this.vet[t];this.vet[t]=this.vet[e],this.vet[e]=a}}},{key:"orderDescreasing",value:function(){for(var t=0;t<this.vet.length;t+=1)for(var e=0;e<this.vet.length;e+=1)if(this.vet[t]>this.vet[e]){var a=this.vet[e];this.vet[e]=this.vet[t],this.vet[t]=a}}},{key:"getResult",value:function(){return this.vet}}]),t}();e.default={create:function(t,e,a){return new n(t,e,a)}},e.Class=n},150:function(t,e,a){t.exports=a(151)},151:function(t,e,a){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var s=a(152),n=i(s),r=a(153),l=i(r),u=a(154),o=i(u);n.default.create("[data-form]"),n.default.create("[data-dropdown]"),l.default.create("[data-button-home]",".s-section--form"),o.default.create()},152:function(t,e,a){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var a=0;a<e.length;a++){var i=e[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,a,i){return a&&t(e.prototype,a),i&&t(e,i),e}}(),n=function(){function t(e){i(this,t),this.elm=document.querySelector(e),this.tabs=this.elm.querySelector("[data-list-tab]"),this.boxes=this.elm.querySelector("[data-list-box]"),this.tabsList=this.tabs.querySelectorAll("[data-tab]"),this.boxesList=this.boxes.querySelectorAll("[data-box]"),this.currentIndex=0,this.setup()}return s(t,[{key:"setup",value:function(){this.setupListeners()}},{key:"setupListeners",value:function(){for(var t=0;t<this.tabsList.length;t+=1){var e=t;this.tabsList[t].addEventListener("click",this.toggleClass.bind(this,e))}}},{key:"toggleClass",value:function(t){this.tabsList[this.currentIndex].classList.remove("is-active"),this.tabsList[t].classList.add("is-active"),this.boxesList[this.currentIndex].classList.remove("is-active"),this.boxesList[t].classList.add("is-active"),this.currentIndex=t}}]),t}();e.default={create:function(t){return new n(t)}},e.Class=n},153:function(t,e,a){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0}),e.Class=void 0;var s=function(){function t(t,e){for(var a=0;a<e.length;a++){var i=e[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,a,i){return a&&t(e.prototype,a),i&&t(e,i),e}}(),n=a(15),r=function(t){return t&&t.__esModule?t:{default:t}}(n),l=function(){function t(e,a){i(this,t),this.elm=document.querySelector(e),this.target=document.querySelector(a),this.setup()}return s(t,[{key:"setup",value:function(){this.setupListener()}},{key:"setupListener",value:function(){var e=this;this.elm.addEventListener("click",function(){t.jumpToTarget(e.target)})}}],[{key:"jumpToTarget",value:function(t){(0,r.default)(t)}}]),t}();e.default={create:function(t,e){return new l(t,e)}},e.Class=l},154:function(t,e,a){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0}),e.Class=void 0;var n=function(){function t(t,e){for(var a=0;a<e.length;a++){var i=e[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,a,i){return a&&t(e.prototype,a),i&&t(e,i),e}}(),r=a(15),l=i(r),u=a(155),o=i(u),c=a(199),d=i(c),h=a(200),v=i(h),f=a(201),m=i(f),p=function(){function t(){s(this,t),this.button=document.querySelector("[data-button-descriptive]"),this.buttonFile=document.querySelector("[data-button-file]"),this.holderResult=document.querySelector("[data-result-holder]"),this.elm=null,this.radioHolder=null,this.separatrisHolder=null,this.separatrisItems=null,this.listRadio=null,this.data=null,this.dataName=null,this.orderOrdinal=null,this.result=null,this.dataConverted=[],this.setup()}return n(t,[{key:"setup",value:function(){t.disableLabel(),t.changeRange(),this.setupListener()}},{key:"setupListener",value:function(){var t=this;this.buttonFile.addEventListener("change",function(){t.readFile()}),this.button.addEventListener("click",function(e){e.preventDefault(),t.recoverData(),t.validateData()})}},{key:"readFile",value:function(){if(window.File&&window.FileReader&&window.FileList&&window.Blob){var t=this.buttonFile.files[0],e=document.querySelector("[data-dados]"),a=[/.txt$/,/.csv$/];if(a[0].test(t.name)||a[1].test(t.name)){var i=new FileReader;i.onload=function(){e.value=i.result},i.readAsText(t)}else alert("Escolha um arquivo no formato .txt ou .csv")}else alert("Seu navegador nao suporta essa funcionalidade :(")}},{key:"recoverData",value:function(){this.elm=document.querySelector("[data-descriptive]"),this.radioHolder=this.elm.querySelector("[data-radios]"),this.listRadio=this.radioHolder.querySelectorAll("input"),this.separatrisHolder=this.elm.querySelector("[data-separatriz]"),this.separatrisItems={radios:Array.from(this.separatrisHolder.querySelectorAll("input[type=radio]")),range:this.separatrisHolder.querySelector("input[type=range]").value,isChecked:null},this.separatrisItems.isChecked=this.wichyChecked(),this.data=this.elm.querySelector("[data-dados]").value,this.dataName=this.elm.querySelector("[data-name]").value,this.orderOrdinal=this.elm.querySelector("[data-order]").value}},{key:"wichyChecked",value:function(){var t=null;return this.separatrisItems.radios.forEach(function(e){!0===e.checked&&(t=e.id)}),t}},{key:"convertArray",value:function(){var t=/;$/;t.test(this.data)&&(this.data=this.data.replace(/;$/,"")),t.test(this.orderOrdinal)&&(this.orderOrdinal=this.orderOrdinal.replace(/;$/,"")),this.data=this.data.split(/;/),this.orderOrdinal=this.orderOrdinal.split(/;/),this.dataConverted=this.data.map(function(t){return parseFloat(t,10)})}},{key:"validateData",value:function(){!0===this.listRadio[1].checked?""===this.data||""===this.dataName||""===this.orderOrdinal?alert("preencha todos os campos"):(this.convertArray(),this.choiceTypeVariable(),this.appendResult()):""===this.data||""===this.dataName?alert("preencha todos os campos"):(this.convertArray(),this.choiceTypeVariable(),this.appendResult())}},{key:"choiceTypeVariable",value:function(){!0===this.listRadio[0].checked?this.result=o.default.create(this.data,this.dataName,this.separatrisItems).getResult():!0===this.listRadio[1].checked?this.result=d.default.create(this.data,this.dataName,this.orderOrdinal,this.separatrisItems).getResult():!0===this.listRadio[2].checked?this.result=v.default.create(this.dataConverted,this.dataName,this.separatrisItems).getResult():!0===this.listRadio[3].checked&&(this.result=m.default.create(this.dataConverted,this.dataName,this.separatrisItems).getResult())}},{key:"appendResult",value:function(){void 0!==this.result&&(-1===this.holderResult.className.indexOf("is-active")&&this.holderResult.classList.add("is-active"),this.holderResult.firstElementChild.firstElementChild.innerHTML="",this.holderResult.firstElementChild.firstElementChild.innerHTML=this.result,setTimeout(function(){(0,l.default)(".s-section--result")},500))}}],[{key:"changeRange",value:function(){var t=document.querySelector("[data-separatriz]"),e=Array.from(t.querySelectorAll("[type=radio]")),a=document.querySelector("[data-range]"),i=document.querySelector("[data-range-value]");e.forEach(function(t){t.addEventListener("click",function(){a.setAttribute("step",t.getAttribute("data-value")),i.innerHTML="Value: "+a.value})}),a.addEventListener("input",function(){i.innerHTML="Value: "+a.value})}},{key:"disableLabel",value:function(){for(var t=document.querySelector("[data-radios]"),e=t.querySelectorAll("input"),a=document.querySelector("[data-order]"),i=0;i<e.length;i+=1)!function(t){e[t].addEventListener("click",function(){"ordinal"===e[t].getAttribute("id")?a.removeAttribute("disabled"):(a.setAttribute("disabled",!0),a.value="")})}(i)}}]),t}();e.default={create:function(){return new p}},e.Class=p},155:function(t,e,a){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0}),e.Class=void 0;var n=function(){function t(t,e){for(var a=0;a<e.length;a++){var i=e[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,a,i){return a&&t(e.prototype,a),i&&t(e,i),e}}(),r=a(9),l=i(r),u=a(10),o=i(u),c=a(12),d=i(c),h=a(13),v=i(h),f=function(){function t(e,a,i){s(this,t),this.data=e,this.separatrizItems=i,this.separatrizResult=null,this.dataModa=[],this.name=a,this.simpleFrequencyPercentage=[],this.accumulatedFrequncy=[],this.accumulatedFrequncyPercentage=[],this.dynamicTable=[],this.canvasHolder=document.querySelector("[data-canvas]"),this.moda=null,this.mediana=null,this.nominalTemplate=l.default.template('<table style="text-align:center" border="1"> <tr><th>Classe</th> <th>{{=it.name}}</th> <th>Frequenca Simples</th> <th>Frequenca Relativa</th> <th>Frequenca Acumulada</th> <th>Frequenca Acumulada %</th> </tr>{{~it.dynamicTable :value:index}}<tr><td>{{=value.index}}</td> <td>{{=value.number}}</td><td>{{=value.cont}}</td><td>{{=value.fr}}</td><td>{{=value.fa}}</td><td>{{=value.fac}}</td></tr>{{~}}</table><p>Mediana: {{=it.mediana}}</p><p>Moda: {{=it.moda}}</p><p>Medida separatriz: {{=it.separatriz}}</p>'),this.nominalResult="",this.setup()}return n(t,[{key:"setup",value:function(){this.organizerData(),this.generateFrequency(),this.createModaMediana(),this.createSeparatriz(),this.createTable(),this.createChart()}},{key:"organizerData",value:function(){this.dataModa=d.default.create(this.data).getResult()}},{key:"createModaMediana",value:function(){this.mediana=v.default.create(this.data,"word").getResult(),this.moda=d.default.create(this.data).getModa()}},{key:"generateFrequency",value:function(){for(var t=0,e=0;e<this.dataModa.length;e+=1)this.simpleFrequencyPercentage[e]=(this.dataModa[e].cont/this.data.length*100).toFixed(2),this.accumulatedFrequncy[e]=this.dataModa[e].cont+t,this.accumulatedFrequncyPercentage[e]=(this.accumulatedFrequncy[e]/this.data.length*100).toFixed(2),t=this.dataModa[e].cont+t}},{key:"createSeparatriz",value:function(){this.separatrizResult=this.data[Math.round(this.data.length*(this.separatrizItems.range/100))-1],this.separatrizResult=this.separatrizItems.isChecked+": "+this.separatrizResult}},{key:"createTable",value:function(){for(var t=0;t<this.dataModa.length;t+=1){var e={index:t+1,number:this.dataModa[t].number,cont:this.dataModa[t].cont,fr:this.simpleFrequencyPercentage[t],fa:this.accumulatedFrequncy[t],fac:this.accumulatedFrequncyPercentage[t]};this.dynamicTable.push(e)}this.nominalResult=this.nominalTemplate({name:this.name,mediana:this.mediana,moda:this.moda,separatriz:this.separatrizResult,dynamicTable:this.dynamicTable})}},{key:"createChart",value:function(){var t=[],e=document.createElement("canvas");this.canvasHolder.innerHTML="",this.dataModa.forEach(function(e,a){t[a]=e.number}),new o.default(e,{type:"pie",data:{labels:t,datasets:[{data:this.simpleFrequencyPercentage}]}}),this.canvasHolder.appendChild(e)}},{key:"getResult",value:function(){return this.nominalResult}}]),t}();e.default={create:function(t,e,a){return new f(t,e,a)}},e.Class=f},180:function(t,e,a){function i(t){return a(s(t))}function s(t){var e=n[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var n={"./af":23,"./af.js":23,"./ar":24,"./ar-dz":25,"./ar-dz.js":25,"./ar-kw":26,"./ar-kw.js":26,"./ar-ly":27,"./ar-ly.js":27,"./ar-ma":28,"./ar-ma.js":28,"./ar-sa":29,"./ar-sa.js":29,"./ar-tn":30,"./ar-tn.js":30,"./ar.js":24,"./az":31,"./az.js":31,"./be":32,"./be.js":32,"./bg":33,"./bg.js":33,"./bm":34,"./bm.js":34,"./bn":35,"./bn.js":35,"./bo":36,"./bo.js":36,"./br":37,"./br.js":37,"./bs":38,"./bs.js":38,"./ca":39,"./ca.js":39,"./cs":40,"./cs.js":40,"./cv":41,"./cv.js":41,"./cy":42,"./cy.js":42,"./da":43,"./da.js":43,"./de":44,"./de-at":45,"./de-at.js":45,"./de-ch":46,"./de-ch.js":46,"./de.js":44,"./dv":47,"./dv.js":47,"./el":48,"./el.js":48,"./en-SG":49,"./en-SG.js":49,"./en-au":50,"./en-au.js":50,"./en-ca":51,"./en-ca.js":51,"./en-gb":52,"./en-gb.js":52,"./en-ie":53,"./en-ie.js":53,"./en-il":54,"./en-il.js":54,"./en-nz":55,"./en-nz.js":55,"./eo":56,"./eo.js":56,"./es":57,"./es-do":58,"./es-do.js":58,"./es-us":59,"./es-us.js":59,"./es.js":57,"./et":60,"./et.js":60,"./eu":61,"./eu.js":61,"./fa":62,"./fa.js":62,"./fi":63,"./fi.js":63,"./fo":64,"./fo.js":64,"./fr":65,"./fr-ca":66,"./fr-ca.js":66,"./fr-ch":67,"./fr-ch.js":67,"./fr.js":65,"./fy":68,"./fy.js":68,"./ga":69,"./ga.js":69,"./gd":70,"./gd.js":70,"./gl":71,"./gl.js":71,"./gom-latn":72,"./gom-latn.js":72,"./gu":73,"./gu.js":73,"./he":74,"./he.js":74,"./hi":75,"./hi.js":75,"./hr":76,"./hr.js":76,"./hu":77,"./hu.js":77,"./hy-am":78,"./hy-am.js":78,"./id":79,"./id.js":79,"./is":80,"./is.js":80,"./it":81,"./it-ch":82,"./it-ch.js":82,"./it.js":81,"./ja":83,"./ja.js":83,"./jv":84,"./jv.js":84,"./ka":85,"./ka.js":85,"./kk":86,"./kk.js":86,"./km":87,"./km.js":87,"./kn":88,"./kn.js":88,"./ko":89,"./ko.js":89,"./ku":90,"./ku.js":90,"./ky":91,"./ky.js":91,"./lb":92,"./lb.js":92,"./lo":93,"./lo.js":93,"./lt":94,"./lt.js":94,"./lv":95,"./lv.js":95,"./me":96,"./me.js":96,"./mi":97,"./mi.js":97,"./mk":98,"./mk.js":98,"./ml":99,"./ml.js":99,"./mn":100,"./mn.js":100,"./mr":101,"./mr.js":101,"./ms":102,"./ms-my":103,"./ms-my.js":103,"./ms.js":102,"./mt":104,"./mt.js":104,"./my":105,"./my.js":105,"./nb":106,"./nb.js":106,"./ne":107,"./ne.js":107,"./nl":108,"./nl-be":109,"./nl-be.js":109,"./nl.js":108,"./nn":110,"./nn.js":110,"./pa-in":111,"./pa-in.js":111,"./pl":112,"./pl.js":112,"./pt":113,"./pt-br":114,"./pt-br.js":114,"./pt.js":113,"./ro":115,"./ro.js":115,"./ru":116,"./ru.js":116,"./sd":117,"./sd.js":117,"./se":118,"./se.js":118,"./si":119,"./si.js":119,"./sk":120,"./sk.js":120,"./sl":121,"./sl.js":121,"./sq":122,"./sq.js":122,"./sr":123,"./sr-cyrl":124,"./sr-cyrl.js":124,"./sr.js":123,"./ss":125,"./ss.js":125,"./sv":126,"./sv.js":126,"./sw":127,"./sw.js":127,"./ta":128,"./ta.js":128,"./te":129,"./te.js":129,"./tet":130,"./tet.js":130,"./tg":131,"./tg.js":131,"./th":132,"./th.js":132,"./tl-ph":133,"./tl-ph.js":133,"./tlh":134,"./tlh.js":134,"./tr":135,"./tr.js":135,"./tzl":136,"./tzl.js":136,"./tzm":137,"./tzm-latn":138,"./tzm-latn.js":138,"./tzm.js":137,"./ug-cn":139,"./ug-cn.js":139,"./uk":140,"./uk.js":140,"./ur":141,"./ur.js":141,"./uz":142,"./uz-latn":143,"./uz-latn.js":143,"./uz.js":142,"./vi":144,"./vi.js":144,"./x-pseudo":145,"./x-pseudo.js":145,"./yo":146,"./yo.js":146,"./zh-cn":147,"./zh-cn.js":147,"./zh-hk":148,"./zh-hk.js":148,"./zh-tw":149,"./zh-tw.js":149};i.keys=function(){return Object.keys(n)},i.resolve=s,t.exports=i,i.id=180},199:function(t,e,a){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0}),e.Class=void 0;var n=function(){function t(t,e){for(var a=0;a<e.length;a++){var i=e[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,a,i){return a&&t(e.prototype,a),i&&t(e,i),e}}(),r=a(9),l=i(r),u=a(10),o=i(u),c=a(14),d=i(c),h=a(12),v=i(h),f=a(13),m=i(f),p=function(){function t(e,a,i,n){s(this,t),this.data=e,this.name=a,this.order=i,this.separatrizItems=n,this.separatrizResult=null,this.dataModa=[],this.simpleFrequencyPercentage=[],this.accumulatedFrequncy=[],this.accumulatedFrequncyPercentage=[],this.dynamicTable=[],this.canvasHolder=document.querySelector("[data-canvas]"),this.moda=null,this.mediana=null,this.ordinalTemplate=l.default.template('<table style="text-align:center" border="1"> <tr><th>Classe</th> <th>{{=it.name}}</th> <th>Frequenca Simples</th> <th>Frequenca Relativa</th> <th>Frequenca Acumulada</th> <th>Frequenca Acumulada %</th> </tr>{{~it.dynamicTable :value:index}}<tr><td>{{=value.index}}</td> <td>{{=value.number}}</td><td>{{=value.cont}}</td><td>{{=value.fr}}</td><td>{{=value.fa}}</td><td>{{=value.fac}}</td></tr>{{~}}</table><p>Mediana: {{=it.mediana}}</p><p>Moda: {{=it.moda}}</p><p>Medida separatriz: {{=it.separatriz}}</p>'),this.ordinalResult=null,this.setup()}return n(t,[{key:"setup",value:function(){this.organizerData(),this.generateFrequency(),this.createModaMediana(),this.createSeparatriz(),this.createTable(),this.createChart()}},{key:"organizerData",value:function(){this.data=d.default.create(this.data,"crescent",this.order).getResult(),this.dataModa=v.default.create(this.data).getResult()}},{key:"generateFrequency",value:function(){for(var t=0,e=0;e<this.dataModa.length;e+=1)this.simpleFrequencyPercentage[e]=(this.dataModa[e].cont/this.data.length*100).toFixed(2),this.accumulatedFrequncy[e]=this.dataModa[e].cont+t,this.accumulatedFrequncyPercentage[e]=(this.accumulatedFrequncy[e]/this.data.length*100).toFixed(2),t=this.dataModa[e].cont+t}},{key:"createModaMediana",value:function(){this.mediana=m.default.create(this.data,"word").getResult(),this.moda=v.default.create(this.data).getModa()}},{key:"createSeparatriz",value:function(){this.separatrizResult=this.data[Math.round(this.data.length*(this.separatrizItems.range/100))-1],this.separatrizResult=this.separatrizItems.isChecked+": "+this.separatrizResult}},{key:"createTable",value:function(){for(var t=0;t<this.dataModa.length;t+=1){var e={index:t+1,number:this.dataModa[t].number,cont:this.dataModa[t].cont,fr:this.simpleFrequencyPercentage[t],fa:this.accumulatedFrequncy[t],fac:this.accumulatedFrequncyPercentage[t]};this.dynamicTable.push(e)}this.ordinalResult=this.ordinalTemplate({name:this.name,mediana:this.mediana,moda:this.moda,separatriz:this.separatrizResult,dynamicTable:this.dynamicTable})}},{key:"createChart",value:function(){var t=[],e=document.createElement("canvas");this.canvasHolder.innerHTML="",this.dataModa.forEach(function(e,a){t[a]=e.number}),new o.default(e,{type:"pie",data:{labels:t,datasets:[{data:this.simpleFrequencyPercentage}]}}),this.canvasHolder.appendChild(e)}},{key:"getResult",value:function(){return this.ordinalResult}}]),t}();e.default={create:function(t,e,a,i){return new p(t,e,a,i)}},e.Class=p},200:function(t,e,a){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0}),e.Class=void 0;var n=function(){function t(t,e){for(var a=0;a<e.length;a++){var i=e[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,a,i){return a&&t(e.prototype,a),i&&t(e,i),e}}(),r=a(9),l=i(r),u=a(10),o=i(u),c=a(12),d=i(c),h=a(13),v=i(h),f=a(14),m=i(f),p=function(){function t(e,a,i){s(this,t),this.data=e,this.dataModa=[],this.name=a,this.separatrizItems=i,this.separatrizResult=null,this.simpleFrequencyPercentage=[],this.accumulatedFrequncy=[],this.accumulatedFrequncyPercentage=[],this.dynamicTable=[],this.canvasHolder=document.querySelector("[data-canvas]"),this.moda=null,this.mediana=null,this.media=null,this.discreetTemplate=l.default.template('<table style="text-align:center" border="1"> <tr><th>Classe</th> <th>{{=it.name}}</th> <th>Frequenca Simples</th> <th>Frequenca Relativa</th> <th>Frequenca Acumulada</th> <th>Frequenca Acumulada %</th> </tr>{{~it.dynamicTable :value:index}}<tr><td>{{=value.index}}</td> <td>{{=value.number}}</td><td>{{=value.cont}}</td><td>{{=value.fr}}</td><td>{{=value.fa}}</td><td>{{=value.fac}}</td></tr>{{~}}</table><p>Mediana: {{=it.mediana}}</p><p>Moda: {{=it.moda}}</p> <p>Media: {{=it.media}}</p><p>Medida separatriz: {{=it.separatriz}}</p>'),this.discreetResult="",this.setup()}return n(t,[{key:"setup",value:function(){this.organizerData(),this.generateFrequency(),this.createModaMediana(),this.createSeparatriz(),this.createTable(),this.createChart()}},{key:"organizerData",value:function(){this.data=m.default.create(this.data,"crescent").getResult(),this.dataModa=d.default.create(this.data).getResult(),console.log(this.data)}},{key:"createModaMediana",value:function(){this.mediana=v.default.create(this.data,"number").getResult(),this.moda=d.default.create(this.data).getModa();for(var t=0,e=0;e<this.dataModa.length;e+=1)t+=this.dataModa[e].number*this.dataModa[e].cont;this.media=t/this.data.length}},{key:"generateFrequency",value:function(){for(var t=0,e=0;e<this.dataModa.length;e+=1)this.simpleFrequencyPercentage[e]=(this.dataModa[e].cont/this.data.length*100).toFixed(2),this.accumulatedFrequncy[e]=this.dataModa[e].cont+t,this.accumulatedFrequncyPercentage[e]=(this.accumulatedFrequncy[e]/this.data.length*100).toFixed(2),t=this.dataModa[e].cont+t}},{key:"createSeparatriz",value:function(){this.separatrizResult=this.data[Math.round(this.data.length*(this.separatrizItems.range/100))-1],this.separatrizResult=this.separatrizItems.isChecked+": "+this.separatrizResult}},{key:"createTable",value:function(){for(var t=0;t<this.dataModa.length;t+=1){var e={index:t+1,number:this.dataModa[t].number,cont:this.dataModa[t].cont,fr:this.simpleFrequencyPercentage[t],fa:this.accumulatedFrequncy[t],fac:this.accumulatedFrequncyPercentage[t]};this.dynamicTable.push(e)}this.discreetResult=this.discreetTemplate({name:this.name,media:this.media,mediana:this.mediana,moda:this.moda,separatriz:this.separatrizResult,dynamicTable:this.dynamicTable})}},{key:"createChart",value:function(){var t=[],e=document.createElement("canvas");this.canvasHolder.innerHTML="",this.dataModa.forEach(function(e,a){t[a]=e.number}),new o.default(e,{type:"pie",data:{labels:t,datasets:[{data:this.simpleFrequencyPercentage}]}}),this.canvasHolder.appendChild(e)}},{key:"getResult",value:function(){return this.discreetResult}}]),t}();e.default={create:function(t,e,a){return new p(t,e,a)}},e.Class=p},201:function(t,e,a){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0}),e.Class=void 0;var n=function(){function t(t,e){for(var a=0;a<e.length;a++){var i=e[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,a,i){return a&&t(e.prototype,a),i&&t(e,i),e}}(),r=a(9),l=i(r),u=a(10),o=i(u),c=a(14),d=i(c),h=a(12),v=i(h),f=function(){function t(e,a){s(this,t),this.At=null,this.result=null,this.intervalNumber=null,this.valueMediana=null,this.valueModa=null,this.valueMedia=null,this.dataModa=[],this.k=[],this.simpleFrequencyPercentage=[],this.accumulatedFrequncy=[],this.accumulatedFrequncyPercentage=[],this.dynamicTable=[],this.vetInterval=[],this.vet=e,this.name=a,this.canvasHolder=document.querySelector("[data-canvas]"),this.continueTemplate=l.default.template('<table style="text-align:center" border="1"><tr><th>Classes</th><th>{{=it.name}}</th><th>Frequenca Simples</th><th>Frequenca Relativa</th><th>Frequenca Acumulada</th><th>Frequenca Acumulada %</th></tr>{{~it.dynamicTable :value:index}}<tr><td>{{=value.class}}</td><td>{{=value.valorInicial}} |&#8212; {{=value.valorFinal}}</td><td>{{=value.cont}}</td><td>{{=value.fr}}</td><td>{{=value.fa}}</td><td>{{=value.fac}}</td></tr>{{~}}</table><br/><p>Moda: {{=value.moda}}</p><p>Média: {{=value.media}}</p><p>Mediana: {{=value.mediana}}</p>'),this.continueResult="",this.setup()}return n(t,[{key:"setup",value:function(){this.oraganizedArray(),this.amplitude(),this.classes(),this.valueInterval(),this.createModa(),this.interval(),this.generateFrequency(),this.separatriz(),this.media(),this.moda(),this.mediana(),this.createTable(),this.createChart()}},{key:"oraganizedArray",value:function(){this.vet=d.default.create(this.vet,"crescent").getResult()}},{key:"amplitude",value:function(){this.At=this.vet[this.vet.length-1]-this.vet[0]}},{key:"classes",value:function(){this.K=[parseInt(Math.sqrt(this.vet.length))-1,parseInt(Math.sqrt(this.vet.length)),parseInt(Math.sqrt(this.vet.length))+1]}},{key:"valueInterval",value:function(){for(var t=this.At+1,e=0;0===e;){for(var a=0;a<3;a+=1)if(t%this.K[a]==0){this.intervalNumber=t/this.K[a],e+=1;break}t+=1}}},{key:"createModa",value:function(){for(var t=this.vet[0],e=null;t<=this.vet[this.vet.length-1];){e=t+this.intervalNumber;for(var a=0;a<this.vet.length;a+=1)this.vet[a]>=t&&this.vet[a]<e&&(this.dataModa=v.default.create(this.vet).getResult());t+=this.intervalNumber}}},{key:"interval",value:function(){for(var t=this.dataModa[0].number,e=this.dataModa[0].cont,a=t+this.intervalNumber,i=1;i<this.dataModa.length;i+=1)if(this.dataModa[i].number>=a){var s=new Object;s.valorInicial=t,s.valorFinal=a,s.cont=e,this.vetInterval.push(s),t=a,a=t+this.intervalNumber,e=this.dataModa[i].cont}else this.dataModa[i].number<a&&(e+=this.dataModa[i].cont);var n=new Object;n.valorInicial=t,n.valorFinal=a,n.cont=e,this.vetInterval.push(n)}},{key:"generateFrequency",value:function(){for(var t=0,e=0;e<this.vetInterval.length;e+=1)this.simpleFrequencyPercentage[e]=(this.vetInterval[e].cont/this.vet.length*100).toFixed(2),this.accumulatedFrequncy[e]=this.vetInterval[e].cont+t,this.accumulatedFrequncyPercentage[e]=(this.accumulatedFrequncy[e]/this.vet.length*100).toFixed(2),t=this.vetInterval[e].cont+t}},{key:"separatrizGeral",value:function(t){for(var e=t,a=null,i=null,s=null,n=0;n<this.vet.length;n+=1)if(parseInt(e)==n)for(var r=this.vet[n],l=0;l<this.vetInterval.length;l+=1)r>=this.vetInterval[l].valorInicial&&r<this.vetInterval[l].valorFinal&&(a=this.vetInterval[l].valorInicial,i=this.vetInterval[l].cont,s=l-1<0?0:this.accumulatedFrequncy[l-1]);console.log("I SG: "+a),console.log("posicao SG: "+e),console.log("facAnt SG: "+s),console.log("find SG: "+i),console.log("intervalNumber SG: "+this.intervalNumber),this.result=(a+(e-s)/i*this.intervalNumber).toFixed(2)}},{key:"separatriz",value:function(){var t=Number(.94*this.vet.length).toFixed(2);console.log("posição: "+t),this.separatrizGeral(t);var e=this.result;console.log("Vet.lenght: "+this.vet.length),console.log("P94: "+e,isFinite(e))}},{key:"mediana",value:function(){var t=this.vet.length/2;this.separatrizGeral(t),this.valueMediana=this.result}},{key:"media",value:function(){for(var t=null,e=0;e<this.vetInterval.length;e+=1)t+=(this.vetInterval[e].valorFinal+this.vetInterval[e].valorInicial)/2*this.vetInterval[e].cont;this.valueMedia=t/this.vet.length}},{key:"moda",value:function(){for(var t=null,e=null,a=0;a<this.vetInterval.length;a+=1)this.vetInterval[a].cont>t&&(t=this.vetInterval[a].cont,e=a);this.valueModa=(this.vetInterval[e].valorFinal+this.vetInterval[e].valorInicial)/2}},{key:"createTable",value:function(){for(var t=0;t<this.vetInterval.length;t+=1){var e={class:t+1,valorInicial:this.vetInterval[t].valorInicial,valorFinal:this.vetInterval[t].valorFinal,cont:this.vetInterval[t].cont,fr:this.simpleFrequencyPercentage[t],fa:this.accumulatedFrequncy[t],fac:this.accumulatedFrequncyPercentage[t],moda:this.valueModa,media:this.valueMedia,mediana:this.valueMediana};this.dynamicTable.push(e)}this.continueResult=this.continueTemplate({name:this.name,dynamicTable:this.dynamicTable})}},{key:"createChart",value:function(){var t=[],e=document.createElement("canvas");this.canvasHolder.innerHTML="",this.vetInterval.forEach(function(e,a){t[a]=e.valorInicial+" |- "+e.valorFinal}),new o.default(e,{type:"bar",data:{labels:t,datasets:[{label:"Frequencia Relativa",data:this.simpleFrequencyPercentage}]}}),this.canvasHolder.appendChild(e)}},{key:"getResult",value:function(){return this.continueResult}}]),t}();e.default={create:function(t,e){return new f(t,e)}},e.Class=f}},[150]);