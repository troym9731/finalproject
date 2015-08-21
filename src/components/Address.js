var React = require('react');

var Address = React.createClass({
  checkForLogin: function() {
    if (User) {
      return (
        <div>
          <div className="form-object">
            <div><i className="fa fa-map-pin"></i></div>
            <div><input type="text" name="address" id="address" placeholder="Street Address" defaultValue={User.address}/></div>
          </div>
          <div className="form-object">
            <div><i className="fa fa-arrows"></i></div>
            <div><input type="text" name="zipcode" id="zipcode" placeholder="Zipcode" defaultValue={User.zipcode}/></div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="form-object">
            <div><i className="fa fa-map-pin"></i></div>
            <div><input type="text" name="address" id="address" placeholder="Street Address"/></div>
          </div>
          <div className="form-object">
            <div><i className="fa fa-arrows"></i></div>
            <div><input type="text" name="zipcode" id="zipcode" placeholder="Zipcode"/></div>
          </div>
        </div>
      );
    }
  },

  render: function() {
    return (
      <div>
      {this.checkForLogin()}
      </div>
    );
  }
});

module.exports = Address;