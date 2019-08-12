import React from "react";
import "./Profile.css";

class Profile extends React.Component {
  backHandler = () => {
    this.props.history.goBack();
  };

  render() {
    const profileData = this.props.location.state;
    return (
      <div className="profile-container h-100">
        <div className="profile-container__gamertag">
          <h3 className="m-2 p-2">
            <img
              style={{ width: "30px", height: "30px" }}
              src={profileData.platformInfo.avatarUrl}
              className="rounded"
              alt=""
            />{" "}
            {profileData.platformInfo.platformUserId}
          </h3>
        </div>
        <div className="row p-0 no-gutters">
          <div className="col-md-6 ">
            <div className="mx-auto" style={{ width: "70%", height: "12rem" }}>
              <img
                className="img-fluid avatar"
                src={profileData.segments[1].metadata.imageUrl}
                alt=""
              />
            </div>
          </div>

          <div className="col-md-6  p-0">
            <div className="row mb-3">
              <div
                className="col-10  text-white mt-2 mx-auto"
                style={{ backgroundColor: "#752328" }}
              >
                <label>Selected Legend</label>
                <h4>{profileData.platformInfo.platformUserId}</h4>
              </div>
              <div
                className="col-10  text-white mt-2  mx-auto"
                style={{ backgroundColor: "#752328" }}
              >
                <label>Season Wins</label>
                <h4>
                  {profileData.segments[0].stats.seasonWins.displayValue}
                  <label className="ml-2" style={{ fontSize: "1rem" }}>
                    ({profileData.segments[0].stats.seasonWins.percentile})
                  </label>
                </h4>
              </div>
              <div
                className="col-10  text-white mt-2  mx-auto"
                style={{ backgroundColor: "#752328" }}
              >
                <label>Apex Level</label>
                <h4>
                  {profileData.segments[0].stats.level.displayValue}{" "}
                  <label className="ml-2" style={{ fontSize: "1rem" }}>
                    ({profileData.segments[0].stats.level.percentile}%)
                  </label>
                </h4>
              </div>
              <div
                className="col-10  text-white mt-2  mx-auto"
                style={{ backgroundColor: "#752328" }}
              >
                <label>Lifetime Kills</label>
                <h4>
                  {profileData.segments[0].stats.kills.displayValue}{" "}
                  <label className="ml-2" style={{ fontSize: "1rem" }}>
                    ({profileData.segments[0].stats.kills.percentile}%)
                  </label>
                </h4>
              </div>
              <div
                className="col-10  text-white mt-2  mx-auto"
                style={{ backgroundColor: "#752328" }}
              >
                <label>Damage Done</label>
                <h4>
                  {profileData.segments[0].stats.damage.displayValue}
                  <label className="ml-2" style={{ fontSize: "1rem" }}>
                    ({profileData.segments[0].stats.damage.percentile}%)
                  </label>
                </h4>
              </div>
            </div>
          </div>
          <button
            className="btn border bg-transparent text-white ml-5 mb-3"
            onClick={this.backHandler}
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }
}

export default Profile;
