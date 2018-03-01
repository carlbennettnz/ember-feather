import Controller from '@ember/controller';
import icons from 'ember-feather/data/icons'

export default Controller.extend({
  init() {        
    this.set('icons', Object.keys(icons))
  }
})