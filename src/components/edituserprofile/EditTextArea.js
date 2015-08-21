var React = require('react');

var EditTextArea = React.createClass({
  render: function() {
    var description = User.description;
    return (
      <div className="description-container">
        <textarea className="profile-description" placeholder="Enter a short description of yourself..." defaultValue={description}></textarea>
      </div>
    );
  }
});

module.exports = EditTextArea;