var React = require('react');
var Router = require('react-router');
var BandInformation = require('./BandInformation');

var BandProfile = React.createClass({
  mixins: [ Router.State ],

  render: function() {
    var id = +this.props.params.id;
    return (
      <div>
        <BandInformation key={id} bandId={id} />
      </div>
    );
  }
});

module.exports = BandProfile;