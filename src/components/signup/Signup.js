var React = require('react');

var Signup = React.createClass({
  render: function() {
    return (
      <div>
        <div className="signup-box">
          <h1><i className="fa fa-headphones"></i>Sign Up</h1>
          <form>
            <div className="form-divider">

              <div>

                <div className="form-object">
                  <div><i className="fa fa-user"></i></div>
                  <div><input type="text" name="first-name" id="first-name" placeholder="First Name"/></div>
                </div>
                <div className="form-object">
                  <div><i className="fa fa-user"></i></div>
                  <div><input type="text" name="last-name" id="last-name" placeholder="Last Name"/></div>
                </div>
                <div className="form-object">
                  <div><i className="fa fa-envelope-o"></i></div>
                  <div><input type="email" name="email" id="email" placeholder="Email Address"/></div>
                </div>
                <div className="form-object">
                  <div><i className="fa fa-key"></i></div>
                  <div><input type="password" name="password" id="password" placeholder="Password"/></div>
                </div>

              </div>

              <div>

                <div className="form-object">
                  <div><i className="fa fa-map-pin"></i></div>
                  <div><input type="text" name="address" id="address" placeholder="Street Address"/></div>
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
                
                <div className="cb-form">
                  <h3>What instruments do you play?</h3>
                  <div>
                    <div className="cb-wrapper">
                      <input type="checkbox" name="instruments" value="guitar" id="guitar"/>
                      <label htmlFor="guitar"> Guitar</label>
                    </div>
                    <div className="cb-wrapper">
                      <input type="checkbox" name="instruments" value="piano" id="piano"/>
                      <label htmlFor="piano"> Piano</label>
                    </div>
                    <div className="cb-wrapper">
                      <input type="checkbox" name="instruments" value="violin" id="violin"/>
                      <label htmlFor="violin"> Violin</label>
                    </div>
                    <div className="cb-wrapper">
                      <input type="checkbox" name="instruments" value="bass" id="bass"/>
                      <label htmlFor="bass"> Bass</label>
                    </div>
                    <div className="cb-wrapper">
                      <input type="checkbox" name="instruments" value="drums" id="drums"/>
                      <label htmlFor="drums"> Drums</label>
                    </div>
                    <div className="cb-wrapper">
                      <input type="checkbox" name="instruments" value="trumpet" id="trumpet"/>
                      <label htmlFor="trumpet"> Trumpet</label>
                    </div>
                    <div className="cb-wrapper">
                      <input type="checkbox" name="instruments" value="vocals" id="vocals"/>
                      <label htmlFor="vocals"> Vocals</label>
                    </div>
                    <div className="cb-wrapper">
                      <input type="checkbox" name="instruments" value="saxophone" id="saxophone"/>
                      <label htmlFor="saxophone"> Saxophone</label>
                    </div>
                    <div className="cb-wrapper">
                      <input type="checkbox" name="instruments" value="clarinet" id="clarinet"/>
                      <label htmlFor="clarinet"> Clarinet</label>
                    </div>
                    <div className="cb-wrapper">
                      <input type="checkbox" name="instruments" value="trombone" id="trombone"/>
                      <label htmlFor="trombone"> Trombone</label>
                    </div>
                    <div className="cb-wrapper">
                      <input type="checkbox" name="instruments" value="flute" id="flute"/>
                      <label htmlFor="flute"> Flute</label>
                    </div>
                    <div className="cb-wrapper">
                      <input type="checkbox" name="instruments" value="kazoo" id="kazoo"/>
                      <label htmlFor="kazoo"> Kazoo</label>
                    </div>
                    <div className="cb-wrapper">
                      <input type="checkbox" name="instruments" value="percussion" id="percussion"/>
                      <label htmlFor="percussion"> Percussion</label>
                    </div>
                    <div className="cb-wrapper">
                      <input type="checkbox" name="instruments" value="cello" id="cello"/>
                      <label htmlFor="cello"> Cello</label>
                    </div>
                    <div className="cb-wrapper">
                      <input type="checkbox" name="instruments" value="other" id="other"/>
                      <label htmlFor="other"> Other</label>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <a href="" className="btn">Submit</a>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Signup;