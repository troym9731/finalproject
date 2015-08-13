var React = require('react');

var GenreDropdown = React.createClass({
  genres: {
    'rock': 'Rock',
    'jazz': 'Rock',
    'country': 'Country',
    'hip-hop': 'Hip-Hop',
    'pop': 'Pop',
    'metal': 'Metal',
    'alternative': 'Alternative',
    'classical': 'Classical'
  },

  render: function() {
    var options = [];
    for (var key in this.genres) {
      options.push(<option key={key} value={key}>{this.genres[key]}</option>);
    }
    return (
      <div className="form-object">
        <div><i className="fa fa-music"></i></div>
        <div>
          <select name="genre" id="genre">
            <option defaultValue value=''>Genre...</option>
            {options}
          </select>
        </div>
      </div>
    );
  }
});

module.exports = GenreDropdown;