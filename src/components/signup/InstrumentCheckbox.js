var React = require('react');

var InstrumentCheckbox = React.createClass({
  instruments: {
    'guitar': 'Guitar',
    'piano': 'Piano',
    'violin': 'Violin',
    'bass': 'Bass',
    'drums': 'Drums',
    'trumpet': 'Trumpet',
    'vocals': 'Vocals',
    'saxophone': 'Saxophone',
    'clarinet': 'Clarinet',
    'trombone': 'Trombone',
    'flute': 'Flute',
    'kazoo': 'Kazoo',
    'percussion': 'Percussion',
    'cello': 'Cello',
    'other': 'Other'
  },

  render: function() {
    var checkboxes = [];
    for (var key in this.instruments) {
      checkboxes.push(<div className="cb-wrapper" key={key}><input type="checkbox" name="instruments" value={key} id={key}/><label htmlFor={key}> {this.instruments[key]}</label></div>)
    }
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