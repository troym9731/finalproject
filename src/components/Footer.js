var React = require('react');

var Footer = React.createClass({
  render: function() {
    return (
      <footer className="primary-footer">
        <div>© BandJam made by Troy Mullaney</div>
        <nav>
          <a href="https://www.facebook.com/troy.mullaney"><i className="fa fa-facebook"></i></a>
          <a href="https://twitter.com/troym9731"><i className="fa fa-twitter"></i></a>
          <a href="https://plus.google.com/u/0/107207423776687081300/about"><i className="fa fa-google-plus"></i></a>
          <a href="https://github.com/troym9731"><i className="fa fa-github"></i></a>
        </nav>
      </footer>
    );
  }
});

module.exports = Footer;