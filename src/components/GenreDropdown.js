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
    console.log('hello')
    var genres = this.genres.map(function(genre) {
      if (User.genre === genre) {
        return <option key={genre} value={genre} selected>{genre}</option>
      } else {
        return <option key={genre} value={genre}>{genre}</option>
      }
    });

    return genres;
  },

  render: function() {
    return (
      <div className="form-object">
        <div><i className="fa fa-music"></i></div>
        <div>
          <select name="genre" id="genre">
            <option value=''>Genre...</option>
            {this.checkForLogin()}
          </select>
        </div>
      </div>
    );
  }
});

module.exports = GenreDropdown;