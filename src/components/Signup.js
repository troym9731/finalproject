var React = require('react');
var GenreDropdown = require('./GenreDropdown');

var SignupHeader = React.createClass({
  render: function() {
    return (
      <h1><i className="fa fa-headphones"></i>Sign Up</h1>
    );
  }
});

var SignupLeftColumn = React.createClass({
  render: function() {
    return (
      <div>

        <div className="form-object">
          <div><i className="fa fa-user"></i></div>
          <div><input type="text" name="first-name" id="first-name" placeholder="First Name"/></div>
        </div>
        <div className="form-object">
          <div><i className="fa fa-user"></i></div>
          <div><input type="text" name="last-name" id="last-name" placeholder="Last Name"/></div>
        </div>
        <div className="form-object">
          <div><i className="fa fa-envelope-o"></i></div>
          <div><input type="email" name="email" id="email" placeholder="Email Address"/></div>
        </div>
        <div className="form-object">
          <div><i className="fa fa-key"></i></div>
          <div><input type="password" name="password" id="password" placeholder="Password"/></div>
        </div>

      </div>
    );
  }
});

var StreetAddress = React.createClass({
  render: function() {
    return (
      <div className="form-object">
        <div><i className="fa fa-map-pin"></i></div>
        <div><input type="text" name="address" id="address" placeholder="Street Address"/></div>
      </div>
    );
  }
});

var InstrumentCheckbox = React.createClass({
  instruments: {
    'guitar': 'Guitar',
    'piano': 'Piano',
    'violin': 'Violin',
    'bass': 'Bass',
    'drums': 'Drums',
    'trumpet': 'Trumpet',
    'vocals': 'Vocals',
    'saxophone': 'Saxophone',
    'clarinet': 'Clarinet',
    'trombone': 'Trombone',
    'flute': 'Flute',
    'kazoo': 'Kazoo',
    'percussion': 'Percussion',
    'cello': 'cello',
    'other': 'other'
  },

  render: function() {
    var checkboxes = [];
    for (var key in this.instruments) {
      checkboxes.push(<div className="cb-wrapper" key={key}><input type="checkbox" name="instruments" value={key} id={key}/><label htmlFor={key}> {this.instruments[key]}</label></div>)
    }
    return (
      <div className="cb-form">
        <h3>What instruments do you play?</h3>
        <div>
          {checkboxes}
        </div>
      </div>
    );
  }
});

var SignupRightColumn = React.createClass({
  render: function() {
    return (
      <div>
        <StreetAddress />
        <GenreDropdown />
        <InstrumentCheckbox />
      </div>
    );
  }
});

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