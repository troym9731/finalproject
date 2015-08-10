var React = require('react');

var Header = React.createClass({
  checkForSearch: function() {
    if (this.props.search !== '/') {
      return true;
    } else {
      return false;
    }
  },
  render: function() {
    return (
      <header className="primary-header">
        <a href="/#/"><i className="fa fa-music"></i></a>
        <nav className="primary-nav">
          {this.checkForSearch() 
            ? <a href="/#/search" className="btn">Search</a>
            : ''
          }
          <a href="/#/signup" className="btn">Sign Up</a>
          <a href="/#/login" className="btn">Login</a>
        </nav>
      </header>
    );
  }
});

module.exports = Header;