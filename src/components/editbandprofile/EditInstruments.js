var React = require('react');
var _ = require('lodash');

var EditInstruments = React.createClass({
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
    var band = this.props.band;
    return (
      <div className="cb-form">
        <h3>What instruments might you need?</h3>
        <div>
          {this.instruments.map(function(instrument) {
            if (_.indexOf(band.instruments, instrument) > -1) {
              return (
                <div className="cb-wrapper" key={instrument}>
                  <input type="checkbox" name="instruments" value={instrument} id={instrument} defaultChecked/>
                  <label htmlFor={instrument}> {instrument}</label>
                </div>
              );
            } else if (band.instruments === instrument) {
              return (
                <div className="cb-wrapper" key={instrument}>
                  <input type="checkbox" name="instruments" value={instrument} id={instrument} defaultChecked/>
                  <label htmlFor={instrument}> {instrument}</label>
                </div>
              );
            } else {
              return (
                <div className="cb-wrapper" key={instrument}>
                  <input type="checkbox" name="instruments" value={instrument} id={instrument}/>
                  <label htmlFor={instrument}> {instrument}</label>
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  }
});

module.exports = EditInstruments;