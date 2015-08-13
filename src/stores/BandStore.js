var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var _ = require('lodash');

var BandStore = _.assign({}, EventEmitter.prototype, {
  emitChange: function() {
    this.emit('change');
  },

    addChangeListener: function(callback) {
    this.on('change', callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }
});