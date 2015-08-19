var React = require('react');

var Instruments = React.createClass({
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
    return (
      <div className="cb-form">
        <h3>What instruments might you need?</h3>
        <div>
          {this.instruments.map(function(instrument) {
            return (
              <div className="cb-wrapper" key={instrument}>
                <input type="checkbox" name="instruments" value={instrument} id={instrument}/>
                <label htmlFor={instrument}> {instrument}</label>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
});

module.exports = Instruments;