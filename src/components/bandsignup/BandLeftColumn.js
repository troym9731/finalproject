var React = require('react');

var BandLeftColumn = React.createClass({
  render: function() {
    return (
      <div>
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
      </div>
    );
  }
})

module.exports = BandLeftColumn;