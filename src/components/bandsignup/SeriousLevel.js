var React = require('react');

var SeriousLevel = React.createClass({
  render: function() {
    return (
      <div className="form-object">
        <div><i className="fa fa-level-up"></i></div>
        <div>
          <select name="serious_level" id="serious_level">
            <option defaultValue value=''>How serious are you?</option>
            <option value="Just jam">Just jam</option>
            <option value="Practice frequently">Practice frequently</option>
            <option value="Play at venues">Play at venues</option>
          </select>
        </div>
      </div>
    );
  }
});

module.exports = SeriousLevel;