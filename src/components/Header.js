var React = require('react');

var Header = React.createClass({

  changeBackground: function() {
    var path = this.props.search;
    if (path === '/' || path === '/login' || path === '/signup') {
      return true;
    } else {
      return false;
    }
  },

  checkForSearch: function() {
    return this.props.search !== '/' ? true : false;
  },

  render: function() {
    var headerColor = this.changeBackground() ? 'primary-header' : 'primary-header dark';
    return (
      <header className={headerColor}>
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