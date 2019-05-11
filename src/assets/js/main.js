import SimpleTabs from 'simple-tabs-js';
import html2canvas from 'html2canvas';
import AccessibillityBar from './components/accessibility-bar';
import Login from './components/login';
import HelpBox from './components/helpBox';
import Descriptive from './components/descriptive';
import Uniform from './components/uniform';
import Binomial from './components/binomial';
import Normal from './components/normal';

const tabs = new SimpleTabs('[data-form]', { // eslint-disable-line
  minHeight: false,
});

HelpBox.create('[data-help-box]');
AccessibillityBar.create('[data-accessibillity-bar]');
Login.create();

Descriptive.create();
Uniform.create();
Binomial.create();
Normal.create();

html2canvas(document.body).then((canvas) => {
  document.body.appendChild(canvas);
});
