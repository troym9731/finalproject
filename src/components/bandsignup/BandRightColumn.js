var React = require('react');
var GenreDropdown = require('../GenreDropdown');
var SeriousLevel = require('./SeriousLevel');

var BandRightColumn = React.createClass({
  number: [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10
  ],

  render: function() {
    var options = [];
    this.number.forEach(function(number) {
      options.push(<option key={number} value={number}>{number}</option>);
    });
    return (
      <div>
        <div className="form-object">
          <div><i className="fa fa-list-ol"></i></div>
          <div>
            <select name="bandmembers" id="bandmembers">
              <option defaultValue value=''>Number of band members...</option>
              {options}
            </select>
          </div>
        </div>
        <GenreDropdown />
        <SeriousLevel />
      </div>
    );
  }
});

module.exports = BandRightColumn;