var React = require('react');

var EditBandLeftColumn = React.createClass({
  render: function() {
    var band = this.props.band;
    return (
      <div>
        <div className="form-object">
          <div><i className="fa fa-play"></i></div>
          <div><input type="text" name="name" id="name" placeholder="Band Name" defaultValue={band.name}/></div>
        </div>
        <div className="form-object">
          <div><i className="fa fa-map-pin"></i></div>
          <div><input type="text" name="address" id="address" placeholder="Address (optional)" defaultValue={band.address}/></div>
        </div>
        <div className="form-object">
          <div><i className="fa fa-arrows"></i></div>
          <div><input type="text" name="zipcode" id="zipcode" placeholder="Zipcode (optional)" defaultValue={band.zipcode} /></div>
        </div>
      </div>
    );
  }
})

module.exports = EditBandLeftColumn;