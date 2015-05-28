import Ember from 'ember';

export default
Ember.Component.extend({
  tagName: 'select',
  classNames: ['form-control'],
  classNameBindings: ['inputSize'],
  attributeBindings: ['style'],

  inputSize: 'input-md',
  style: 'display: hidden',
  multiple: false,
  selectedItem: null,
  placeholder: '',

  didInsertElement: function () {
    var self = this;
    var options = {};

    options.placeholder = self.get('placeholder');
    options.multiple = self.get('multiple');
    options.allowClear = true;
    options.minimumInputLength = 2;

    options.escapeMarkup = function (markup) {
      return markup;
    };

    options.templateResult = function (repo) {
      if (repo.loading) {
        return repo.text;
      }
      return repo.symbol + " : " + repo.name;
    };

    options.templateSelection = function (repo) {
      var value = repo.symbol !== undefined ? repo.symbol + " : " + repo.name : "Search Stock Names and/or Symbols";
      self.set('selectedItem', repo.symbol !== undefined ? repo : null);
      return value;
    };

    options.ajax = {
      url: "http://127.0.0.1:8080/service/stocks",
      dataType: 'json',
      delay: 250,
      data: function (params) {
        return {
          q: params.term, // search term
          page: params.page
        };
      },
      processResults: function (data) {
        return {
          results: data
        };
      },
      cache: true
    };

    self._select = self.$().select2(options);
    self._select.change(function () {
      var item = self.get('selectedItem');
      if (item != null) {
        self.sendAction('selectionChanged', item);
      }
    });
  }
});
