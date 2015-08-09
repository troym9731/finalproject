var React = require('react');

var Header = React.createClass({
  render: function() {
    return (
      <header className="primary-header">
        <i className="fa fa-music"></i>
        <nav className="primary-nav">
          <a className="btn">Sign Up</a>
          <a className="btn">Login</a>
        </nav>
      </header>
    );
  }
});

module.exports = Header;