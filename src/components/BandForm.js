var React = require('react');
var GenreDropdown = require('./GenreDropdown');

var BandForm = React.createClass({
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
      <form className="band-create">
        <div className="form-object">
          <div><i className="fa fa-play"></i></div>
          <div><input type="text" name="band-name" id="band-name" placeholder="Band Name"/></div>
        </div>
        <div className="form-object">
          <div><i className="fa fa-map-pin"></i></div>
          <div><input type="text" name="address" id="address" placeholder="Address (optional)"/></div>
        </div>
        <div className="form-object">
          <div><i className="fa fa-arrows"></i></div>
          <div><input type="text" name="zipcode" id="zipcode" placeholder="Zipcode (optional)"/></div>
        </div>
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
        <button>Submit</button>
      </form>
    );
  }
});

module.exports = BandForm;