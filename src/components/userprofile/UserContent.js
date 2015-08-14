var React = require('react');

var UserContent = React.createClass({
  render: function() {
    return (
      <div>
        <header className="user-header">
          <h2>Troy Mullaney</h2>
          <div className="header-info">
            <h4><b>Email Address</b>: troym9731@gmail.com</h4>
            <h4><b>Genre</b>: Rock</h4>
          </div>
        </header>

        <div className="profile-content">
          <div className="user-info">
            <h4><b>Address</b>: 1363 W. 14th St. 85281</h4>
            <h4><b>Instruments</b>: Guitar, Piano</h4>
          </div>

          <p>
            I'm a huge fan of pop punk band such as Blink-182, Green Day, and Sum 41.
            Some of my favorite bands include Yellowcard and Breaking Benjamin.I'm a huge fan of pop punk band such as Blink-182, Green Day, and Sum 41.
            Some of my favorite bands include Yellowcard and Breaking Benjamin.I'm a huge fan of pop punk band such as Blink-182, Green Day, and Sum 41.
            Some of my favorite bands include Yellowcard and Breaking Benjamin.I'm a huge fan of pop punk band such as Blink-182, Green Day, and Sum 41.
            Some of my favorite b
          </p>
        </div>
      </div>
    );
  }
});

module.exports = UserContent;