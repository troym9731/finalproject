var React = require('react');

var BandMembers = React.createClass({
  render: function() {
    return (
      <div className="band-members">
        <h2>Members</h2>
        <div className="member-container">

          <div className="member-tile">
            <img src="./images/me.jpg" alt="Member Image"/>
            <div className="text-wrapper">
              <div className="inner-text">
                <h4>Troy Mullaney</h4>
                <a href="" className="btn">Profile</a>
              </div>
            </div>
          </div>

          <div className="member-tile">
            <img src="./images/person1.jpg" alt="Member Image"/>
            <div className="text-wrapper">
              <div className="inner-text">
                <h4>Troy Mullaney</h4>
                <a href="" className="btn">Profile</a>
              </div>
            </div>
          </div>

          <div className="member-tile">
            <img src="./images/person2.jpg" alt="Member Image"/>
            <div className="text-wrapper">
              <div className="inner-text">
                <h4>Troy Mullaney</h4>
                <a href="" className="btn">Profile</a>
              </div>
            </div>
          </div>

          <div className="member-tile">
            <img src="./images/person3.jpg" alt="Member Image"/>
            <div className="text-wrapper">
              <div className="inner-text">
                <h4>Troy Mullaney</h4>
                <a href="" className="btn">Profile</a>
              </div>
            </div>
          </div>

          <div className="member-tile">
            <img src="./images/person3.jpg" alt="Member Image"/>
            <div className="text-wrapper">
              <div className="inner-text">
                <h4>Troy Mullaney</h4>
                <a href="" className="btn">Profile</a>
              </div>
            </div>
          </div>

          <div className="member-tile">
            <img src="./images/person3.jpg" alt="Member Image"/>
            <div className="text-wrapper">
              <div className="inner-text">
                <h4>Troy Mullaney</h4>
                <a href="" className="btn">Profile</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
});

module.exports = BandMembers;