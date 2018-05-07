import Component from '@ember/component';
import layout from '../templates/components/fe-icon';
import { get, set } from '@ember/object';

import icons from '../data/icons';
import fallbackIfUndefined from '../utils/computed-fallback-if-undefined';

export default Component.extend({
  layout,
  // tagName: '',
  classNames: ['fe-icon', 'inline'],
  positionalParams: 'icon',

  size: fallbackIfUndefined('24'),
  color: fallbackIfUndefined('#000'),
  weight: fallbackIfUndefined('2'),

  // Lifecycle hooks
  init() {
    this._super(...arguments);

    set(this, 'innerContent', icons[get(this, 'icon')]);
  }
}).reopenClass({
  positionalParams: 'icon'
})
