var React = require('react');

var TextArea = React.createClass({
  render: function() {
    return (
      <div className="description-container">
        <textarea className="profile-description" placeholder="Enter a short description of yourself..."></textarea>
      </div>
    );
  }
});

module.exports = TextArea;