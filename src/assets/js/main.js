import SimpleTabs from 'simple-tabs-js';
import AccessibillityBar from './components/accessibility-bar';
import Login from './components/login';
import HelpBox from './components/helpBox';
import Descriptive from './components/descriptive';
import Uniform from './components/uniform';
import Binomial from './components/binomial';

const tabs = new SimpleTabs('[data-form]', { // eslint-disable-line
  minHeight: false,
});

HelpBox.create('[data-help-box]');
AccessibillityBar.create('[data-accessibillity-bar]');
Login.create();

Descriptive.create();
Uniform.create();
Binomial.create();
