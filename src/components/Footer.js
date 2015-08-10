var React = require('react');

var Footer = React.createClass({
  render: function() {
    return (
      <footer className="primary-footer">
        <div>© BandJam made by Troy Mullaney</div>
        <nav>
          <i className="fa fa-facebook"></i>
          <i className="fa fa-twitter"></i>
          <i className="fa fa-google-plus"></i>
          <i className="fa fa-github"></i>
        </nav>
      </footer>
    );
  }
});

module.exports = Footer;