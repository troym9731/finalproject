var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var _ = require('lodash');

var _bands = {};

function loadBands(bands) {
  _bands = bands;
}

function joinBand(band) {
  _bands = _.map(_bands, function(prevBand) {
    if (prevBand.id === band.id) {
      prevBand.members = band.members;
      return prevBand;
    } else {
      return prevBand;
    }
  })
}

function leaveBand(band) {
  _bands = _.map(_bands, function(prevBand) {
    if (prevBand.id === band.id) {
      prevBand.members = band.members;
      return prevBand;
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

    case AppConstants.JOIN_BAND:
      joinBand(action.band);
      BandStore.emitChange();
      break;

    case AppConstants.LEAVE_BAND:
      leaveBand(action.band);
      BandStore.emitChange();
      break;

    default:
      // do nothing
  }

});

module.exports = BandStore;