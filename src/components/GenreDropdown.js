var React = require('react');

var GenreDropdown = React.createClass({
  genres: [
    'Rock',
    'Jazz',
    'Country',
    'Hip-Hop',
    'Pop',
    'Metal',
    'Alternative',
    'Classical'
  ],

  render: function() {
    var options = [];
    this.genres.forEach(function(genre) {
      options.push(<option key={genre} value={genre}>{genre}</option>);
    });
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