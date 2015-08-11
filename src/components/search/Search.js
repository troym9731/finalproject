var React = require('react');

var Search = React.createClass({
  render: function() {
    return (
      <div>
        <div id="map"></div>
        <div className="search">
          <div className="search-box">
            <h2>What are you looking for?</h2>
            <form>
              <div className="map-choices">
                <input type="radio" name="choice" value="bands" id="bands"/>
                <label htmlFor="bands"> Bands</label>
                <input type="radio" name="choice" value="musicians" id="musicians"/>
                <label htmlFor="musicians"> Musicians</label>
              </div>
              <div className="form-object">
                <div><i className="fa fa-map"></i></div>
                <div><input type="text" name="zipcode" id="zipcode" placeholder="Zip Code"/></div>
              </div>
              <div className="form-object">
                <div><i className="fa fa-music"></i></div>
                <div>
                  <select name="genere" id="genre">
                    <option defaultValue>Genre...</option>
                    <option value="rock">Rock</option>
                    <option value="jazz">Jazz</option>
                    <option value="country">Country</option>
                    <option value="hip-hop">Hip-Hop</option>
                    <option value="pop">Pop</option>
                    <option value="metal">Metal</option>
                    <option value="alternative">Alternative</option>
                    <option value="classical">Classical</option>
                  </select>
                </div>
              </div>
              <a href="" className="btn"><i className="fa fa-search"></i></a>
            </form>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Search;