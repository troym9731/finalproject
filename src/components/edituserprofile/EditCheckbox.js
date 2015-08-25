var React = require('react');
var _ = require('lodash');

var EditCheckbox = React.createClass({
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

  checkedBoxes: function() {
    var checkboxes = this.instruments.map(function(instrument) {
      if (_.indexOf(User.instruments, instrument) > -1) {
        return (
          <div className="cb-wrapper" key={instrument}>
            <input type="checkbox" name="instruments" value={instrument} id={instrument} defaultChecked/>
            <label htmlFor={instrument}> {instrument}</label>
          </div>
        );
      } else if (User.instruments === instrument) {
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
    })
    return checkboxes;
  },

  render: function() {
    return (
      <div className="cb-form">
        <h3>What instruments do you play?</h3>
        <div>
          {this.checkedBoxes()}
        </div>
      </div>
    );
  }
});

module.exports = EditCheckbox;