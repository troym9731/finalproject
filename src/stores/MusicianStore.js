var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var $ = require('jquery');
var _ = require('lodash');

var _users = {};

function loadUsers(users) {
  _users = users;
}

var MusicianStore = _.assign({}, EventEmitter.prototype, {
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
    return _.find(_users, {id: id});
  },

  getAllUsers: function() {
    return _users;
  }
});

MusicianStore.dispatchToken = AppDispatcher.register(function(action) {

  switch(action.type) {

    case AppConstants.LOAD_USERS:
      loadUsers(action.data);
      break;

    // case AppConstants.CREATE_MESSAGE:
    //   var message = ChatMessageUtils.getCreatedMessageData(
    //     action.text,
    //     action.currentThreadID
    //   );
    //   _messages[message.id] = message;
    //   MusicianStore.emitChange();
    //   break;

    // case AppConstants.RECEIVE_RAW_MESSAGES:
    //   _addMessages(action.rawMessages);
    //   AppDispatcher.waitFor([ThreadStore.dispatchToken]);
    //   _markAllInThreadRead(ThreadStore.getCurrentID());
    //   MusicianStore.emitChange();
    //   break;

    default:
      // do nothing
  }

});

module.exports = MusicianStore;