var React = require('react');

var EditBandGenre = React.createClass({
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
    var band = this.props.band;
    var genres = this.genres.map(function(genre) {
      return <option key={genre} value={genre}>{genre}</option>
    });

    return genres;
  },

  render: function() {
    var optionValue = this.props.band.genre;
    return (
      <div className="form-object">
        <div><i className="fa fa-music"></i></div>
        <div>
          <select defaultValue={optionValue} name="genre" id="genre">
            <option value=''>Genre...</option>
            {this.checkForLogin()}
          </select>
        </div>
      </div>
    );
  }
});

module.exports = EditBandGenre;