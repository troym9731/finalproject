var React = require('react');

var InstrumentCheckbox = React.createClass({
  instruments: [
    'Guitar',
    'Piano',
    'Violin',
    'Bass',
    'Drums',
    'Trumpet',
    'Vocals',
    'Saxophone',
    'Clarinet',
    'Trombone',
    'Flute',
    'Kazoo',
    'Percussion',
    'Cello',
    'Ukulele'
  ],

  render: function() {
    var checkboxes = [];
    this.instruments.forEach(function(instrument) {
      checkboxes.push(<div className="cb-wrapper" key={instrument}><input type="checkbox" name="instruments" value={instrument} id={instrument}/><label htmlFor={instrument}> {instrument}</label></div>)
    })
    return (
      <div className="cb-form">
        <h3>What instruments do you play?</h3>
        <div>
          {checkboxes}
        </div>
      </div>
    );
  }
});

module.exports = InstrumentCheckbox;