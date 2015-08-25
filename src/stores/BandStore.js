var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var _ = require('lodash');

var _bands = {};

function loadBands(bands) {
  _bands = bands;
}

function createBand(band) {
  _bands.push(band);
}

function updateBand(band) {
  _bands = _.map(_bands, function(prevBand) {
    if (prevBand.id === band.id) {
      return band;
    } else {
      return prevBand;
    }
  })
}

var BandStore = _.assign({}, EventEmitter.prototype, {
  emitChange: function() {
    this.emit('change');
  },

    addChangeListener: function(callback) {
    this.on('change', callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  },

  get: function(id) {
    return _.find(_bands, {id: id});
  },

  getAll: function() {
    return _bands;
  }
});

BandStore.dispatchToken = AppDispatcher.register(function(action) {

  switch(action.type) {

    case AppConstants.LOAD_BANDS:
      loadBands(action.data);
      BandStore.emitChange();
      break;

    case AppConstants.CREATE_BAND:
      createBand(action.band);
      var url = '/band/' + action.band.id;
      BandStore.emitChange();
      action.caller.transitionTo(url);
      break;

    case AppConstants.BAND_MEMBERSHIP:
      updateBand(action.band);
      BandStore.emitChange();
      break;

    case AppConstants.KICK_FROM_BAND:
      updateBand(action.band);
      BandStore.emitChange();
      break;

    default:
      // do nothing
  }

});

module.exports = BandStore;