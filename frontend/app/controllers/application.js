import Ember from 'ember';

export default
Ember.Controller.extend({
  selectedItem: null,
  actions: {
    selectionChanged: function (item) {
      this.set('selectedItem', item);
    }
  }
});
