var React = require('react');
var BandLeftColumn = require('./BandLeftColumn');
var BandRightColumn = require('./BandRightColumn');
var Instruments = require('./Instruments');

var BandForm = React.createClass({
  render: function() {
    return (
      <form className="band-create">
        <div className="band-form-divider">
          <BandLeftColumn />
          <BandRightColumn />
        </div>
        <Instruments />
        <button>Submit</button>
      </form>
    );
  }
});

module.exports = BandForm;