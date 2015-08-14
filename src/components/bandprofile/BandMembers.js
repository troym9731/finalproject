var React = require('react');

var BandMembers = React.createClass({
  render: function() {
    return (
      <div className="band-members">
        <h2>Members</h2>
        <div className="member-container">

          <div className="member-tile">
            <img src="./images/me.jpg" alt="Member Image"/>
            <div>
              <h4>Troy Mullaney</h4>
            </div>
          </div>

          <div className="member-tile">
            <img src="./images/me.jpg" alt="Member Image"/>
            <div>
              <h4>Troy Mullaney</h4>
            </div>
          </div>

          <div className="member-tile">
            <img src="./images/me.jpg" alt="Member Image"/>
            <div>
              <h4>Troy Mullaney</h4>
            </div>
          </div>

          <div className="member-tile">
            <img src="./images/me.jpg" alt="Member Image"/>
            <div>
              <h4>Troy Mullaney</h4>
            </div>
          </div>

        </div>
      </div>
    );
  }
});

module.exports = BandMembers;