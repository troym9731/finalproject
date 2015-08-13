var React = require('react');

var MapChoices = React.createClass({
  render: function() {
    return (
      <div className="map-choices">
        <input type="radio" name="choice" value="bands" id="bands"/>
        <label htmlFor="bands"> Bands</label>
        <input type="radio" name="choice" value="musicians" id="musicians"/>
        <label htmlFor="musicians"> Musicians</label>
        <input type="radio" name="choice" value="" id="both" defaultChecked/>
        <label htmlFor="both"> Both</label>
      </div>
    );
  }
});

module.exports = MapChoices;