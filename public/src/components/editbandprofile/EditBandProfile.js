var React = require('react');
var Router = require('react-router');
var EditBandForm = require('./EditBandForm');

var EditBandProfile = React.createClass({
  mixins: [ Router.State ],

  render: function() {
    var id = this.props.params.id;
    return (
      <div className="band-form-bg">
        <div className="signup-box band-form edit">
          <h1><i className="fa fa-headphones"></i>Edit Band</h1>
          <EditBandForm bandId={id} key={id} />
        </div>
       </div>
    );
  }
});

module.exports = EditBandProfile;