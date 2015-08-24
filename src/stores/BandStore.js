var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var _ = require('lodash');

var _bands = {};

function loadBands(bands) {
  _bands = bands;
}

function joinBand(band) {
  console.log(_bands)
  console.log(band)
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

    // case AppConstants.CREATE_MESSAGE:
    //   var message = ChatMessageUtils.getCreatedMessageData(
    //     action.text,
    //     action.currentThreadID
    //   );
    //   _messages[message.id] = message;
    //   BandStore.emitChange();
    //   break;

    // case AppConstants.RECEIVE_RAW_MESSAGES:
    //   _addMessages(action.rawMessages);
    //   AppDispatcher.waitFor([ThreadStore.dispatchToken]);
    //   _markAllInThreadRead(ThreadStore.getCurrentID());
    //   BandStore.emitChange();
    //   break;

    default:
      // do nothing
  }

});

module.exports = BandStore;