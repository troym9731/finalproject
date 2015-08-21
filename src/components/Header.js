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
    if (this.props.search !== '/') {
      return <a href="/#/search" className="btn">Search</a>;
    } else {
      return;
    }
  },

  checkForLogin: function() {
    if (User) {
      var url = "/#/user/" + User.id;
      if (User.inBand) {
        if (Array.isArray(User.inBand)) {
          var bandUrl = "/#/band/" + User.inBand[0];
        } else {
          var bandUrl = "/#/band/" + User.inBand;
        }
        return (
          <span>
            <a href={bandUrl} className="btn">View Band</a>
            <a href={url} className="btn">{User.first_name}</a>
          </span>
        );   
      } else {
        return <a href={url} className="btn">{User.first_name}</a>
      }
    } else {
      return (
        <span>
          <a href="/#/signup" className="btn">Sign Up</a>
          <a href="/#/login" className="btn">Login</a>
        </span>
      );
    }
  },

  render: function() {
    var headerColor = this.changeBackground() ? 'primary-header' : 'primary-header dark';
    return (
      <header className={headerColor}>
        <a href="/#/"><i className="fa fa-music"></i></a>
        <nav className="primary-nav">
          {this.checkForSearch()}
          {this.checkForLogin()}
        </nav>
      </header>
    );
  }
});

module.exports = Header;