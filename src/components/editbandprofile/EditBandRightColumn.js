var React = require('react');
var EditBandGenre = require('./EditBandGenre');
var EditSeriousLevel = require('./EditSeriousLevel');

var EditBandRightColumn = React.createClass({
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
    var band = this.props.band;
    var options = [];
    this.number.forEach(function(number) {
      if (band.members_needed === number) {
        options.push(<option key={number} value={number} selected>{number}</option>);
      } else {
        options.push(<option key={number} value={number}>{number}</option>)
      }
    });
    return (
      <div>
        <div className="form-object">
          <div><i className="fa fa-picture-o"></i></div>
          <div><input type="text" name="image" id="image" placeholder="Image URL" defaultValue={band.image}/></div>
        </div>
        <div className="form-object">
          <div><i className="fa fa-list-ol"></i></div>
          <div>
            <select name="members_needed" id="members_needed">
              <option defaultValue value=''>Number of band members...</option>
              {options}
            </select>
          </div>
        </div>
        <EditBandGenre band={band} />
        <EditSeriousLevel band={band} />
      </div>
    );
  }
});

module.exports = EditBandRightColumn;