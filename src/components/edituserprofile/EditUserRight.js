var React = require('react');
var GenreDropdown = require('../GenreDropdown');
var InstrumentCheckbox = require('./EditCheckbox');

var EditUserRight = React.createClass({
  render: function() {
    return (
      <div className="signup-right-column">
        <div className="form-object">
          <div><i className="fa fa-key"></i></div>
          <div><input type="password" name="password" id="password" placeholder="Password" defaultValue={User.password}/></div>
        </div>
        <div className="form-object">
          <div><i className="fa fa-picture-o"></i></div>
          <div><input type="text" name="image" id="image" placeholder="Image URL" defaultValue={User.image}/></div>
        </div>
        <GenreDropdown />
        <InstrumentCheckbox />
      </div>
    );
  }
});

module.exports = EditUserRight;