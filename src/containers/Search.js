import React from "react";
import axios from "axios";

import "./Search.css";
import { HOST_URL } from "../settings";

class Search extends React.Component {
  state = {
    platform: "psn",
    gamertag: "",
    disabled: false,
    data: null,
    error: ""
  };

  inputHandler = (e, key) => {
    if (key === "platform") {
      this.setState({ platform: e.target.value });
    } else {
      this.setState({ gamertag: e.target.value });
    }
  };

  submitHandler = e => {
    e.preventDefault();
    this.setState({ disabled: true, error: "" });
    axios
      .get(
        `${HOST_URL}/?platform=${this.state.platform}&gamertag=${
          this.state.gamertag
        }`
      )
      .then(res => {
        if (res.data.errors) {
          this.setState({
            error: "Profile not found. Please try again.",
            disabled: false
          });
          return;
        }
        this.setState({ data: res.data.data, disabled: false });
        if (this.state.data) {
          this.props.history.push({
            pathname: "/profile-stats",
            state: this.state.data
          });
        }
      })
      .catch(error => {
        this.setState({
          disabled: false,
          error: "Unexpected error occured. Please try again."
        });
      });
  };

  render() {
    return (
      <div className="search-container text-white">
        <div className="m-3">
          {this.state.error && (
            <div className="alert alert-danger" role="alert">
              {this.state.error}
            </div>
          )}
          <h3 className="mt-3">Track Player Stats</h3>
          <form onSubmit={this.submitHandler}>
            <label>Platform</label>
            <select
              className="form-control"
              id="exampleFormControlSelect1"
              onChange={e => this.inputHandler(e, "platform")}
            >
              <option value="psn">Playstation</option>
              <option value="xbl">Xbox Live</option>
              <option value="origin">Origin</option>
            </select>

            <label className="mt-3">GamerTag</label>
            <input
              type="text"
              className="form-control"
              placeholder="ORIGIN ID, XBOX LIVE, PSD ID"
              required={true}
              onChange={e => this.inputHandler(e, "input")}
            />
            <button
              style={{ backgroundColor: "#BC2F2B" }}
              disabled={this.state.disabled ? true : false}
              className={"btn text-white col-12 mt-3"}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Search;
