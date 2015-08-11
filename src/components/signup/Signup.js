var React = require('react');
var SignupHeader = require('./SignupHeader');
var SignupLeftColumn = require('./SignupLeftColumn');
var SignupRightColumn = require('./SignupRightColumn');

var Signup = React.createClass({
  render: function() {
    return (
      <div>
        <div className="signup-box">
          <SignupHeader />
          <form>
            <div className="form-divider">
              <SignupLeftColumn />
              <SignupRightColumn />
            </div>
            <a href="" className="btn">Submit</a>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Signup;