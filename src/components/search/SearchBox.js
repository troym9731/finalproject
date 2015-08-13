var React = require('react');
var Address = require('../Address');
var GenreDropdown = require('../GenreDropdown');
var MapChoices = require('./MapChoices');

var SearchBox = React.createClass({
  render: function() {
    return (
      <div className="search-box">
        <h2>What are you looking for?</h2>
        <form>
          <MapChoices />
          <Address />
          <GenreDropdown />
          <button onClick={this.props.onClick}><i className="fa fa-search"></i></button>
        </form>
      </div>
    );
  }
});

module.exports = SearchBox;