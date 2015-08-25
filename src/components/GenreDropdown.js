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

  checkForLogin: function() {
    var genres = this.genres.map(function(genre) {
      return <option key={genre} value={genre}>{genre}</option>
    });

    return genres;
  },

  render: function() {
    var optionValue = User.genre ? User.genre : 'Genre...';
    return (
      <div className="form-object">
        <div><i className="fa fa-music"></i></div>
        <div>
          <select defaultValue={optionValue} name="genre" id="genre">
            <option value="">Genre...</option>
            {this.checkForLogin()}
          </select>
        </div>
      </div>
    );
  }
});

module.exports = GenreDropdown;