var React = require('react');

var EditSeriousLevel = React.createClass({
  levels: [
    'Just jam',
    'Practice frequently',
    'Play at venus'
  ],

  checkForLevel: function() {
    var band = this.props.band;
    var seriousLevel = this.levels.map(function(level) {
      return <option key={level} value={level}>{level}</option>
    });
    return seriousLevel;
  },

  render: function() {
    var optionValue = this.props.band.serious_level;
    return (
      <div className="form-object">
        <div><i className="fa fa-level-up"></i></div>
        <div>
          <select defaultValue={optionValue} name="serious_level" id="serious_level">
            <option value=''>How serious are you?</option>
            {this.checkForLevel()}
          </select>
        </div>
      </div>
    );
  }
});

module.exports = EditSeriousLevel;