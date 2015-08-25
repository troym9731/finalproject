var React = require('react');

var InstrumentDropdown = React.createClass({
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
    var options = [];
    this.instruments.forEach(function(instrument) {
      options.push(<option key={instrument} value={instrument}>{instrument}</option>);
    });
    return (
      <div className="form-object">
        <div><i className="fa fa-music"></i></div>
        <div>
          <select name="instrument" id="instrument">
            <option value=''>Specific Instrument...</option>
            {options}
          </select>
        </div>
      </div>
    );
  }
});

module.exports = InstrumentDropdown;