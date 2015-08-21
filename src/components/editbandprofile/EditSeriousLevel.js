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
      if (band.serious_level === level) {
        return <option key={level} value={level} selected>{level}</option>
      } else {
        return <option key={level} value={level}>{level}</option>
      }
    });
    return seriousLevel;
  },

  render: function() {
    return (
      <div className="form-object">
        <div><i className="fa fa-level-up"></i></div>
        <div>
          <select name="serious_level" id="serious_level">
            <option defaultValue value=''>How serious are you?</option>
            {this.checkForLevel()}
          </select>
        </div>
      </div>
    );
  }
});

module.exports = EditSeriousLevel;