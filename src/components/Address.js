var React = require('react');

var Address = React.createClass({
  render: function() {
    return (
      <div>
        <div className="form-object">
          <div><i className="fa fa-map-pin"></i></div>
          <div><input type="text" name="address" id="address" placeholder="Street Address"/></div>
        </div>
        <div className="form-object">
          <div><i className="fa fa-building"></i></div>
          <div><input type="text" name="city" id="city" placeholder="City"/></div>
        </div>
        <div className="form-object">
          <div><i className="fa fa-map"></i></div>
          <div><input type="text" name="state" id="state" placeholder="State"/></div>
        </div>
        <div className="form-object">
          <div><i className="fa fa-arrows"></i></div>
          <div><input type="text" name="zipcode" id="zipcode" placeholder="Zipcode"/></div>
        </div>
      </div>
    );
  }
});

module.exports = Address;