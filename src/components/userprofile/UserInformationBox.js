var React = require('react');
var UserImage = require('./UserImage');
var UserContent = require('./UserContent');
var ProfileActions = require('../../actions/ProfileActions');
var MusicianStore = require('../../stores/MusicianStore');
var BandStore = require('../../stores/BandStore');
var _ = require('lodash');
var $ = require('jquery');

var UserInformationBox = React.createClass({
  getInitialState: function() {
    var id = +this.props.userId;
    return {
      user: MusicianStore.get(id),
      bands: BandStore.getAll()
    }
  },

  componentDidMount: function() {
    MusicianStore.addChangeListener(this._onChange);
    BandStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    MusicianStore.removeChangeListener(this._onChange);
    BandStore.removeChangeListener(this._onChange);
  },

  render: function() {
    var id = +this.props.userId;
    return (
      <div className="user-profile">
        <UserImage userId={id} user={this.state.user} bands={this.state.bands} />
        <UserContent userId={id} user={this.state.user} bands={this.state.bands} />
      </div>
    );
  },

  _onChange: function() {
    this.setState({
      user: MusicianStore.get(id),
      bands: BandStore.getAll()
    });
  }
});

module.exports = UserInformationBox;