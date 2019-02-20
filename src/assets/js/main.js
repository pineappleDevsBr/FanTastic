import SwitchTab from './components/switchTab';
import JumpButton from './components/jumpButton';
import Descriptive from './components/descriptive';

SwitchTab.create('[data-form]');
SwitchTab.create('[data-dropdown]');
JumpButton.create('[data-button-home]', '.s-section--form');

Descriptive.create();
