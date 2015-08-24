var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var $ = require('jquery');
var _ = require('lodash');

var _users = {};

function loadUsers(users) {
  _users = users;
}

function newUser(user) {
  _users.push(user);
}

function joinBand(user) {
  _users = _.map(_users, function(prevUser) {
    if (prevUser.id === user.id) {
      prevUser.inBand = user.inBand;
      return prevUser;
    } else {
      return prevUser;
    }
  })
}

function leaveBand(user) {
  _users = _.map(_users, function(prevUser) {
    if (prevUser.id === user.id) {
      prevUser.inBand = user.inBand;
      return prevUser;
    } else {
      return prevUser;
    }
  })
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

  getAll: function() {
    return _users;
  }
});

MusicianStore.dispatchToken = AppDispatcher.register(function(action) {

  switch(action.type) {

    case AppConstants.LOAD_USERS:
      loadUsers(action.data);
      MusicianStore.emitChange();
      break;

    case AppConstants.CREATE_USER:
      newUser(action.data);
      var url = '/user/' + action.data.id;
      MusicianStore.emitChange();
      action.caller.transitionTo(url);
      break;

    case AppConstants.JOIN_BAND:
      joinBand(action.user);
      MusicianStore.emitChange();
      break;

    case AppConstants.LEAVE_BAND:
      leaveBand(action.user);
      MusicianStore.emitChange();
      break;

    default:
      // do nothing
  }

});

module.exports = MusicianStore;